//front-end
import {
  ShoppingCartIcon,
  UserCircleIcon,
  TruckIcon,
  LightningBoltIcon,
  CubeTransparentIcon
} from '@heroicons/react/outline'
//back-end
import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'
import { selectItems } from '../../slices/basketSlice'

function Header () {
  const router = useRouter()
  const items = useSelector(selectItems)

  const homeBtn = () => {
    router.push('/')
  }

  return (
    <header>
      <div
        className='
      bg-gray-50
      flex-col 
      items-center
      px-1 
      py-2 
      flex-grow 
      sticky
      z-50
      '
      >
        <div
          className='
          mt-2
        bg-gray-50 
        flex-grow-0
        lg:flex-grow
        flex 
        items-center 
        justify-between'
        >
          <div className='ml-4 items-center'>
            <img
              src='https://equilast.net/wp-content/uploads/2020/08/cropped-EI-Logo-3.png'
              alt=''
              className='
            h-[100px]
            w-[200px] 
            object-contain 
            cursor-pointer'
            />
          </div>
          <div
            className='
        flex 
        items-center 
        space-x-4 
        justify-end 
        mr-4'
          >
            <div className='headerLinks'>
              <UserCircleIcon className='headerLinkIcon' />
              <h2 className='text-semibold'>Sign in</h2>
            </div>
            <div className='headerLinks relative '>
              <span className='basketCount'>
                <h2 className='font-semibold text-sm'>0</h2>
              </span>
              <ShoppingCartIcon className='headerLinkIcon mr-2' />
              <h2
                className='
            hidden 
            md:inline-flex 
            text-semibold 
            ml-7'
              >
                Basket
              </h2>
            </div>
          </div>
        </div>
        <div
          className='
      justify-between
      flex
      items-center
      bg-gray-100
      px-4
      '
        >
          <div className='lowerHeaderLinks'>
            <TruckIcon className='lowerHeaderIcons' />
            <h2 className='lowerHeaderTitle'>Wheels</h2>
          </div>
          <div className='lowerHeaderLinks'>
            <LightningBoltIcon className='lowerHeaderIcons' />
            <h2 className='lowerHeaderTitle'>Battery</h2>
          </div>
          <div className='lowerHeaderLinks'>
            <CubeTransparentIcon className='lowerHeaderIcons' />
            <h2 className='lowerHeaderTitle'>UPS</h2>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
