import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-black/70 backdrop-blur border-b border-blue-900">
      <div className="max-w-6xl mx-auto p-4 flex justify-between">
        <Link href="/" className="font-bold text-xl text-blue-400">TechForge</Link>
        <div className="space-x-4 text-sm">
          <Link href="/shop">Shop</Link>
          <Link href="/cart">Cart</Link>
          <Link href="/dashboard">Dashboard</Link>
          <Link href="/admin">Admin</Link>
        </div>
      </div>
    </nav>
  )
}
