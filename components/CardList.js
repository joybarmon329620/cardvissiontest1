export default function CardList({ cards = [] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {cards.map((card) => (
        <div key={card.id} className="bg-white p-4 rounded-lg shadow hover:shadow-md transition-shadow">
          <img
            src={card.tcgSmallImageUrl}
            alt={card.name}
            className="w-full h-40 object-contain mb-3"
          />
          <h3 className="font-semibold text-lg">{card.name}</h3>
          <p className="text-sm text-slate-500 mb-2">
            {card.setName} • {card.series}
          </p>
          <div className="flex items-center justify-between text-sm">
            <div>
              Grade: <strong>{card.grading}</strong>
            </div>
            <div>
              Price: {card.priceCurrency} {card.priceMarket}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
