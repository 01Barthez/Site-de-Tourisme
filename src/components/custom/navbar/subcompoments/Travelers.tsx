import React from 'react'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger
} from '../../../ui/dropdown-menu'
import { HiOutlineChevronDown } from "react-icons/hi";
import { Link } from 'react-router-dom';

const Travelers: React.FC = () => {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1">
                <span className='font-medium'>Travelers</span>
                <HiOutlineChevronDown className="duration-200 text-foreground/50" />
            </DropdownMenuTrigger>

            <DropdownMenuContent className='mt-5 space-y-4 rounded-2xl p-2.5 bg-card min-w-80'>
                {/* Bloc top */}
                <div className="">
                    <DropdownMenuItem className='bg-transparent hover:bg-foreground/5 rounded-lg'>
                        <Link
                            className="flex items-center gap-2.5"
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

                </div>

                {/* Bloc Down */}
                <div className="">

                </div>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default Travelers
