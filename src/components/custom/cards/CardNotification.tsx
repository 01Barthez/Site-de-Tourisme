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
    /**
     * Functional component that truncates the given text to a specified word limit.
     * @param {string} text - The text to be truncated.
     * @param {number} [wordLimit=5] - The maximum number of words to display before truncating.
     * @returns JSX element containing the truncated text.
     */

    const TruncateText: React.FC<ITruncateText> = ({ text, wordLimit = 5 }) => {
        // Séparer le texte en mots
        const words = text.split(' ');

        // Si le texte dépasse la limite de mots, le couper et ajouter "..."
        const truncatedText = words.length > wordLimit
            ? words.slice(0, wordLimit).join(' ') + '...'
            : text;

        return <p className="text-foreground/70">{truncatedText}</p>;
    };

    /**
     * Converts a given time in seconds to a human-readable format indicating how long ago it occurred.
     * @param {number} time - The time in seconds to convert.
     * @returns {string} A human-readable string indicating how long ago the time occurred.
     */
    const ConvertTime: React.FC<number> = (time): string => {
        let messageTime = "now";
        if (time > (3600 * 24)) {
            const days = Math.floor(time / (3600 * 24))
            messageTime = `${days} day(s)ago`;
        } else if (time > 3600) {
            const heure = Math.floor(time / 3600)
            const minutes = Math.floor(time % 3600)
            messageTime = `${heure} hour(s) ${minutes > 0 ? `${minutes} minute(s)` : ''} ago`;
        } else {
            const minutes = Math.floor(time % 60)
            messageTime = `${minutes} minutes ago`
        }

        return messageTime
    }
    console.log(ConvertTime)

    return (
        <Link
            to={props.url}
            className='flex items-center gap-4 hover:bg-background/5 duration-200'
        >
            <Avatar className="w-14 h-14 rounded-full overflow-hidden">
                <AvatarImage
                    src={props.profile}
                    alt={`profile of ${props.name}`}
                    className="w-full h-full object-cover"
                />
                <AvatarFallback className='w-full h-full'>
                    CN
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
                    {/* {ConvertTime(props.time)} */}
                    {props.time} minutes ago
                </span>
            </div>

            {/* IsOnlineBtn */}
            <div className="w-2 h-2 rounded-full bg-blue-500"></div>
        </Link>
    )
}

export default CardNotification