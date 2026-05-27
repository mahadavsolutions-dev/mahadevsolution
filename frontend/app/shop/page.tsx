import ProductCard from '@/components/ProductCard';
async function getProducts(){const r=await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products`,{cache:'no-store'});return r.json();}
export default async function Shop(){const data=await getProducts(); return <main className='container py-8'><h2 className='text-2xl mb-4'>Shop</h2><div className='grid md:grid-cols-3 gap-4'>{data.items?.map((p:any)=><ProductCard key={p._id} p={p}/>)}</div></main>}
