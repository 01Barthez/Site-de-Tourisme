import React from 'react'
import CardBenefits from '../cards/CardBenefits'

/**
 * Functional component for displaying information about Happening cities.
 * @returns JSX element representing the HappeningsCity component.
 */
const HappeningsCity: React.FC = () => {
  return (
    <section className='container py-10 md:py-16 '>
      <div className="flex items-center gap-10 flex-col lg:flex-row">
        {/* Image Part */}
        <div className="w-full h-full overflow-hidden">
          <img
            src="/benefits.svg"
            alt="benefits Happening cities"
            className="w-full h-full object-contain"
          />
        </div>

        {/* Detail content part */}
        <div className="max-w-full lg:max-w-[35%]  w-full space-y-10 md:space-y-14 px-4">
          {/* Header part */}
          <div className="flex flex-col gap-2 md:gap-5">
            <span className="text-sm text-foreground/50 uppercase">
              BENnefits
            </span>

            <h2 className="title">
              Happening cities
            </h2>
          </div>

          {/* Content */}
          <div className="flex flex-col gap-8 md:gap-10">
            <CardBenefits
              badge={{
                content: 'Advertising',
                variant: 'blue'
              }}
              name='Cost-effective advertising'
              content='With a free listing, you can advertise your rental with no upfront costs'
            />

            <CardBenefits
              badge={{
                content: 'Exposure ',
                variant: 'green'
              }}
              name='Reach millions with Chisfis'
              content='Millions of people are searching for unique places to stay around the world'
            />
            <CardBenefits
              badge={{
                content: 'Secure',
                variant: 'red'
              }}
              name='Secure and simple'
              content='A Holiday Lettings listing gives you a secure and easy way to take bookings and payments online'
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default HappeningsCity