//front-end
import Head from 'next/head'
import Header from '../components/header/Header'
import BatteryFeed from '../components/products/battery-feed/BatteryFeed'
//back-end
import batteries from '../public/json-files/batteries.json'

function Battery ({ battery }) {
  return (
    <div>
      <Head>
        <title>Battery-page</title>
      </Head>

      <Header />
      <main
        className='
          max-w-screen-2xl
          mx-auto
          scrollbar-hide
          '
      >
        <BatteryFeed batteries={batteries} />
      </main>
    </div>
  )
}

export default Battery
