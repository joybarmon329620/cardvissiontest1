export default function Home() {
  return (
    <div className="max-w-3xl mx-auto text-center py-20">
      <h1 className="text-3xl font-bold mb-4">Card Vision — Admin Dashboard</h1>
      <p className="text-slate-600">
        Open the dashboard pages:{' '}
        <a className="text-sky-600 underline" href="/dashboard/card-list">
          Card List
        </a>
      </p>
    </div>
  )
}
