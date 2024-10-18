import React from 'react'
import NextGenerationBooking from '../../components/custom/Sections/NextGenerationBooking'
import ExploreNearby from '../../components/custom/Sections/ExploreNearby'
import TopAuthorMonth from '../../components/custom/Sections/TopAuthorMonth'
import FeaturesPlace from '../../components/custom/Sections/FeaturesPlace'
import JoinNewsLetter from '../../components/custom/Sections/JoinNewsLetter'
import SEO from '../../components/custom/SEO'

const Home3: React.FC = () => {
  return (
    <>
     <SEO
        title="Home3 | Chisfis Projet" 
        description="Welcome to Chisfis Projet, the best place to find amazing stays."
        keywords="home, best stays, hotels, bookings"
      />
      <NextGenerationBooking />
      <ExploreNearby />
      <TopAuthorMonth />
      <FeaturesPlace />
      <JoinNewsLetter />
    </>
  )
}

export default Home3