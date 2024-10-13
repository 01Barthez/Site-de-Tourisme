import React from 'react'
import { IPlaceDiscorvery } from '../../global/interface/interface'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '../ui/carousel'
import CardSuggestionDiscorverySecond from './cards/CardSuggestionDiscorverySecond';

interface ISwipperCarousel {
  content: IPlaceDiscorvery[]; // L'objet doit avoir une clé `content` avec un tableau
}

const SwipperCarouselSuggestion2: React.FC<ISwipperCarousel> = ({ content }) => {
  return (
    <Carousel
      className="w-full relative"
    >
      <CarouselContent className="relative">
        {
          content.map((ele, index) => (
            <CarouselItem key={index} className="pl-8 basis-1/1 sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
              <CardSuggestionDiscorverySecond
                image={ele.image}
                name={ele.name}
                url={ele.url}
                properties_number={ele.properties_number}
              />
            </CarouselItem>
          ))
        }
      </CarouselContent>
      
      <CarouselPrevious className='z-20 absolute top-1/2 -translate-y-1/2 -left-4' />
      <CarouselNext className='z-20 absolute top-1/2 -translate-y-1/2 -right-4'/>
    </Carousel>
  )
}

export default SwipperCarouselSuggestion2