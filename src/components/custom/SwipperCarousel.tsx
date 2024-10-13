import React from 'react'
import { IPlaceDiscorvery } from '../../global/interface/interface'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '../ui/carousel'
import CardSuggestionDiscorvery from './CardSuggestionDiscorvery'

interface ISwipperCarousel {
  content: IPlaceDiscorvery[]; // L'objet doit avoir une clé `content` avec un tableau
}

const SwipperCarousel: React.FC<ISwipperCarousel> = ({ content }) => {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full"
    >
      <CarouselContent className="relative">
        {
          content.map((ele, index) => (
            <CarouselItem key={index} className="basis-1/1 sm:basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5">
              <CardSuggestionDiscorvery
                image={ele.image}
                name={ele.name}
                url={ele.url}
                properties_number={ele.properties_number}
              />
            </CarouselItem>
          ))
        }
      </CarouselContent>

      <CarouselPrevious className='z-20 absolute top-1/2 -translate-y-1/2 -left-4 bg-background hover:bg-background2 w-auto h-auto p-4' />
      <CarouselNext className='z-20 absolute top-1/2 -translate-y-1/2 -right-4 hover:bg-background2 w-auto h-auto p-4'/>
    </Carousel>
  )
}

export default SwipperCarousel