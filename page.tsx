import Link from 'next/link'
export default function Home(){
  return (
    <main className='min-h-screen p-6 bg-rcn-900 text-gray-100'>
      <div className='max-w-4xl mx-auto text-center'>
        <h1 className='text-3xl font-bold'>Bem-vindo ao RCN Marketplace</h1>
        <button className='mt-4 px-6 py-3 rounded-full bg-rcn-300 text-white shadow-lg pulse'>Anunciar</button>
        <section className='mt-8 card-rcn p-6 rounded-xl'>
          <h2 className='text-xl font-semibold'>Destaques</h2>
          <p className='text-gray-300 mt-2'>Explore anúncios por categoria ou pesquise o que precisa.</p>
        </section>
      </div>
      <nav className='fixed bottom-0 left-0 right-0 bg-black/80 backdrop-blur p-3 flex justify-around'>
        <button className='p-2 text-white' aria-label='Pesquisar'>🔍</button>
        <button className='p-2 text-white bg-rcn-300 rounded-full' aria-label='Anunciar'>➕</button>
        <button className='p-2 text-white' aria-label='Chat'>💬</button>
        <button className='p-2 text-white' aria-label='Configurações'>⚙️</button>
      </nav>
    </main>
  )
}
