import React, { useId } from 'react'
import { IFootersLinks } from '../../../global/interface/interface'
import { Link } from 'react-router-dom';

/**
 * Functional component for rendering a footer column with links.
 * @param {IFootersLinks} props - The properties for the footer column.
 * @returns JSX element representing the footer column with links.
 */
const FooterCol: React.FC<IFootersLinks> = (props) => {
    const Tab = props.links;
    const id = useId();

    return (
        <div className='capitalize text-nowrap space-y-4'>
            {/* Titre des liens */}
            <h4 className="font-semibold text-sm text-foreground/90 cursor-default">
                {props.title}
            </h4>

            {/* Differents liens */}
            <ul className="space-y-4 text-foreground/80 text-sm">
                {
                    Tab.map((link) => (
                        <li key={id} className="">
                            <Link 
                            to={link.url}
                            className='inline-block linkhover'
                            >
                                {link.name}
                            </Link>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default FooterCol