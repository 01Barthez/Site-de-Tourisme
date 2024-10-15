import React from 'react'
import { Link } from 'react-router-dom'
import { HoverCard, HoverCardContent, HoverCardTrigger } from '../../../ui/hover-card'
import { FiChevronDown } from 'react-icons/fi'

const NavLinks1: React.FC = () => {
    return (
        <ul className="flex items-center gap-2">
            {/* Link 1 */}
            <HoverCard>
                <HoverCardTrigger >
                    <Link
                        to={'/'}
                        className='text-nowrap group cursor-pointer flex items-center gap-1 px-4 py-2 hover:bg-foreground/5 rounded-full'
                    >
                        <span> Home </span>
                        <FiChevronDown className="group-hover:translate-y-[2px] duration-300 text-xl text-foreground/30 group-hover:text-foreground/50" />
                    </Link>
                </HoverCardTrigger>

                <HoverCardContent className='bg-card text-card-foreground w-fit min-w-52 mt-3.5 px-2 py-6 shadow shadow-foreground/15 border border-foreground/15 rounded'>
                    <ul className="flex flex-col">
                        <li className="w-full">
                            <Link
                                to={'/'}
                                className="w-full inline-block hover:bg-foreground/10 text-foreground/80 hover:text-foreground p-2 px-4 text-sm rounded-md"
                            >
                                Online booking
                            </Link>
                        </li>

                        <li className="w-full">
                            <Link
                                to={'/home-2'}
                                className="w-full inline-block hover:bg-foreground/10 text-foreground/80 hover:text-foreground p-2 px-4 text-sm rounded-md space-x-2"
                            >
                                <span>
                                    Real Estate
                                </span>

                                <span className="bg-red-500 text-destructive-foreground text-[10px] py-[2px] px-1 rounded-sm">
                                    New!
                                </span>
                            </Link>
                        </li>

                        <li className="w-full">
                            <Link
                                to={'/home-3'}
                                className="w-full inline-block hover:bg-foreground/10 text-foreground/80 hover:text-foreground p-2 px-4 text-sm rounded-md space-x-2"
                            >
                                <span>
                                    Home 3
                                </span>

                                <span className="bg-red-500 text-destructive-foreground text-[10px] py-[2px] px-1 rounded-sm">
                                    New!
                                </span>
                            </Link>
                        </li>
                    </ul>
                </HoverCardContent>
            </HoverCard>

            {/* Link 2 */}
            <HoverCard>
                <HoverCardTrigger >
                    <Link
                        to={'/'}
                        className='text-nowrap group cursor-pointer flex items-center gap-1 px-4 py-2 hover:bg-foreground/5 rounded-full'
                    >
                        <span>  Five columns </span>
                        <FiChevronDown className="group-hover:translate-y-[2px] duration-300 text-xl text-foreground/30 group-hover:text-foreground/50" />
                    </Link>
                </HoverCardTrigger>

                <HoverCardContent className='bg-card text-card-foreground w-fit min-w-52 mt-3.5 px-2 py-6 shadow shadow-foreground/15 border border-foreground/15 rounded'>
                    Hello, I'm Barthez, and I'm a smart boy who can do what he want ...
                </HoverCardContent>
            </HoverCard>

            {/* Link 3 */}
            <HoverCard>
                <HoverCardTrigger >
                    <Link
                        to={'/listing-stay'}
                        className='text-nowrap group cursor-pointer flex items-center gap-1 px-4 py-2 hover:bg-foreground/5 rounded-full'
                    >
                        <span> Listing page </span>
                        <FiChevronDown className="group-hover:translate-y-[2px] duration-300 text-xl text-foreground/30 group-hover:text-foreground/50" />
                    </Link>
                </HoverCardTrigger>

                <HoverCardContent className='bg-card text-card-foreground w-fit min-w-52 mt-3.5 px-2 py-6 shadow shadow-foreground/15 border border-foreground/15 rounded'>
                    <ul className="flex flex-col">
                        {/* Sublink 1 */}
                        <li className="w-full relative group">
                            <HoverCard>
                                <HoverCardTrigger>
                                    <Link
                                        to={'/listing-stay'}
                                        className="relative group w-full hover:bg-foreground/10 text-foreground/80 hover:text-foreground p-2 px-4 text-sm rounded-md flex items-center gap-1"
                                    >
                                        <span> Stay listings </span>
                                        <FiChevronDown className="group-hover:translate-y-[2px] duration-300 text-xl text-gray-400 group-hover:text-gray-500" />
                                    </Link>
                                </HoverCardTrigger>

                                <HoverCardContent className='absolute left-28 -top-10 bg-card text-card-foreground w-fit min-w-52 px-2 py-6 shadow shadow-foreground/15 border border-foreground/15 rounded'>
                                    <ul className="flex flex-col">
                                        <li className="w-full">
                                            <Link
                                                to={'/listing-stay'}
                                                className="w-full inline-block hover:bg-foreground/10 text-foreground/80 hover:text-foreground p-2 px-4 text-sm rounded-md"
                                            >
                                                Stay Page
                                            </Link>
                                        </li>

                                        <li className="w-full">
                                            <Link
                                                to={'/listing-stay-map'}
                                                className="w-full inline-block hover:bg-foreground/10 text-foreground/80 hover:text-foreground p-2 px-4 text-sm rounded-md"
                                            >
                                                Stay Page (map)
                                            </Link>
                                        </li>

                                        <li className="w-full">
                                            <Link
                                                to={'/listing-stay-detail'}
                                                className="w-full inline-block hover:bg-foreground/10 text-foreground/80 hover:text-foreground p-2 px-4 text-sm rounded-md"
                                            >
                                                Stay Detail
                                            </Link>
                                        </li>
                                    </ul>
                                </HoverCardContent>
                            </HoverCard>
                        </li>

                        {/* Sublink 2 */}
                        <li className="w-full relative group">
                            <HoverCard>
                                <HoverCardTrigger>
                                    <Link
                                        to={'/listing-experiences'}
                                        className="relative group w-full hover:bg-foreground/10 text-foreground/80 hover:text-foreground p-2 px-4 text-sm rounded-md flex items-center gap-1"
                                    >
                                        <span> Experiences Listings </span>
                                        <FiChevronDown className="group-hover:translate-y-[2px] duration-300 text-xl text-gray-400 group-hover:text-gray-500" />
                                    </Link>
                                </HoverCardTrigger>

                                <HoverCardContent className='absolute left-28 -top-10 bg-card text-card-foreground w-fit min-w-52 px-2 py-6 shadow shadow-foreground/15 border border-foreground/15 rounded'>
                                    <ul className="flex flex-col">
                                        <li className="w-full">
                                            <Link
                                                to={'/listing-experiences'}
                                                className="w-full inline-block hover:bg-foreground/10 text-foreground/80 hover:text-foreground p-2 px-4 text-sm rounded-md"
                                            >
                                                Experiences Page
                                            </Link>
                                        </li>

                                        <li className="w-full">
                                            <Link
                                                to={'/listing-stay-map'}
                                                className="w-full inline-block hover:bg-foreground/10 text-foreground/80 hover:text-foreground p-2 px-4 text-sm rounded-md"
                                            >
                                                Experiences Page (map)
                                            </Link>
                                        </li>

                                        <li className="w-full">
                                            <Link
                                                to={'/listing-stay-detail'}
                                                className="w-full inline-block hover:bg-foreground/10 text-foreground/80 hover:text-foreground p-2 px-4 text-sm rounded-md"
                                            >
                                                Experiences Detail
                                            </Link>
                                        </li>
                                    </ul>
                                </HoverCardContent>
                            </HoverCard>
                        </li>

                        {/* Sublink 3 */}
                        <li className="w-full relative group">
                            <HoverCard>
                                <HoverCardTrigger>
                                    <Link
                                        to={'/listing-car'}
                                        className="relative group w-full hover:bg-foreground/10 text-foreground/80 hover:text-foreground p-2 px-4 text-sm rounded-md flex items-center gap-1"
                                    >
                                        <span> Cars listings </span>
                                        <FiChevronDown className="group-hover:translate-y-[2px] duration-300 text-xl text-gray-400 group-hover:text-gray-500" />
                                    </Link>
                                </HoverCardTrigger>

                                <HoverCardContent className='absolute left-28 -top-10 bg-card text-card-foreground w-fit min-w-52 px-2 py-6 shadow shadow-foreground/15 border border-foreground/15 rounded'>
                                    <ul className="flex flex-col">
                                        <li className="w-full">
                                            <Link
                                                to={'/listing-car'}
                                                className="w-full inline-block hover:bg-foreground/10 text-foreground/80 hover:text-foreground p-2 px-4 text-sm rounded-md"
                                            >
                                                Cars Pages
                                            </Link>
                                        </li>

                                        <li className="w-full">
                                            <Link
                                                to={'/listing-stay-map'}
                                                className="w-full inline-block hover:bg-foreground/10 text-foreground/80 hover:text-foreground p-2 px-4 text-sm rounded-md"
                                            >
                                                Cars Pages (map)
                                            </Link>
                                        </li>

                                        <li className="w-full">
                                            <Link
                                                to={'/listing-stay-detail'}
                                                className="w-full inline-block hover:bg-foreground/10 text-foreground/80 hover:text-foreground p-2 px-4 text-sm rounded-md"
                                            >
                                                Cars Detail
                                            </Link>
                                        </li>
                                    </ul>
                                </HoverCardContent>
                            </HoverCard>
                        </li>

                        {/* Sublink 4 */}
                        <li className="w-full relative group">
                            <HoverCard>
                                <HoverCardTrigger>
                                    <Link
                                        to={'/listing-real-estate'}
                                        className="relative group w-full hover:bg-foreground/10 text-foreground/80 hover:text-foreground p-2 px-4 text-sm rounded-md flex items-center gap-1"
                                    >
                                        <span> Stay listings </span>
                                        <FiChevronDown className="group-hover:translate-y-[2px] duration-300 text-xl text-gray-400 group-hover:text-gray-500" />
                                    </Link>
                                </HoverCardTrigger>

                                <HoverCardContent className='absolute left-28 -top-10 bg-card text-card-foreground w-fit min-w-52 px-2 py-6 shadow shadow-foreground/15 border border-foreground/15 rounded'>
                                    <ul className="flex flex-col">
                                        <li className="w-full">
                                            <Link
                                                to={'/listing-real-estate'}
                                                className="w-full inline-block hover:bg-foreground/10 text-foreground/80 hover:text-foreground p-2 px-4 text-sm rounded-md"
                                            >
                                                Real Estate Listings
                                            </Link>
                                        </li>

                                        <li className="w-full">
                                            <Link
                                                to={'/listing-stay-map'}
                                                className="w-full inline-block hover:bg-foreground/10 text-foreground/80 hover:text-foreground p-2 px-4 text-sm rounded-md"
                                            >
                                                Real Estate Page (map)
                                            </Link>
                                        </li>
                                    </ul>
                                </HoverCardContent>
                            </HoverCard>
                        </li>

                        {/* Sublink 5 */}
                        <li className="w-full">
                            <Link
                                to={'/listing-flights'}
                                className="w-full inline-block hover:bg-gray-100 text-foreground2 hover:text-foreground p-2 px-4 text-sm rounded-md"
                            >
                                Flights Listings
                            </Link>
                        </li>
                    </ul>
                </HoverCardContent>
            </HoverCard>

            {/* Link 4 */}
            <HoverCard>
                <HoverCardTrigger >
                    <Link
                        to={'/listing-experiences'}
                        className='text-nowrap group cursor-pointer flex items-center gap-1 px-4 py-2 hover:bg-foreground/5 rounded-full'
                    >
                        <span> Templates </span>
                        <FiChevronDown className="group-hover:translate-y-[2px] duration-300 text-xl text-foreground/30 group-hover:text-foreground/50" />
                    </Link>
                </HoverCardTrigger>

                <HoverCardContent className='bg-card text-card-foreground w-fit min-w-52 mt-3.5 px-2 py-6 shadow shadow-foreground/15 border border-foreground/15 rounded'>
                    <ul className="flex flex-col">
                        <li className="w-full relative group">
                            <HoverCard>
                                <HoverCardTrigger>
                                    <Link
                                        to={'/add-listing/1'}
                                        className="relative group w-full hover:bg-foreground/10 text-foreground/80 hover:text-foreground p-2 px-4 text-sm rounded-md flex items-center gap-1"
                                    >
                                        <span> + Add listing </span>
                                        <FiChevronDown className="group-hover:translate-y-[2px] duration-300 text-xl text-gray-400 group-hover:text-gray-500" />
                                    </Link>
                                </HoverCardTrigger>

                                <HoverCardContent className='absolute left-28 -top-10 bg-card text-card-foreground w-fit min-w-52 px-2 py-6 shadow shadow-foreground/15 border border-foreground/15 rounded'>
                                    <ul className="flex flex-col">
                                        <li className="w-full">
                                            <Link
                                                to={'/add-listing/1'}
                                                className="w-full inline-block hover:bg-foreground/10 text-foreground/80 hover:text-foreground p-2 px-4 text-sm rounded-md"
                                            >
                                                Add listing 1
                                            </Link>
                                        </li>

                                        <li className="w-full">
                                            <Link
                                                to={'/add-listing/2'}
                                                className="w-full inline-block hover:bg-foreground/10 text-foreground/80 hover:text-foreground p-2 px-4 text-sm rounded-md"
                                            >
                                                Add listing 2
                                            </Link>
                                        </li>

                                        <li className="w-full">
                                            <Link
                                                to={'/add-listing/2'}
                                                className="w-full inline-block hover:bg-foreground/10 text-foreground/80 hover:text-foreground p-2 px-4 text-sm rounded-md"
                                            >
                                                Add listing 3
                                            </Link>
                                        </li>

                                        <li className="w-full">
                                            <Link
                                                to={'/add-listing/2'}
                                                className="w-full inline-block hover:bg-foreground/10 text-foreground/80 hover:text-foreground p-2 px-4 text-sm rounded-md"
                                            >
                                                Add listing 4
                                            </Link>
                                        </li>

                                        <li className="w-full">
                                            <Link
                                                to={'/add-listing/2'}
                                                className="w-full inline-block hover:bg-foreground/10 text-foreground/80 hover:text-foreground p-2 px-4 text-sm rounded-md"
                                            >
                                                Add listing 5
                                            </Link>
                                        </li>

                                        <li className="w-full">
                                            <Link
                                                to={'/add-listing/2'}
                                                className="w-full inline-block hover:bg-foreground/10 text-foreground/80 hover:text-foreground p-2 px-4 text-sm rounded-md"
                                            >
                                                Add listing 6
                                            </Link>
                                        </li>

                                        <li className="w-full">
                                            <Link
                                                to={'/add-listing/2'}
                                                className="w-full inline-block hover:bg-foreground/10 text-foreground/80 hover:text-foreground p-2 px-4 text-sm rounded-md"
                                            >
                                                Add listing 7
                                            </Link>
                                        </li>

                                        <li className="w-full">
                                            <Link
                                                to={'/add-listing/2'}
                                                className="w-full inline-block hover:bg-foreground/10 text-foreground/80 hover:text-foreground p-2 px-4 text-sm rounded-md"
                                            >
                                                Add listing 8
                                            </Link>
                                        </li>

                                        <li className="w-full">
                                            <Link
                                                to={'/add-listing/2'}
                                                className="w-full inline-block hover:bg-foreground/10 text-foreground/80 hover:text-foreground p-2 px-4 text-sm rounded-md"
                                            >
                                                Add listing 9
                                            </Link>
                                        </li>

                                        <li className="w-full">
                                            <Link
                                                to={'/add-listing/2'}
                                                className="w-full inline-block hover:bg-foreground/10 text-foreground/80 hover:text-foreground p-2 px-4 text-sm rounded-md"
                                            >
                                                Add listing 10
                                            </Link>
                                        </li>
                                    </ul>
                                </HoverCardContent>
                            </HoverCard>
                        </li>

                        <li className="w-full">
                            <Link
                                to={'/check-out'}
                                className="w-full inline-block hover:bg-foreground/10 text-foreground/80 hover:text-foreground p-2 px-4 text-sm rounded-md"
                            >
                                Checkout
                            </Link>
                        </li>

                        <li className="w-full">
                            <Link
                                to={'/pay-done'}
                                className="w-full inline-block hover:bg-foreground/10 text-foreground/80 hover:text-foreground p-2 px-4 text-sm rounded-md"
                            >
                                Pay done
                            </Link>
                        </li>

                        <li className="w-full">
                            <Link
                                to={'/author'}
                                className="w-full inline-block hover:bg-foreground/10 text-foreground/80 hover:text-foreground p-2 px-4 text-sm rounded-md"
                            >
                                Author page
                            </Link>
                        </li>

                        <li className="w-full">
                            <Link
                                to={'/account'}
                                className="w-full inline-block hover:bg-foreground/10 text-foreground/80 hover:text-foreground p-2 px-4 text-sm rounded-md"
                            >
                                Account page
                            </Link>
                        </li>

                        <li className="w-full">
                            <Link
                                to={'/subscription'}
                                className="w-full inline-block hover:bg-foreground/10 text-foreground/80 hover:text-foreground p-2 px-4 text-sm rounded-md"
                            >
                                Subscription
                            </Link>
                        </li>
                    </ul>
                </HoverCardContent>
            </HoverCard>

            {/* Link 5 */}
            <HoverCard >
                <HoverCardTrigger >
                    <Link
                        to={'/listing-car'}
                        className='text-nowrap group cursor-pointer flex items-center gap-1 px-4 py-2 hover:bg-foreground/5 rounded-full'
                    >
                        <span> Other pages </span>
                        <FiChevronDown className="group-hover:translate-y-[2px] duration-300 text-xl text-foreground/30 group-hover:text-foreground/50" />
                    </Link>
                </HoverCardTrigger>

                <HoverCardContent className='bg-card text-card-foreground w-fit min-w-52 mt-3.5 px-2 py-6 shadow shadow-foreground/15 border border-foreground/15 rounded'>
                    <ul className="flex flex-col">
                        <li className="w-full">
                            <Link
                                to={'/add-listing/1'}
                                className="w-full inline-block hover:bg-foreground/10 text-foreground/80 hover:text-foreground p-2 px-4 text-sm rounded-md"
                            >
                                + Add listing
                            </Link>
                        </li>

                        <li className="w-full">
                            <Link
                                to={'/blog'}
                                className="w-full inline-block hover:bg-foreground/10 text-foreground/80 hover:text-foreground p-2 px-4 text-sm rounded-md"
                            >
                                Blog page
                            </Link>
                        </li>

                        <li className="w-full">
                            <Link
                                to={'/blog/single'}
                                className="w-full inline-block hover:bg-foreground/10 text-foreground/80 hover:text-foreground p-2 px-4 text-sm rounded-md"
                            >
                                Blog simple
                            </Link>
                        </li>

                        <li className="w-full">
                            <Link
                                to={'/about'}
                                className="w-full inline-block hover:bg-foreground/10 text-foreground/80 hover:text-foreground p-2 px-4 text-sm rounded-md"
                            >
                                About
                            </Link>
                        </li>

                        <li className="w-full">
                            <Link
                                to={'/contact'}
                                className="w-full inline-block hover:bg-foreground/10 text-foreground/80 hover:text-foreground p-2 px-4 text-sm rounded-md"
                            >
                                Contact us
                            </Link>
                        </li>

                        <li className="w-full">
                            <Link
                                to={'/login'}
                                className="w-full inline-block hover:bg-foreground/10 text-foreground/80 hover:text-foreground p-2 px-4 text-sm rounded-md"
                            >
                                Login
                            </Link>
                        </li>

                        <li className="w-full">
                            <Link
                                to={'/signup'}
                                className="w-full inline-block hover:bg-foreground/10 text-foreground/80 hover:text-foreground p-2 px-4 text-sm rounded-md"
                            >
                                Signup
                            </Link>
                        </li>
                    </ul>
                </HoverCardContent>
            </HoverCard>
        </ul>
    )
}

export default NavLinks1