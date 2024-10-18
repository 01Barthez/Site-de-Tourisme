import React from 'react'
import Images from "/Image.svg"
import { Link } from 'react-router-dom'
import { Button } from '../../ui/button'
import { RxDashboard } from "react-icons/rx";

/**
 * Functional component for displaying a photo gallery.
 * @returns JSX element representing the photo gallery component.
 */
const Photos: React.FC = () => {
    return (
        <div className='flex gap-2 container md:gap-4 '>
            <div className='flex-1 border relative '>
                <Link to='/listing-stay-detail/all'>
                    <img src={Images} alt="images at the beach" className='h-full w-full object-cover rounded-md brightness-105 hover:brightness-75 hover:transition hover:ease-in-out hover:delay-150' />
                </Link>
                <div className='absolute bottom-4 left-2 '>
                    <Link to='/listing-stay-detail/all'>
                        <Button className='flex items-center gap-4 bg-white text-black'>
                            <span><RxDashboard /></span>
                            show all options</Button>
                    </Link>
                </div>
            </div>

            <div className='flex-1 grid grid-rows-2 md:gap-4  md:grid md:grid-cols-2 lg:grid lg:grid-cols-2 '>
                <div className='cols-span-2'>
                    <Link
                        to='/listing-stay-detail/all'
                    >
                        <img src={Images} alt="images at the beach" className='rounded-md brightness-105 hover:brightness-75 hover:transition hover:ease-in-out hover:delay-150' />
                    </Link>
                </div>
                <div className='cols-span-2'>
                    <Link
                        to='/listing-stay-detail/all'
                    >
                        <img src={Images} alt="images at the beach" className='rounded-md brightness-105 hover:brightness-75 hover:transition hover:ease-in-out hover:delay-150' />
                    </Link>
                </div>
                <div className='cols-span-2'>
                    <Link
                        to='/listing-stay-detail/all'
                    >
                        <img src={Images} alt="images at the beach" className='rounded-mdbrightness-105 hover:brightness-75 hover:transition hover:ease-in-out hover:delay-150 ' />
                    </Link>
                </div>
                <div className='cols-span-2 hidden md:block'>
                    <Link
                        to='/listing-stay-detail/all'
                    >
                        <img src={Images} alt="images at the beach" className='rounded-md brightness-105 hover:brightness-75 hover:transition hover:ease-in-out hover:delay-150' />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Photos