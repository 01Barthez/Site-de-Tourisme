import React, { useId } from 'react'
import { IFootersLinks } from '../../../global/interface/interface'
import { Link } from 'react-router-dom';

const FooterCol: React.FC<IFootersLinks> = (props) => {
    const Tab = props.links;
    const id = useId();

    return (
        <div className='capitalize space-y-2'>
            {/* Titre des liens */}
            <h4 className="font-semibold">
                {props.title}
            </h4>

            {/* Differents liens */}
            <ul className="space-y-1">
                {
                    Tab.map((link) => (
                        <li key={id} className="">
                            <Link 
                            to={link.url}
                            className=''
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