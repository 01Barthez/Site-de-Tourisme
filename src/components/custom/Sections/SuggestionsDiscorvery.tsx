import React from 'react'
import { placeDiscorvery } from '../../../global/mocks/suggestionsDiscorvery'
import SwipperCarousel from '../SwipperCarousel'

const SuggestionsDiscorvery: React.FC = () => {
  return (
    <section className='container flexContent py-10'>
      {/* Title header */}
      <h2 className="title text-center">
        Suggestions for discovery
      </h2>

      {/* Paragraph header */}
      <p className="para text-center">
        Popular places to stay that Chisfis recommends for you
      </p>

      {/* Slider Content */}
      <SwipperCarousel content={placeDiscorvery} />
    </section>
  )
}

export default SuggestionsDiscorvery