import React from 'react'
import GridContentBox from '../GridContentBox'
import { ExploreNearlyZone } from '../../../global/mocks/ExploreNearlyZone'

/**
 * Functional component that represents the "Explore Nearby" section.
 * @returns JSX element representing the "Explore Nearby" section.
 */
const ExploreNearby: React.FC = () => {
  return (

    <section className='W-full container space-y-12 py-10 md:py-16 '>
      {/* Head section */}
      <div className="flexContent items-center">
        <h2 className="title text-center">
          Explore nearby
        </h2>

        <p className="para text-center">
          Discover great places near where you live
        </p>
      </div>

      {/* Contain section */}
      <div className="w-full mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8 place-items-center">
        {/* Slider Content */}
        <GridContentBox TableToMap={ExploreNearlyZone} />
      </div>
    </section>
  )
}

export default ExploreNearby