import Link from 'next/link';
export default function ProductCard({p}:{p:any}){return <div className='bg-slate-900 p-4 rounded'><h3>{p.name}</h3><p>${p.price}</p><Link href={`/product/${p._id}`} className='text-cyan-400'>View</Link></div>}
