import React from 'react'
import { ICardSuggestionDiscorvery } from '../../global/interface/interface'
import { Link } from 'react-router-dom'

const CardSuggestionDiscorvery: React.FC<ICardSuggestionDiscorvery> = (props) => {
    return (
        <Link to={props.url}>
            <div className='flex flex-col gap-2'>
                <div className="max-w-90 h-80 rounded-2xl overflow-hidden hover:bg-foreground/80">
                    <img
                        src={props.image}
                        alt={`Preview ${props.name}`}
                        className='w-full h-full object-cover'
                    />
                </div>

                <div className='text-lg text-foreground font-medium'>
                    {props.name}
                </div>

                <div className='text-foreground/70'>
                    <span>{props.properties_number}</span>
                    <span> properties</span>
                </div>
            </div>
        </Link>
    )
}

export default CardSuggestionDiscorvery