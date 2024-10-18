import React from 'react'
import { TopAuthorsMock } from '../../../global/mocks/TopAuthors'
import GridAuthorBox from '../GridAuthorBox'
import { Button } from '../../ui/button'

const TopAuthor: React.FC = () => {
  return (
    <section className='bg-red-50 rounded-[4rem] '>
      <div className="container py-10 md:py-16 space-y-10">
        <div className="flexContent">
          {/* Title header */}
          <h2 className="title text-center">
            Top 10 author of the month
          </h2>

          {/* Paragraph header */}
          <p className="para text-center">
            Rating based on customer reviews
          </p>
        </div>

        {/* Slider Content */}
        <div className="w-full mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 md:gap-3 lg:gap-4 place-items-center">
          <GridAuthorBox TableToMap={TopAuthorsMock} />
        </div>
        
        <div className='flex items-center gap-1 mx-auto justify-center'>
          <Button
            variant="outline"
            className='text-lg p-6 rounded-full flex items-center gap-2'
          // onClick={selected3}
          >
            Show me more
          </Button>

          <Button
            className='text-lg p-6 rounded-full'
          // onClick={selected3}
          >
            Become a host
          </Button>
        
        </div>
      </div>
    </section>
  )
}

export default TopAuthor