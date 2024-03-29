//front-end
import Image from 'next/image'
import Currency from 'react-currency-formatter'
//back-end
import { auth, store } from '../../firebase'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addToBasket } from '../../slices/basketSlice'
import firebase from 'firebase'

function FeaturedProduct ({ img, title, description, category, price }) {
  const [user] = useAuthState(auth)
  const dispatch = useDispatch()

  const addToCart = () => {
    const featuredProduct = {
      img,
      title,
      description,
      category,
      price
    }
    dispatch(addToBasket(featuredProduct))

    store
      .collection('userOrders')
      .doc(user.email)
      .collection('orders')
      .add(featuredProduct, {
        timestamp: firebase.firestore.FieldValue.serverTimestamp()
      })
      .then(() => {
        console.log(`SUCCESS: Order ${auth.id} has been added to the database`)
      })
  }

  return (
    <div className='relative  flex flex-col m-5 bg-gray-100 z-30 p-10 rounded-md'>
      <p className='category'>{category}</p>

      <Image src={img} height={200} width={200} objectFit='contain' />

      <h4 className='my-3 '>{title}</h4>
      <p className='text-xs my-2 line-clamp-2'>{description}</p>
      <div className='mb-5'>
        {/**money */}
        <Currency quantity={price} currency='USD' />
      </div>
      <button
        disabled={!user}
        onClick={addToCart}
        className='
      mt-auto           
            p-2
          text-xs
          text-gray-50
          md:test-sm
          bg-gradient-to-b
          from-red-400
          to-red-300
          border
          border-red-100
          rounded-sm
          focus:outline-none
          focus:text-gray-100
          focus:ring-2
          focus:ring-gray-50
          active:from-red-500
          active:text-gray-200
      }'
      >
        Add to cart
      </button>
    </div>
  )
}

export default FeaturedProduct
