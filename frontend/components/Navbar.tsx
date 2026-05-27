import Link from 'next/link';
export default function Navbar(){return <nav className='border-b border-slate-800'><div className='container py-4 flex gap-4'><Link href='/'>TechStore</Link><Link href='/shop'>Shop</Link><Link href='/cart'>Cart</Link><Link href='/dashboard'>Dashboard</Link><Link href='/admin'>Admin</Link></div></nav>}
