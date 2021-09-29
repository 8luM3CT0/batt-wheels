//front-end
import Product from './Product'
//back-end

function ProductFeed ({ products }) {
  return (
    <div className='productFeed'>
      {/**products */}
      {products
        .slice(0, 4)
        .map(({ id, title, description, category, image, price }) => (
          <Product
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
        {products
          .slice(4, 5)
          .map(({ id, title, description, category, image, price }) => (
            <Product
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
      {products
        .slice(5, products.length)
        .map(({ id, title, description, category, image, price }) => (
          <Product
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
