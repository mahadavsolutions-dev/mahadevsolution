import ProductCard from '@/components/ProductCard'
import { Product } from '@/types'

const mockProducts: Product[] = [
  { _id: '1', name: 'DDR5 32GB RAM Kit', category: 'RAM', description: 'Fast RAM', price: 149, image: 'https://images.unsplash.com/photo-1562976540-1502c2145186', stock: 20 },
  { _id: '2', name: '1TB NVMe SSD', category: 'SSD', description: 'Fast SSD', price: 99, image: 'https://images.unsplash.com/photo-1591488320449-011701bb6704', stock: 30 },
  { _id: '3', name: 'RTX-Class GPU', category: 'Graphics Cards', description: 'Powerful GPU', price: 799, image: 'https://images.unsplash.com/photo-1587202372775-e229f172b9d7', stock: 10 }
]

export default function ShopPage() {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-6">Shop Components</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {mockProducts.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  )
}
