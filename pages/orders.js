//front-end
import Head from 'next/head'
import Header from '../components/header/Header'
//back-end

function Orders ({ orders }) {
  return (
    <div>
      <Head>
        <title>order-page</title>
      </Head>
      <Header />
      <main className='max-w-screen-lg mx-auto p-10'>
        <h1 className='text-3xl border-b mb-2 pb-1 border-red-300'>
          Your Orders
        </h1>
      </main>
    </div>
  )
}

export default Orders
