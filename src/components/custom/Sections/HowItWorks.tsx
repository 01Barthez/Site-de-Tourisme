import React from 'react'
import CardHowItWork from '../cards/CardHowItWork'

const HowItWorks: React.FC = () => {
  return (
    <section className='W-full container space-y-20 py-10 md:py-16 '>
      {/* Head section */}
      <div className="flexContent items-center">
        <h2 className="title text-center">
          How it work
        </h2>

        <p className="para text-center">
          Keep calm & travel on
        </p>
      </div>

      {/* Contain section */}
      <div className="relative w-full mx-auto grid grid-cols-1 gap-y-16 md:grid-cols-2 gap-x-2 md:gap-x-3 lg:gap-x-4 lg:grid-cols-3 place-items-center">
        <CardHowItWork
          image='/public/howt_it_works_step1.png'
          title='Book & relax'
          description='Let each trip be an inspirational journey, each room a peaceful space'
        />

        <CardHowItWork
          image='/public/howt_it_works_step1.png'
          title='Smart checklist'
          description='Let each trip be an inspirational journey, each room a peaceful space'
        />

        <CardHowItWork
          image='/public/howt_it_works_step1.png'
          title='Save more'
          description='Let each trip be an inspirational journey, each room a peaceful space'
        />

        {/* Line */}
        <div className="hidden md:block absolute w-full top-6 left-0 -z-10">
          <img
            src="/src/assets/line.svg"
            alt=""
            className="w-full"
          />
        </div>
      </div>
    </section>
  )
}

export default HowItWorks