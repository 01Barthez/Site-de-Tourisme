import React from 'react'
import { ICardExploreNearby } from '../../../global/interface/interface'
import { Card } from '../../ui/card'
import { Link } from 'react-router-dom'

const CardExploreNearby: React.FC<ICardExploreNearby> = (props) => {
    return (
        <Card className='w-full md:w-fit relative p-6'>
            <Link to={props.url} className='flex items-center gap-4'>
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