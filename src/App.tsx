import Navbar from "./compunent/Navber.jsx"
import Banner from "./compunent/Banner.js"
import { Suspense, } from "react"
import CardList from "./compunent/card.js"
import YourStack from "./compunent/YourStack.js"

import './App.css'
import type { type } from "./type.js"

const cardItem = async (): Promise<type[]> => {
  const res = await fetch('/data.json')
  const data = await res.json()
  return data
}

function App() {
  const cardPromise = cardItem()
  return (
    <>
      <Navbar />
      <Banner />
      <div className="flex gap-6 p-5">
        <div style={{flex: 3}}>
          <Suspense fallback={"Lodding..."}>
        <CardList cardPromise={cardPromise} />
      </Suspense>
        </div>
        <div style={{flex: 1}}>
          <YourStack  stack={selectedStack} onRemove={removeFromStack} onRemoveAll={removeAll}/>
        </div>
      </div>
    </>
  )
}

export default App
