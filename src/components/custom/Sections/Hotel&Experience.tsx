import React from 'react'
import { Button } from '../../ui/button'
import { useNavigate } from 'react-router-dom';

const HotelExperience: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className='container py-16'>
      <div className="flex items-center gap-10 flex-col lg:flex-row">
        {/* Detail content part */}
        <div data-aos="" className="max-w-full lg:max-w-[50%]  w-full space-y-10 md:space-y-14">
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
          {/* First colonne */}
          {/* <div className="w-[50%] flex flex-col gap-4 ">
            <div className="w-full] h- ">
              <img
                src="/Image.svg"
                alt="preview tourism zone"
                className="w-full h-full object-contain"
              />
            </div>

            <div className="w-[50%]  ">
              <img
                src="/newsletter.svg"
                alt="benefits Happening cities"
                className="w-full h-full object-contain"
              />
            </div>
          </div> */}

          {/* second colonne */}
          {/* <div className="w-[50%]  ">
            <img
              src="/newsletter.svg"
              alt="benefits Happening cities"
              className="w-full h-full object-contain"
            />
          </div> */}

          {/* copy all the image bloc */}

          <img
                src="/Image.svg"
                alt="hero img"
            className="w-full h-full"
          />
        </div>
      </div>
    </section>
  )
}

export default HotelExperience