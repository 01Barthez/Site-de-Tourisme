import React, { useId } from 'react'
import { IFootersLinks } from '../../../global/interface/interface'
import { Link } from 'react-router-dom';

const FooterCol: React.FC<IFootersLinks> = (props) => {
    const Tab = props.links;
    const id = useId();

    return (
        <div className='capitalize text-nowrap space-y-2'>
            {/* Titre des liens */}
            <h4 className="font-bold text-lg text-foreground cursor-default">
                {props.title}
            </h4>

            {/* Differents liens */}
            <ul className="space-y-2 text-foreground2">
                {
                    Tab.map((link) => (
                        <li key={id} className="">
                            <Link 
                            to={link.url}
                            className=' linkhover'
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