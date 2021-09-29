//front-end
import Image from 'next/image'
import {
  SearchIcon,
  MenuIcon,
  ShoppingCartIcon,
  ChevronDownIcon
} from '@heroicons/react/outline'
//back-end

function DraftHeader () {
  return (
    <header>
      {/**top */}
      <div className='flex items-center bg-blue-400 p-1 flex-grow py-2 sticky'>
        {/**Header logo */}
        <div className='mt-2 flex items-center flex-grow sm:flex-grow-0'>
          <Image
            src='https://links.papareact.com/f90'
            width={150}
            height={40}
            objectFit='contain'
            className='cursor-pointer'
          />
        </div>
        {/**Search */}
        <div className='searchbar'>
          <input className='searchInput' placeholder='search' type='text' />
          <SearchIcon className='ml-2 h-12 p-4' />
        </div>
        {/**Right */}
        <div className='text-white flex items-center text-sm space-x-6 mx-6 whitespace-nowrap'>
          {/**User */}
          <div className='link'>
            <p>Hello, user</p>
            <p className='font-extrabold md:text-sm'>Account & Lists</p>
          </div>
          {/**Return  & order */}
          <div className='link'>
            <p>Returns</p>
            <p className='font-extrabold md:text-sm'>& Orders</p>
          </div>
          {/**Basket */}
          <div className='link relative flex items-center'>
            <span className='itemCount'>0</span>
            <ShoppingCartIcon className='h-10 ' />
            <p className='hidden md:inline mt-2 font-extrabold md:text-sm'>
              Basket
            </p>
          </div>
        </div>
      </div>
      {/**bottom */}
      <div className='flex items-center bg-amazon_blue-light p-2 pl-6 text-white text-sm space-x-3'>
        <p className='link flex items-center'>
          <MenuIcon className='h-6 mr-1' />
          All
        </p>
        <p className='link'>Prime Video</p>
        <p className='link'>Amazon Business</p>
        <p className='link'>Today's Deals</p>
        <p className='link hidden lg:inline-flex'>Electronics</p>
        <p className='link hidden lg:inline-flex'>Food & Grocery</p>
        <p className='link hidden  lg:inline-flex items-center '>
          Prime <ChevronDownIcon className='h-4 mr-1' />{' '}
        </p>
        <p className='link hidden lg:inline-flex'>Buy Again</p>
        <p className='link hidden lg:inline-flex'>Shopper Toolkit</p>
        <p className='link hidden lg:inline-flex'>Health & Personal Care</p>
      </div>
    </header>
  )
}

export default DraftHeader
