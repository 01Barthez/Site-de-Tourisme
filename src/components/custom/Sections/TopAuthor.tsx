import React from 'react'
import GridContentBox from '../GridContentBox'

const TopAuthor: React.FC = () => {
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
      <div className="w-full mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-3 lg:gap-4 place-items-center">
        <GridContentBox TableToMap={[]} />
      </div>
      </div>
    </section>
  )
}

export default TopAuthor