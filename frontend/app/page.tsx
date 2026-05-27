import Link from 'next/link'

export default function HomePage() {
  return (
    <section className="py-20 text-center">
      <h1 className="text-5xl font-bold mb-4">Elite PC Hardware</h1>
      <p className="text-blue-200 mb-8">RAM, SSD, HDD, GPUs, CPUs and more.</p>
      <Link href="/shop" className="bg-blue-600 px-6 py-3 rounded-lg">Start Shopping</Link>
    </section>
  )
}
