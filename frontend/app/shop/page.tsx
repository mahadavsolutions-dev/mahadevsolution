type Product = {
  _id: string;
  name: string;
  price: number;
};

async function getProducts(): Promise<Product[]> {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/products`,
      {
        cache: "no-store",
      }
    );

    if (!res.ok) {
      console.error("API Error:", res.status);
      return [];
    }

    const data = await res.json();

    return Array.isArray(data) ? data : [];
  } catch (error) {
    console.error("Fetch failed:", error);
    return [];
  }
}

export default async function ShopPage() {
  const products = await getProducts();

  return (
    <main className="container mx-auto py-10 px-4">
      <h1 className="text-4xl font-bold mb-8 text-white">
        Computer Parts Shop
      </h1>

      {products.length === 0 ? (
        <div className="text-red-400">
          No products found or backend not connected.
        </div>
      ) : (
        <div className="grid md:grid-cols-3 gap-6">
          {products.map((p) => (
            <div
              key={p._id}
              className="bg-slate-900 p-5 rounded-xl border border-slate-700"
            >
              <h2 className="text-xl font-semibold text-white">
                {p.name}
              </h2>

              <p className="text-cyan-400 mt-2 text-lg">
                ${p.price}
              </p>

              <a
                href={`/product/${p._id}`}
                className="inline-block mt-4 text-sm text-cyan-300"
              >
                View Product →
              </a>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}
