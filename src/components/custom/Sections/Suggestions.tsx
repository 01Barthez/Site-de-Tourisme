import React from 'react'
import { placeDiscorvery } from '../../../global/mocks/suggestionsDiscorvery'
import SwipperCarousel from '../SwipperCarousel'

const Suggestions: React.FC = () => {
  return (
    <section className='container py-10 md:py-16 space-y-10'>
      {/* Title header */}
      <div className="flexContent">
        <h2 className="title">
          Suggestions for discovery
        </h2>

        {/* Paragraph header */}
        <p className="para">
          Popular places to recommends for you
        </p>
      </div>

      {/* Slider Content */}
      <SwipperCarousel content={placeDiscorvery} />
    </section>
  )
}

export default Suggestions