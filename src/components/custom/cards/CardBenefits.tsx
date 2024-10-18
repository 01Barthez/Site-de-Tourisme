import React from 'react'
import { Badge } from '../../ui/badge';
import { ICardBenefits } from '../../../global/interface/interface';

/**
 * Functional component for displaying card benefits.
 * @param {ICardBenefits} props - The properties passed to the component.
 * @returns JSX element representing the card benefits.
 */
const CardBenefits: React.FC<ICardBenefits> = (props) => {
    return (
        <div className='flex flex-col gap-4'>
            {/* For the badge name part */}
            <Badge className='w-fit font-medium rounded-full' variant={props.badge.variant}>
                {props.badge.content}
            </Badge>

            {/* For the title part */}
            <h4 className="text-xl font-semibold">
                {props.name}
            </h4>

            {/* For the content part */}
            <p className=" text-foreground/70">
                {props.content}
            </p>
        </div>
    )
}

export default CardBenefits