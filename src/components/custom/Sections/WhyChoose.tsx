import React from 'react'
import { Button } from '../../ui/button'
import { useNavigate } from 'react-router-dom';
import Logo from '../Logo';

const WhyChoose: React.FC = () => {
  const navigate = useNavigate();
  return (
    <section className='container py-16 my-16 bg-foreground/5 rounded-[2.5rem] '>
      <div className="flex items-center gap-10 flex-col lg:flex-row">

        {/* Detail content part */}
        <div data-aos="" className="max-w-full lg:max-w-[40%]  w-full space-y-10 md:space-y-14">
          {/* Logo part */}
          <Logo className="w-16" />

          {/* Header part */}
          <div className="flex flex-col gap-2 md:gap-5">
            <h2 className="title">
              Why did you choose us?
            </h2>

            <p className="text-foreground/70">
              Accompanying us, you have a trip full of experiences. With Chisfis, booking accommodation, resort villas, hotels, private houses, apartments... becomes fast, convenient and easy.
            </p>
          </div>

          {/* Content: CTA btn */}
          <Button
            className='rounded-full p-6 text-base'
            onClick={() => navigate('/author')}
          >
            Become an auhthor
          </Button>

        </div>

        {/* Image Part */}
        <div data-aos="" className="w-full h-full overflow-hidden">
          <img
            src="/newsletter.svg"
            alt="benefits Happening cities"
            className="w-full h-full object-contain"
          />
        </div>
      </div>
    </section>
  )
}

export default WhyChoose