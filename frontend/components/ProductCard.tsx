import Link from 'next/link'
import { Product } from '@/types'

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="card">
      <img src={product.image} alt={product.name} className="w-full h-44 object-cover rounded" />
      <h3 className="font-semibold mt-3">{product.name}</h3>
      <p className="text-blue-300 text-sm">{product.category}</p>
      <p className="mt-2 font-bold">${product.price.toFixed(2)}</p>
      <Link href={`/product/${product._id}`} className="inline-block mt-3 bg-blue-600 px-4 py-2 rounded">View</Link>
    </div>
  )
}
