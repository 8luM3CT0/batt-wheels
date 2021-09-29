//front-end
import Image from 'next/image'
import { StarIcon } from '@heroicons/react/outline'
import Currency from 'react-currency-formatter'
//back-end
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addToBasket } from '../../slices/basketSlice'

const MAX_RATING = 5
const MIN_RATING = 1

function Product ({ id, title, description, category, image, price }) {
  const dispatch = useDispatch()
  const [rating] = useState(
    Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING
  )
  const [hasPrime] = useState(Math.random() < 0.5)

  return (
    <div className='relative flex flex-col m-5 bg-gray-100 z-30 p-10 rounded-md'>
      <p className='category'>{category}</p>

      <Image src={image} height={200} width={200} objectFit='contain' />

      <h4 className='my-3 '>{title}</h4>
      <div className='flex'>
        {Array(rating)
          .fill()
          .map((_, i) => (
            <StarIcon className='h-5 text-yellow-500' />
          ))}
      </div>
      <p className='text-xs my-2 line-clamp-2'>{description}</p>
      <div className='mb-5'>
        {/**money */}
        <Currency quantity={price} currency='USD' />
      </div>
      {hasPrime && (
        <div className='flex items-center space-x-2 -mt-5'>
          <img src='https://links.papareact.com/fdw' className='w-12' alt='' />
          <p className='text-xs text-gray-500'>FREE Next-day Delivery</p>
        </div>
      )}

      <button className='mt-auto button'>Add to Basket</button>
    </div>
  )
}

export default Product
