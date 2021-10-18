//front-end
import FeaturedProduct from './FeaturedProduct'
//back-end

function ProductFeed ({ featured }) {
  return (
    <div className='productFeed'>
      {/**featured */}
      {featured
        .slice(0, 4)
        .map(({ title, description, category, img, price }) => (
          <FeaturedProduct
            key={img}
            title={title}
            description={description}
            category={category}
            img={img}
            price={price}
          />
        ))}
      <img
        src='https://equilast.net/wp-content/uploads/2020/09/17-768x432.jpeg'
        alt=''
        className='md:col-span-full h-[600px] w-[1590px]'
      />
      <div className='md:col-span-2'>
        {featured
          .slice(4, 5)
          .map(({ title, description, category, img, price }) => (
            <FeaturedProduct
              key={img}
              title={title}
              description={description}
              category={category}
              img={img}
              price={price}
            />
          ))}
      </div>
      {featured
        .slice(5, featured.length)
        .map(({ title, description, category, img, price }) => (
          <FeaturedProduct
            key={img}
            title={title}
            description={description}
            category={category}
            img={img}
            price={price}
          />
        ))}
    </div>
  )
}

export default ProductFeed
