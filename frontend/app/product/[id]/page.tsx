type Props = {
  params: Promise<{
    id: string
  }>
}

export default async function ProductDetailsPage({ params }: Props) {
  const { id } = await params

  return (
    <div className="card">
      <h1 className="text-3xl font-bold">Product #{id}</h1>
      <p className="mt-4 text-blue-200">Detailed specifications, reviews and shipping details.</p>
      <button className="mt-6 bg-blue-600 px-4 py-2 rounded">Add to Cart</button>
    </div>
  )
}
