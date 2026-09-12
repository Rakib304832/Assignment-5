import { use } from "react";
import type { type as CardType } from "../type"; 



function CardList({
  cardPromise,     
  selectedStack,    
  onAdd,             
  onRemove,          
}: {
  cardPromise: Promise<CardType[]>;
  selectedStack: CardType[];
  onAdd: (item: CardType) => void;
  onRemove: (id: string) => void;
}) {

  const items = use(cardPromise);

  return (
     
    <div className="grid grid-cols-1 gap-5 py-5 pl-70 pr-20 md:grid-cols-2 lg:grid-cols-3">
  {items.map((item) => {
    const isSelected = selectedStack.some((i) => i.id === item.id);
    return (
    <div
      key={item.id}
      className="group rounded-lg border border-gray-200
        bg-white
        p-5
        shadow-sm
        transition-all duration-200
        hover:-translate-y-1
        hover:border-gray-300
        hover:shadow-md
      "
    >
      {/* Icon + Badge */}
      <div className="flex items-start justify-between">
        <img
          src={item.icon}
          alt={item.name}
          width="50"
          height="50"
          className="h-12.5 w-12.5 object-contain"
        />

        <span
          className="
            rounded
            bg-gray-100
            px-2 py-1
            text-xs font-medium
            text-gray-600
          "
        >
          {item.badge}
        </span>
      </div>

      {/* Name */}
      <h2
        className="
          mt-4
          text-base
          font-bold
          text-gray-900
        "
      >
        {item.name}
      </h2>

      {/* Description */}
      <p
        className="
          mt-2
          min-h-10
          text-xs
          leading-5
          text-gray-500
        "
      >
        {item.description}
      </p>
      <div className="flex justify-between container mx-auto">
      {/* Category */}
      <p className="mt-4 text-xs text-gray-600">
        <b className="font-semibold text-gray-800">
        </b>{" "}
        {item.category}
      </p>
       
      {/* Difficulty */}
      <p className="mt-2 text-xs text-gray-600">
        <b className="font-semibold text-gray-800">
        </b>{" "}
        {item.difficulty}
      </p> 

       {/* Rating */}
      <p className="mt-2 text-xs text-gray-600">
        <b className="font-semibold text-gray-800">
        </b>{" "}
        
        {item.rating} ⭐
      </p>
     </div>
      {/* Select Button */}
      <button
      onClick={() => (isSelected ? onRemove(item.id): onAdd(item))}
        className="
          mt-4
          w-full
          rounded-md
          bg-gray-900
          px-4 py-2
          text-xs
          font-semibold
          text-white
          transition-all duration-200
          hover:bg-gray-700
          active:scale-[0.98]
        "
      >
        {isSelected ? "Remove from Stack" : "Add to Stack"}
      </button>
    </div>
    )
  })}
</div>
  );
}

export default CardList;