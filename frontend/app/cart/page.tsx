import Link from 'next/link';

export default function CartPage() {
  return (
    <main className='container py-8'>
      <h1 className='text-3xl font-bold'>Cart</h1>
      <div className='mt-6 rounded-xl border border-slate-800 bg-slate-900/70 p-6'>
        <p className='text-slate-300'>Your selected components will appear here.</p>
        <div className='mt-4 flex items-center justify-between'>
          <span>Estimated Total</span><strong>$0.00</strong>
        </div>
        <Link href='/checkout' className='mt-6 inline-block rounded bg-cyan-500 px-5 py-3 font-semibold text-slate-950'>Proceed to Checkout</Link>
      </div>
    </main>
  );
}
