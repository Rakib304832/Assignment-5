import type { type as CardType } from "../type";

function YourStack({stack, onRemove, onRemoveAll}: {stack:CardType[]; onRemove: (id: string) => void; onRemoveAll: () => void;}){
   return(
    <div className="border-gray-200 rounded-xl p-5 sticky top-5">
        <h2>Your Stack</h2>
        {stack.length === 0 ? (
            <div>
                <p className="text-gray-500">No Technology Selected</p>
                <p className="text-gray-500">Your stack is empty</p>
            </div>
        ):(
        <>
        <p className="text-gray-500">{stack.length} Technology Selected</p>
                {stack.map((item) => (
                    <div key={item.id} className="flex items-center justify-between py-2 border-b border-gray-200">
                        <img src={item.icon} alt={item.name} className="h-7.5 w-7.5" />
                        <div>
                            <div className="font-bold">{item.name}</div>
                            <div className="text-xs text-gray-400">{item.category}</div>
                        </div>
                        <button
                            onClick={() => onRemove(item.id)}
                            className="bg-transparent border-none cursor-pointer text-lg text-gray-400 hover:text-gray-600"
                            aria-label={`Remove ${item.name}`}
                        >
                            ×
                        </button>
                    </div>
                ))}
            <button
            onClick={onRemoveAll}
            
            className="w-full mt-4 py-2 rounded-md bg-red-100 text-red-600 hover:bg-red-200 cursor-pointer"
          >
            Remove All
          </button>
        </>
        
        )}
    </div>
   )
}

export default YourStack;