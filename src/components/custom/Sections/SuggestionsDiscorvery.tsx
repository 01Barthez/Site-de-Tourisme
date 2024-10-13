import React from 'react'
import SwipperCarouselSuggestion2 from '../SwipperCarouselSuggestion2'
import { suggestionsDiscorverySecond } from '../../../global/mocks/suggestionsDiscorverySecond'

const SuggestionsDiscorvery: React.FC = () => {
  return (
    <section className='bg-red-50 rounded-[4rem] '>
      <div className="container py-10 md:py-16 space-y-10">
        <div className="flexContent">
          {/* Title header */}
          <h2 className="title text-center">
            Suggestions for discovery
          </h2>

          {/* Paragraph header */}
          <p className="para text-center">
            Popular places to stay that Chisfis recommends for you
          </p>
        </div>

        {/* Slider Content */}
        <SwipperCarouselSuggestion2 content={suggestionsDiscorverySecond} />
      </div>
    </section>
  )
}

export default SuggestionsDiscorvery