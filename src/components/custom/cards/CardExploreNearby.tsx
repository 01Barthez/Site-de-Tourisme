import React from 'react'
import { ICardExploreNearby } from '../../../global/interface/interface'
import { Card } from '../../ui/card'
import { Link } from 'react-router-dom'

/**
 * Functional component for rendering a card to explore nearby locations.
 * @param {ICardExploreNearby} props - The properties passed to the component.
 * @returns JSX element representing the card with details of the nearby location.
 */
const CardExploreNearby: React.FC<ICardExploreNearby> = (props) => {
    return (
        <Card className='w-full md:w-fit rounded-3xl p-2 shadow-none hover:bg-primary/5 hover:shadow-xl duration-200'>
            <Link to={props.url} className='relative p-4 flex items-center gap-4'>
                <div className="absolute top-1 right-1  bg-foreground/5 rounded-full py-0.5 min-w-2 text-xs font-medium px-2">
                    {props.visit}
                </div>
                <div className="w-24 h-24 rounded-full overflow-hidden">
                    <img
                        src={props.image}
                        alt={`Preview of city ${props.name}`}
                        className='w-full h-full object-cover'
                    />
                </div>

                <div className="flex flex-col gap-2">
                    {/* Name of the zone */}
                    <h4 className="text-lg font-semibold">
                        {props.name}
                    </h4>

                    {/* Duration of drive */}
                    <p className="text-sm text-foreground/70 text-nowrap">
                        {props.delay} minutes drive
                    </p>
                </div>
            </Link>
        </Card>
    )
}

export default CardExploreNearby