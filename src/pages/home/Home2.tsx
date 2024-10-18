import React from 'react'
import GoodNews from '../../components/custom/Sections/GoodNews'
import TheVideos from '../../components/custom/Sections/TheVideos'
import ExploreNearby from '../../components/custom/Sections/ExploreNearby'
import JoinNewsLetter from '../../components/custom/Sections/JoinNewsLetter'
import MobileApps from '../../components/custom/Sections/MobileApps'
import ExploreByTypeDay from '../../components/custom/Sections/ExploreByTypeDay'
import TopAuthor from '../../components/custom/Sections/TopAuthor'
import WhyChoose from '../../components/custom/Sections/WhyChoose'
import Suggestions from '../../components/custom/Sections/Suggestions'
import Networking from '../../components/custom/Sections/Networking'
import ExploreFeature from '../../components/custom/Sections/ExploreFeature'
import FeaturesPlace from '../../components/custom/Sections/FeaturesPlace'
import HappeningsCity from '../../components/custom/Sections/HappeningsCity'
import HappeningsCity2 from '../../components/custom/Sections/HappeningsCity2'
import HowItWorks from '../../components/custom/Sections/HowItWorks'
import FindYourBest from '../../components/custom/Sections/FindYourBest'
import SEO from '../../components/custom/SEO'

const Home2: React.FC = () => {
  return (
    <>
     <SEO
        title="Home2 | Chisfis Projet" 
        description="Welcome to Chisfis Projet, the best place to find amazing stays."
        keywords="home, best stays, hotels, bookings"
      />

      <FindYourBest />
      <HowItWorks />
      <HappeningsCity />
      <HappeningsCity2 />
      <FeaturesPlace />
      <Suggestions />
      <WhyChoose />
      <ExploreFeature />
      <Networking />
      <TopAuthor />
      <ExploreByTypeDay />
      <MobileApps />
      <JoinNewsLetter />
      <ExploreNearby />
      <TheVideos />
      <GoodNews />
    </>
  )
}

export default Home2