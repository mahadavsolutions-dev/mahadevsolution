import { supabase } from "@/lib/supabase";

type Product = {
  id: string;
  name: string;
  price: number;
  image?: string;
};

async function getProducts(): Promise<Product[]> {
  const { data, error } = await supabase
    .from("products")
    .select("*");

  if (error) {
    console.error(error);
    return [];
  }

  return data || [];
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
          No products found.
        </div>
      ) : (
        <div className="grid md:grid-cols-3 gap-6">
          {products.map((p) => (
            <div
              key={p.id}
              className="bg-slate-900 p-5 rounded-xl border border-slate-700"
            >
              {p.image && (
                <img
                  src={p.image}
                  alt={p.name}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
              )}

              <h2 className="text-xl font-semibold text-white">
                {p.name}
              </h2>

              <p className="text-cyan-400 mt-2 text-lg">
                ${p.price}
              </p>

              <a
                href={`/product/${p.id}`}
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
