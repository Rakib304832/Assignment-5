import type { type as CardType } from "../type";

function YourStack({stack, onRemove, onRemoveAll}: {stack:CardType[]; onRemove: (id: string) => void; onRemoveAll: () => void;}){
   return(
    <div className="sticky top-5 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
        <h2 className="text-base font-bold text-slate-900">Your Stack</h2>
        {stack.length === 0 ? (
            <div>
                <p className="mt-1 text-sm text-slate-400">No technologies selected yet.</p>
                <div className="mt-4 flex h-[66px] items-center justify-center rounded-xl border border-dashed border-slate-200">
                    <p className="text-xs text-slate-400">Your stack is empty.</p>
                </div>
            </div>
        ):(
        <>
        <p className="mt-1 text-sm text-slate-400">{stack.length} Technology Selected</p>
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