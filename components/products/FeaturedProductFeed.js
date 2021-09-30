//front-end
import FeaturedProduct from './FeaturedProduct'
//back-end

function ProductFeed ({ featured }) {
  return (
    <div className='productFeed'>
      {/**featured */}
      {featured
        .slice(0, 4)
        .map(({ id, title, description, category, image, price }) => (
          <FeaturedProduct
            key={id}
            id={id}
            title={title}
            description={description}
            category={category}
            image={image}
            price={price}
          />
        ))}
      <img
        src='https://links.papareact.com/dyz'
        alt=''
        className='md:col-span-full'
      />
      <div className='md:col-span-2'>
        {featured
          .slice(4, 5)
          .map(({ id, title, description, category, image, price }) => (
            <FeaturedProduct
              key={id}
              id={id}
              title={title}
              description={description}
              category={category}
              image={image}
              price={price}
            />
          ))}
      </div>
      {featured
        .slice(5, featured.length)
        .map(({ id, title, description, category, image, price }) => (
          <FeaturedProduct
            key={id}
            id={id}
            title={title}
            description={description}
            category={category}
            image={image}
            price={price}
          />
        ))}
    </div>
  )
}

export default ProductFeed
