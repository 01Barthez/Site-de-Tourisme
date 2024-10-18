import React from 'react'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger
} from '../../../ui/dropdown-menu'
import { HiOutlineChevronDown } from "react-icons/hi";
import { Link } from 'react-router-dom';

/**
 * Functional component for a dropdown menu with content related to travelers.
 * @returns JSX element representing the dropdown menu for travelers.
 */
const Travelers: React.FC = () => {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1">
                <span className='font-medium'>Travelers</span>
                <HiOutlineChevronDown className="duration-200 text-foreground/50" />
            </DropdownMenuTrigger>

            <DropdownMenuContent className='p-0 mt-5 space-y-2 rounded-3xl bg-card min-w-80'>
                {/* Bloc top */}
                <div className="space-y-1 p-2.5">
                    {/* Firstelement */}
                    <DropdownMenuItem className='bg-transparent hover:bg-primary/5 rounded-lg'>
                        <Link
                            className="flex items-center gap-2.5 py-1"
                            to={'/listing-stay'}
                        >
                            {/* Left Image */}
                            <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-primary/15">
                                <img
                                    src=""
                                    alt=""
                                    className=""
                                />
                            </div>

                            {/* Right side */}
                            <div className="flex flex-col">
                                <h6 className="font-medium text-sm">
                                    Stays
                                </h6>

                                <span className="text-xs text-foreground/60">
                                    Stays rental description
                                </span>
                            </div>
                        </Link>
                    </DropdownMenuItem>

                    {/* Second Element */}
                    <DropdownMenuItem className='bg-transparent hover:bg-primary/5 rounded-lg'>
                        <Link
                            className="flex items-center gap-2.5 py-1"
                            to={'/listing-real-estate'}
                        >
                            {/* Left Image */}
                            <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-primary/15">
                                <img
                                    src=""
                                    alt=""
                                    className=""
                                />
                            </div>

                            {/* Right side */}
                            <div className="flex flex-col">
                                <h6 className="font-medium text-sm">
                                    Real Estate
                                </h6>

                                <span className="text-xs text-foreground/60">
                                    Real Estate description
                                </span>
                            </div>
                        </Link>
                    </DropdownMenuItem>

                    {/* Thirt element */}
                    <DropdownMenuItem className='bg-transparent hover:bg-primary/5 rounded-lg'>
                        <Link
                            className="flex items-center gap-2.5 py-1"
                            to={'/listing-car'}
                        >
                            {/* Left Image */}
                            <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-primary/15">
                                <img
                                    src=""
                                    alt=""
                                    className=""
                                />
                            </div>

                            {/* Right side */}
                            <div className="flex flex-col">
                                <h6 className="font-medium text-sm">
                                    Cars
                                </h6>

                                <span className="text-xs text-foreground/60">
                                    Car rental description
                                </span>
                            </div>
                        </Link>
                    </DropdownMenuItem>

                    {/* Fourth element */}
                    <DropdownMenuItem className='bg-transparent hover:bg-primary/5 rounded-lg'>
                        <Link
                            className="flex items-center gap-2.5 py-1"
                            to={'/listing-experiences'}
                        >
                            {/* Left Image */}
                            <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-primary/15">
                                <img
                                    src=""
                                    alt=""
                                    className=""
                                />
                            </div>

                            {/* Right side */}
                            <div className="flex flex-col">
                                <h6 className="font-medium text-sm">
                                    Experiences
                                </h6>

                                <span className="text-xs text-foreground/60">
                                    Tour and experiences
                                </span>
                            </div>
                        </Link>
                    </DropdownMenuItem>
                </div>

                {/* Bloc Down */}
                <div className="bg-primary/5 px-4 py-6 flex flex-col">
                    <h6 className="font-medium text-sm">
                        Documentation
                    </h6>

                    <span className="text-sm text-foreground/60">
                        Start integrating products and tools
                    </span>
                </div>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default Travelers
