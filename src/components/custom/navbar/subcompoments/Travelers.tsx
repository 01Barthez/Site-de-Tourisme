import React from 'react'
import { 
    DropdownMenu, 
    DropdownMenuContent, 
    DropdownMenuItem, 
    DropdownMenuLabel, 
    DropdownMenuSeparator, 
    DropdownMenuTrigger 
} from '../../../ui/dropdown-menu'
import { HiOutlineChevronDown } from "react-icons/hi"; 

const Travelers: React.FC = () => {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1">
                <span className='font-medium'>Travelers</span>
                <HiOutlineChevronDown className="duration-200 text-foreground/50"/>
            </DropdownMenuTrigger>

            <DropdownMenuContent>
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>Billing</DropdownMenuItem>
                <DropdownMenuItem>Team</DropdownMenuItem>
                <DropdownMenuItem>Subscription</DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default Travelers
