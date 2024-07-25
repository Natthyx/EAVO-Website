import { useState } from 'react';
import img1 from '../assets/about-us1.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import pic1 from '../assets/pic1.jpg';
import pic2 from '../assets/pic2.jpg';
import pic3 from '../assets/pic3.jpg';

const AboutUs = () => {
  const images = [pic1, pic2, pic3];
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalImages = images.length;

  const prevSlide = () => {
    setCurrentIndex((currentIndex - 1 + totalImages) % totalImages);
  };

  const nextSlide = () => {
    setCurrentIndex((currentIndex + 1) % totalImages);
  };

  return (
    <div id='about' className='about-us'>
      <div className='container mx-auto p-4 flex items-center'>
        <img src={img1} alt="" className="w-1/2 h-1/2 rounded-md" />
        <div className='w-1/2 pl-4'>
          <h1 className="font-bold text-center text-4xl mb-4 font-serif">Welcome to EAVO</h1>
          <p className='mb-4'>
            The Empowering African Voices Organization (EAVO) is a collective of passionate
            African women and child rights activists, Pan-Aficanists, and advocates.
            Our mission is to support African women and children facing various challenges
            such as marginalization, discrimination, and violence.
            <br /><br />
            We believe in the power of community and the strength that comes from uniting
            our voices to create positive change. Our vision is a world where African women
            and children are empowered, their rights are respected, and they can live free
            from violence and discrimination.
          </p>
          <button className="bg-orange-600 text-white py-2 px-4 rounded-full hover:bg-blue-400 flex items-center">
            More About Us
            <span className="bg-white rounded-full p-1 flex items-center justify-center ml-2" style={{ width: '24px', height: '24px' }}>
              <FontAwesomeIcon icon={faChevronRight} className="text-orange-500" />
            </span>
          </button>
        </div>
      </div>
      <div className="container mx-auto my-8">
        <h2 className="text-center text-4xl font-bold mb-4">Team</h2>
        
        <div className="relative flex items-center justify-center ">
          <button
            className="absolute left-0 text-black z-10 p-2"
            onClick={prevSlide}
          >
            <svg className="h-6 w-6 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path d="M12.707 15.707a1 1 0 01-1.414 0L7 11.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0l5 5a1 1 0 010 1.414z" />
            </svg>
          </button>
          <div className="flex transition-transform duration-500" >
            {images.map((image, index) => (
              <div key={index} className={`flex-none w-96 px-2 ${index === currentIndex ? 'opacity-100' : 'opacity-70'}`}>
                <img src={image} alt={`Slide ${index}`} className="w-full h-64 object-cover rounded-md" />
              </div>
            ))}
          </div>
          <button
            className="absolute right-0 text-black z-10 p-2"
            onClick={nextSlide}
          >
            <svg className="h-6 w-6 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.293 4.293a1 1 0 011.414 0L13 8.586l4.293-4.293a1 1 0 111.414 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414z" />
            </svg>
          </button>
        </div>
        <div className="flex justify-center mt-4">
          {images.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full mx-1 cursor-pointer ${index === currentIndex ? 'bg-black' : 'bg-gray-400'}`}
              onClick={() => setCurrentIndex(index)}
            ></div>
          ))}
        </div>
        <p className="text-center mt-4">Profiles of key members and volunteers</p>
      </div>
    </div>
  );
};

export default AboutUs;
