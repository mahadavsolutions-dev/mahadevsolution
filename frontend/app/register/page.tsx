export default function RegisterPage() {
  return (
    <main className='container py-10'>
      <div className='mx-auto max-w-md rounded-xl border border-slate-800 bg-slate-900/70 p-8'>
        <h1 className='text-3xl font-bold'>Register</h1>
        <form className='mt-6 space-y-4'>
          <input className='w-full rounded bg-slate-800 p-3' placeholder='Full name' />
          <input className='w-full rounded bg-slate-800 p-3' placeholder='Email' type='email' />
          <input className='w-full rounded bg-slate-800 p-3' placeholder='Password' type='password' />
          <button className='w-full rounded bg-cyan-500 p-3 font-semibold text-slate-950'>Create account</button>
        </form>
      </div>
    </main>
  );
}
