async function getProduct(id: string) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/products/${id}`,
    {
      cache: 'no-store'
    }
  )

  if (!res.ok) {
    throw new Error('Failed to fetch product')
  }

  return res.json()
}

type Props = {
  params: Promise<{
    id: string
  }>
}

export default async function ProductPage({
  params
}: Props) {
  const { id } = await params

  const product = await getProduct(id)

  return (
    <main className="container mx-auto py-8 px-4 text-white">
      <div className="bg-slate-950 p-6 rounded-xl border border-slate-800">

        <h1 className="text-4xl font-bold mb-4">
          {product.name}
        </h1>

        <p className="text-cyan-400 text-2xl font-semibold mb-6">
          ${product.price}
        </p>

        <div className="bg-slate-900 p-4 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">
            Specifications
          </h2>

          <pre className="text-sm text-slate-300 overflow-x-auto">
            {JSON.stringify(product.specs, null, 2)}
          </pre>
        </div>

      </div>
    </main>
  )
}
