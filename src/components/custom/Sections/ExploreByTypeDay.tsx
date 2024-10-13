import React from 'react'
import { placeDiscorvery } from '../../../global/mocks/suggestionsDiscorvery'
import SwipperCarousel from '../SwipperCarousel'

const ExploreByTypeDay: React.FC = () => {
  return (
    <section className='container flexContent py-10'>
      {/* Title header */}
      <h2 className="title text-center">
        Explore by types of stays
      </h2>

      {/* Paragraph header */}
      <p className="para text-center">
        Explore houses based on 10 types of stays
      </p>

      {/* Slider Content */}
      <SwipperCarousel content={placeDiscorvery} />
    </section>
  )
}

export default ExploreByTypeDay
