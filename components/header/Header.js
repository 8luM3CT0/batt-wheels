//front-end
import {
  ShoppingCartIcon,
  UserCircleIcon,
  TruckIcon,
  LightningBoltIcon,
  CubeTransparentIcon
} from '@heroicons/react/outline'
//back-end
import firebase from 'firebase'
import { auth, store, provider } from '../../firebase'
import { useEffect } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'
import { selectItems } from '../../slices/basketSlice'

function Header () {
  const router = useRouter()
  const items = useSelector(selectItems)
  const [user] = useAuthState(auth)

  const homeBtn = () => {
    router.push('/')
  }

  const signIn = () => {
    auth.signInWithPopup(provider).catch(alert)
  }

  useEffect(() => {
    if (user) {
      store
        .collection('users')
        .doc(user.uid)
        .set(
          {
            email: user.email,
            username: user.displayName,
            userPic: user.photoURL,
            lastActive: firebase.firestore.FieldValue.serverTimestamp()
          },
          {
            merge: true
          }
        )
    }
  }, [user])

  return (
    <header className='z-50 top-0 sticky'>
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
              onClick={homeBtn}
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
        px-3 
        space-x-4 
        justify-end 
        mr-4'
          >
            <div className='headerLinks'>
              {!user ? (
                <UserCircleIcon onClick={signIn} className='headerLinkIcon' />
              ) : (
                <img
                  onClick={() => auth.signOut()}
                  src={user?.photoURL}
                  className='headerLinkIcon rounded-2xl'
                />
              )}
            </div>

            <div
              className='headerLinks relative '
              onClick={() => router.push('/orders')}
            >
              <span className='basketCount'>
                <h2 className='font-semibold text-sm'>{items.length}</h2>
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
          <div
            onClick={() => router.push('/battery')}
            className='lowerHeaderLinks'
          >
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
