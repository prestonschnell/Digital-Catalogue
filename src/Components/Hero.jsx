import React from 'react'
import './heroStyles.css'
import journeySet from '../assets/IMG_2658.jpg'
import blacksmithShop from '../assets/IMG_8723.jpg'
import gardenDistrictSet from '../assets/Garden_District_Set_4.jpg'

const Hero = () => {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const images = [
    journeySet,
    blacksmithShop,
    gardenDistrictSet,
    // Add more image paths as needed
  ];

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => 
        prevSlide === images.length - 1 ? 0 : prevSlide + 1
      );
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className='hero-container'>
      <div className='slider'>
        <img 
          src={images[currentSlide]} 
          alt={`Slide ${currentSlide + 1}`}
          className='slide-image'
        />
      </div>
    </div>
  )
}

export default Hero
