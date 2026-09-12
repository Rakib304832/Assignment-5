import Navbar from "./compunent/Navber"
import Banner from "./compunent/Banner"
import { Suspense, useState} from "react"
import CardList from "./compunent/card"
import YourStack from "./compunent/YourStack"
import type { type as CardType} from "./type"


const cardItem = async (): Promise<CardType[]> => {
  const res = await fetch('/data.json')
  const data = await res.json()
  return data
}


function App() {
  const cardPromise = cardItem()
  const [selectedStack, setSelectedStack] = useState<CardType[]>([])
  const addToStack = (item: CardType)=>{
    setSelectedStack((prev) =>
      prev.some((i) => i.id === item.id) ? prev : [...prev, item])
  }
  const removeFromStack = (id: string) => {
    setSelectedStack((prev) => prev.filter((i) => i.id !== id))

  }
  const removeAll = () =>  setSelectedStack([])
  return (
    <>
      <Navbar />
      <Banner />
      <div className="flex gap-6 p-5">
        <div style={{flex: 3}}>
          <Suspense fallback={"Lodding..."}>
        <CardList
          cardPromise={cardPromise}
          selectedStack={selectedStack}
          onAdd={addToStack}
          onRemove={removeFromStack}
        />
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
