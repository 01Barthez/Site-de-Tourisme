import React from 'react'
import { INotifications, ITruncateText } from '../../../global/interface/interface';
import { Link } from 'react-router-dom';

const CardNotification: React.FC<INotifications> = (props) => {
    const TruncateText: React.FC<ITruncateText> = ({ text, wordLimit = 5 }) => {
        // Séparer le texte en mots
        const words = text.split(' ');

        // Si le texte dépasse la limite de mots, le couper et ajouter "..."
        const truncatedText = words.length > wordLimit
            ? words.slice(0, wordLimit).join(' ') + '...'
            : text;

        return <p className="text-foreground/70">{truncatedText}</p>;
    };


    return (
        <Link
            to={props.url}
            className='flex items-center gap-4'
        >
            <div className="w-14 h-14 rounded-full overflow-hidden">
                <img
                    src={props.profile}
                    alt={`profile ${props.name}`}
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Notification detail */}
            <div className="flex flex-col gap-1">
                {/* Name */}
                <h4 className="text-foreground font-medium">
                    {props.name}
                </h4>

                {/* Message details */}
                <TruncateText text={props.message} />

                {/* delay */}
                <span className="text-foreground/40 text-xs">
                    {props.time} minutes ago
                </span>
            </div>

            {/* IsOnlineBtn */}
            <div className="w-2 h-2 rounded-full bg-blue-500"></div>
        </Link>
    )
}

export default CardNotification