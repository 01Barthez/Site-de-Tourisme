import React from 'react'
import HotelExperience from '../../components/custom/Sections/Hotel&Experience'
import SuggestionsDiscorvery from '../../components/custom/Sections/SuggestionsDiscorvery'
import HappeningsCity from '../../components/custom/Sections/HappeningsCity'
import FeaturesPlace from '../../components/custom/Sections/FeaturesPlace'
import HowItWorks from '../../components/custom/Sections/HowItWorks'
import Suggestions from '../../components/custom/Sections/Suggestions'
import JoinNewsLetter from '../../components/custom/Sections/JoinNewsLetter'
import TopAuthor from '../../components/custom/Sections/TopAuthor'
import WhyChoose from '../../components/custom/Sections/WhyChoose'
import ExploreNearby from '../../components/custom/Sections/ExploreNearby'
import ExploreByTypeDay from '../../components/custom/Sections/ExploreByTypeDay'
import TheVideos from '../../components/custom/Sections/TheVideos'
import GoodNews from '../../components/custom/Sections/GoodNews'

const Home1: React.FC = () => {
  return (
    <>
      <HotelExperience />
      <Suggestions />
      <HappeningsCity />
      <FeaturesPlace />
      <HowItWorks />
      <SuggestionsDiscorvery />
      <JoinNewsLetter />
      <TopAuthor />
      <ExploreNearby />
      <WhyChoose />
      <ExploreByTypeDay />
      <TheVideos />
      <GoodNews />
    </>
  )
}

export default Home1