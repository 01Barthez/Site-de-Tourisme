import React from 'react'
import NextGenerationBooking from '../../components/custom/Sections/NextGenerationBooking'
import ExploreNearby from '../../components/custom/Sections/ExploreNearby'
import TopAuthorMonth from '../../components/custom/Sections/TopAuthorMonth'
import FeaturesPlace from '../../components/custom/Sections/FeaturesPlace'
import JoinNewsLetter from '../../components/custom/Sections/JoinNewsLetter'

const Home3: React.FC = () => {
  return (
    <>
      <NextGenerationBooking />
      <ExploreNearby />
      <TopAuthorMonth />
      <FeaturesPlace />
      <JoinNewsLetter />
    </>
  )
}

export default Home3