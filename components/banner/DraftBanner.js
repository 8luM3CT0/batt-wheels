import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

function DraftBanner () {
  return (
    <div className='relative '>
      <div
        className='
      opacity-80
        absolute 
      w-full 
      h-32 
      bg-gradient-to-t 
      from-gray-100 
      to-transparent 
      bottom-0 
      z-20'
      />
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={5000}
      >
        <div>
          <img
            loading='lazy'
            src='https://media.istockphoto.com/photos/charging-car-battery-picture-id1160080327?k=20&m=1160080327&s=612x612&w=0&h=Ab8GUBSLXFCsMfYNodJGIOoXWUuhY-EsV-ScVvQpsHQ='
            alt=''
            className='productImg'
          />
        </div>
        <div>
          <img
            loading='lazy'
            src='https://previews.123rf.com/images/maxxyustas/maxxyustas1405/maxxyustas140500041/28216589-car-batteries-background-blue-accumulators-three-dimensional-image-3d.jpg'
            alt=''
            className='productImg'
          />
        </div>
        <div>
          <img
            loading='lazy'
            src='https://c4.wallpaperflare.com/wallpaper/233/791/699/battery-car-danger-electric-wallpaper-preview.jpg'
            alt=''
            className='productImg'
          />
        </div>
      </Carousel>
    </div>
  )
}

export default DraftBanner
