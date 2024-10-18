import React from 'react'
import SwipperCarouselExploreHouse from '../SwipperCarouselExploreHouse'
import { HouseDiscorvery } from '../../../global/mocks/suggestionsExploreHouses'

/**
 * Functional component that displays a section for exploring different types of stays.
 * @returns JSX element containing the section for exploring types of stays.
 */
const ExploreByTypeDay: React.FC = () => {
  return (
    <section className='container py-10 md:py-16 space-y-10'>
      {/* Title header */}
      <div className="flexContent">
        {/* Title header */}
        <h2 className="title">
          Explore by types of stays
        </h2>

        {/* Paragraph header */}
        <p className="para">
          Explore houses based on 10 types of stays
        </p>
      </div>

      {/* Slider Content */}
      <SwipperCarouselExploreHouse content={HouseDiscorvery} />
    </section>

  )
}

export default ExploreByTypeDay
