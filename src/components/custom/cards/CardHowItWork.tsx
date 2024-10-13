import React from 'react'
export interface ICardHowItWork {
    image: string;
    title: string;
    description: string;
}
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