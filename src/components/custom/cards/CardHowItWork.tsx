import React from 'react'
import { ICardHowItWork } from '../../../global/interface/interface'

/**
 * Functional component for displaying a card with an image, title, and description.
 * @param {object} props - The properties passed to the component.
 * @param {string} props.image - The URL of the image to display.
 * @param {string} props.title - The title of the card.
 * @param {string} props.description - The description of the card.
 * @returns JSX element representing the card component.
 */
const CardHowItWork: React.FC<ICardHowItWork> = ({ image, title, description }) => {
    return (
        <div className="max-w-80 w-fit flex flex-col items-center gap-6 text-center">
            {/* Image Part */}
            <div className="max-w-44">
                <img
                    src={image}
                    alt={`preview de ${title}`}
                    className="w-full h-full object-contain"
                />
            </div>

            {/* Title Part */}
            <h4 className="text-xl font-semibold">
                {title}
            </h4>

            {/* Description part */}
            <p className=" text-foreground/70">
                {description}
            </p>
        </div>
    )
}

export default CardHowItWork