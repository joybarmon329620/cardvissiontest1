import CardList from '../../../components/CardList'

export default async function CardListPage() {
  const res = await fetch('http://localhost:3000/api/cards')
  const data = await res.json()

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Card List</h2>
      <CardList cards={data.cards} />
    </div>
  )
}
