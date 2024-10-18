import { AiOutlineArrowRight } from "react-icons/ai";
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../../ui/button'
import { ToggleGroup, ToggleGroupItem } from "../../ui/toggle-group";

export type Place = "NewYork" | "Tokyo" | "Paris" | "London"
/**
 * Functional component that displays a section of featured places to stay.
 * @returns JSX element containing the section with featured places.
 */
const FeaturesPlace: React.FC = () => {
  const [selectedPlace, setSelectedPlace] = useState<Place>('NewYork');

  return (
    <section className='container py-10 md:py-16 space-y-10'>
      {/* Title header */}
      <div className="flexContent">
        {/* Title header */}
        <h2 className="title">
          Featured places to stay
        </h2>

        {/* Paragraph header */}
        <p className="max-w-[50%] para">
          Popular places to stay that Chisfis recommends for you
        </p>
      </div>

      {/*  Content videos */}
      <div className="space-y-5">
        {/* Header part */}
        <div className="flex justify-between items-center">
          <ToggleGroup
            type="single"
            value={selectedPlace} onValueChange={(value: Place) => setSelectedPlace(value)}
            className='gap-2'
          >
            <ToggleGroupItem
              className="p-0 hover:bg-transparent rounded-full h-auto"
              value="NewYork"
              aria-label="Toggle NewYork"
            >
              <Button
                variant={'outline'}
                className={`h-auto py-2.5 px-6 text-foreground/60 group-hover:text-foreground/80  hover:bg-foreground/5 border-none shadow-none duration-300 rounded-full font-semibold ${selectedPlace === 'NewYork' && 'border shadow bg-foreground/90 text-background hover:bg-foreground/85 hover:text-background'}`}
              // onClick={selected1}
              >
                New York
              </Button>
            </ToggleGroupItem>

            <ToggleGroupItem
              className="p-0 hover:bg-transparent rounded-full h-auto group"
              value="Tokyo"
              aria-label="Toggle Tokyo"
            >
              <Button
                variant={'outline'}
                className={`h-auto py-2.5 px-6 text-foreground/60 group-hover:text-foreground/80  hover:bg-foreground/5 border-none shadow-none duration-300 rounded-full font-semibold ${selectedPlace === 'Tokyo' && 'border shadow bg-foreground text-background hover:bg-foreground hover:text-background'} `}
              // onClick={selected2}
              >
                Tokyo
              </Button>
            </ToggleGroupItem>

            <ToggleGroupItem
              className="p-0 hover:bg-transparent rounded-full h-auto"
              value="Paris"
              aria-label="Toggle Paris"
            >
              <Button
                variant={'outline'}
                className={`h-auto py-2.5 px-6 text-foreground/60 group-hover:text-foreground/80  hover:bg-foreground/5 border-none shadow-none duration-300 rounded-full font-semibold ${selectedPlace === 'Paris' && 'border shadow bg-foreground text-background hover:bg-foreground hover:text-background'} `}
              // onClick={selected3}
              >
                Paris
              </Button>
            </ToggleGroupItem>

            <ToggleGroupItem
              className="p-0 hover:bg-transparent rounded-full h-auto"
              value="London"
              aria-label="Toggle London"
            >
              <Button
                variant={'outline'}
                className={`h-auto py-2.5 px-6 text-foreground/60 group-hover:text-foreground/80  hover:bg-foreground/5 border-none shadow-none duration-300 rounded-full font-semibold ${selectedPlace === 'London' && 'border shadow bg-foreground text-background hover:bg-foreground hover:text-background'} `}
              // onClick={selected3}
              >
                London
              </Button>
            </ToggleGroupItem>
          </ToggleGroup>

          <Link
            to={'listing-stay'}
          >
            <Button
              variant={'outline'}
              className='text-lg p-6 rounded-full flex items-cente gap-2'
            >
              <span>View all</span>
              <AiOutlineArrowRight />
            </Button>
          </Link>
        </div>

        {/* main part */}
        <main>
          {/* grid box */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 my-16 gap-4 lg:gap-6">




          </div>

          {/* cta btn */}
          <Button
            className='mx-auto text-lg p-6 rounded-full flex items-cente gap-2'
          // onClick={selected3}
          >
            Show me more
          </Button>
        </main>
      </div>
    </section>
  )
}

export default FeaturesPlace