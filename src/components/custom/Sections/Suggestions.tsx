import React from 'react'
import { placeDiscorvery } from '../../../global/mocks/suggestionsDiscorvery'
import SwipperCarousel from '../SwipperCarousel'

const Suggestions: React.FC = () => {
  return (
    <section className='container flexContent py-10 md:py-16'>
      {/* Title header */}
      <h2 className="title">
        Suggestions for discovery
      </h2>

      {/* Paragraph header */}
      <p className="para">
        Popular places to recommends for you
      </p>

      {/* Slider Content */}
      <SwipperCarousel content={placeDiscorvery} />
    </section>
  )
}

export default Suggestions