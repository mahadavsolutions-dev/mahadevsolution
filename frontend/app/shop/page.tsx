import { supabase } from "@/lib/supabase";

export default async function ShopPage() {
  const { data, error } = await supabase
    .from("products")
    .select("*");

  console.log("DATA:", data);
  console.log("ERROR:", error);

  return (
    <main className="container mx-auto py-10 px-4">
      <h1 className="text-4xl font-bold mb-8 text-white">
        Computer Parts Shop
      </h1>

      <pre className="text-white">
        {JSON.stringify({ data, error }, null, 2)}
      </pre>
    </main>
  );
}
