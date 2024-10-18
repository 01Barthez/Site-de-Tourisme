import React from 'react'
import { Button } from '../../ui/button'
import { useNavigate } from 'react-router-dom';

const HotelExperience: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className='container py-16'>
      <div className="flex items-center gap-10 flex-col lg:flex-row">
        {/* Detail content part */}
        <div data-aos="" className="max-w-full lg:max-w-[50%]  w-full space-y-6 md:space-y-10">
          {/* Big title */}
          <h1 className="font-medium text-4xl md:text-5xl xl:text-7xl !leading-[115%]">
            Hotel, car & experiences
          </h1>

          {/* para */}
          <p className="para">
            Accompanying us, you have a trip full of experiences. With Chisfis, booking accommodation, resort villas, hotels
          </p>

          {/* Content: CTA btn */}
          <Button
            className='rounded-full p-6 text-base'
            onClick={() => navigate('/listng-stay-map')}
          >
            Start your search
          </Button>

        </div>

        {/* Image Part */}
        <div data-aos="" className="w-full h-full overflow-hidden flex gap-4 items-center">
          <img
            src="/hero-right-removebg-preview.png"
            alt="hero img"
            className="w-full h-full object-contain"
          />
        </div>
      </div>
    </section>
  )
}

export default HotelExperience