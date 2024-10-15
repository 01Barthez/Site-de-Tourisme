"use client"

import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from '../../../ui/avatar'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "../../../ui/dropdown-menu"

const UserAvatar: React.FC = () => {
    return (
        <>
            <DropdownMenu>
                <DropdownMenuTrigger>
                    <Avatar className="rounded-full w-auto h-auto p-1 hover:bg-foreground/5 duration-300">
                        <AvatarImage
                            src="/src/assets/userProfile.svg"
                            alt='profile Barthez'
                            className='w-9 h-9 object-cover'
                        />
                        <AvatarFallback className='w-9 h-9'>
                            CN
                        </AvatarFallback>
                    </Avatar>

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
        </>
    )
}

export default UserAvatar