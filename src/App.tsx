import Navbar from "./compunent/Navber"
import Banner from "./compunent/Banner"
import { Suspense, useState} from "react"
import CardList from "./compunent/card"
import YourStack from "./compunent/YourStack"
import type { type as CardType} from "./type"
import Footer from "./compunent/footer"


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
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 py-5 sm:px-6 lg:flex-row lg:px-8">
        <div className="min-w-0 lg:flex-[3]">
          <Suspense fallback={"Lodding..."}>
          <div className="w-full ">
        <CardList
          cardPromise={cardPromise}
          selectedStack={selectedStack}
          onAdd={addToStack}
          onRemove={removeFromStack}
        />
        </div>
      </Suspense>
        </div>
        <div className="min-w-0 lg:flex-1">
          <YourStack  stack={selectedStack} onRemove={removeFromStack} onRemoveAll={removeAll}/>
        </div>
      </div>
      <Footer/>
    </>
  )
}

export default App
