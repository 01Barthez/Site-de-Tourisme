import React from 'react'
import { Link } from 'react-router-dom'
import { ICardSuggestionDiscorvery } from '../../../global/interface/interface'

/**
 * Functional component for displaying a card house discovery.
 * @param {ICardSuggestionDiscorvery} props - The properties for the card suggestion discovery.
 * @returns JSX element for the card house discovery.
 */
const CardHouseDiscorvery: React.FC<ICardSuggestionDiscorvery> = (props) => {
    return (
        <Link to={props.url} className='outline-none focus:border-none'>
            <div className='flex flex-col gap-2'>
                <div className="group max-w-80 h-44 rounded-2xl overflow-hidden bg-foreground">
                    <img
                        src={props.image}
                        alt={`Preview ${props.name}`}
                        className='w-full h-full object-cover group-hover:opacity-85 duration-300'
                    />
                </div>

                <div className="flex flex-col gap-1">
                    <div className='text-lg text-foreground font-medium'>
                        {props.name}
                    </div>

                    <div className='text-foreground/70'>
                        <span>{props.properties_number}</span>
                        <span> properties</span>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default CardHouseDiscorvery