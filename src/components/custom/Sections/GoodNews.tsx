import React from 'react'

/**
 * Functional React component that displays a section with good news content.
 * @returns JSX element representing the section with good news content.
 */
const GoodNews: React.FC = () => {
  return (
    <section className='container py-16 my-16 md:my-20 bg-foreground/5 rounded-[2.5rem] '>
      {/* Header part */}
      <div className="flexContent items-center mx-auto">
        <h2 className="title text-center">
          Good news from far away
        </h2>

        <p className="text-foreground/70 text-center">
          Let's see what people think of Chisfis
        </p>
      </div>

      {/* comments */}

      
    </section>
  )
}

export default GoodNews