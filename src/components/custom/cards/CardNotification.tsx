import React from 'react'
import { INotifications, ITruncateText } from '../../../global/interface/interface';
import { Link } from 'react-router-dom';
import { Avatar, AvatarFallback, AvatarImage } from '../../ui/avatar';

/**
 * Functional component for displaying a card notification.
 * @param {INotifications} props - The properties for the card notification.
 * @returns JSX element for the card notification.
 */

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

    const ConvertTime = (dateTime: Date): string => {
        const date = new Date(dateTime);
        const now = new Date();
        const timeDifference = Math.max(Math.floor((now.getTime() - date.getTime()) / 1000), 0); // différence en secondes

        if (isNaN(date.getTime())) {
            return "Invalid date";
        }
        if (timeDifference === 0) {
            return "Now"
        } else if (timeDifference < 60) {
            return `${timeDifference} second(s) ago`;
        } else if (timeDifference < 3600) {
            const minutes = Math.floor(timeDifference / 60);
            return `${minutes} minute(s) ago`;
        } else if (timeDifference < 86400) {
            const hours = Math.floor(timeDifference / 3600);
            const minutes = Math.floor((timeDifference % 3600) / 60);
            return `${hours} hour(s) ${minutes > 0 ? `${minutes} minute(s)` : ''} ago`;
        } else {
            const days = Math.floor(timeDifference / 86400);
            return `${days} day(s) ago`;
        };
    };

    const splitName = (name: string): string => {
        let result = "";
        const tabName = name.toUpperCase().split(" ");
        result = `${tabName[0].slice(0, 1)}${tabName[1].slice(0, 1)}`
        return result;
    }

    return (
        <Link
            to={props.url}
            className='group flex items-center gap-4 hover:bg-background/5 duration-200'
        >
            <Avatar className="w-14 h-14 rounded-full overflow-hidden">
                <AvatarImage
                    src={props.profile}
                    alt={`profile of ${props.name}`}
                    className="w-full h-full object-cover"
                />
                <AvatarFallback className='w-full h-full font-semibold group-hover:bg-foreground/10 duration-200'>
                    {splitName(props.name)}
                </AvatarFallback>
            </Avatar>

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
                    {ConvertTime(props.time)}
                    {/* {props.time} minutes ago */}
                </span>
            </div>

            {/* IsOnlineBtn */}
            <div className="w-2 h-2 rounded-full bg-blue-500"></div>
        </Link>
    )
}

export default CardNotification