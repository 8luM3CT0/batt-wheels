//front-end
import BatteryProduct from './BatteryProduct'
//back-end

function BatteryFeed ({ batteries }) {
  return (
    <div className='productFeed'>
      {batteries
        .slice(0, 4)
        .map(({ title, description, category, img, price }) => (
          <BatteryProduct
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

export default BatteryFeed
