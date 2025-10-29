import './globals.css'
import Link from 'next/link'

export const metadata = {
  title: 'Card Vision - Admin Dashboard',
  description: 'Dashboard clone'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased bg-slate-50 text-slate-900">
        <header className="bg-white border-b">
          <div className="container mx-auto px-4 py-4 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <img src="/logo.svg" alt="logo" width={32} height={32} />
              <span className="text-xl font-bold">Card Vision</span>
              <nav className="hidden lg:flex items-center gap-2 ml-6">
                <Link className="px-4 py-2 rounded-md text-sm hover:bg-slate-100" href="/dashboard/card-list">Card List</Link>
                <Link className="px-4 py-2 rounded-md text-sm hover:bg-slate-100" href="/dashboard/user-list">User List</Link>
                <Link className="px-4 py-2 rounded-md text-sm hover:bg-slate-100" href="/dashboard/pokemoncard-list">Pokemoncard List</Link>
              </nav>
            </div>
            <div>
              <button className="px-4 py-2 bg-sky-600 text-white rounded-md hover:bg-sky-700">
                Logout
              </button>
            </div>
          </div>
        </header>
        <main className="container mx-auto px-4 py-8">{children}</main>
      </body>
    </html>
  )
}
