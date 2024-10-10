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
                    <Avatar className="rounded-full w-8 h-8">
                        <AvatarImage src="/src/assets/userProfile.svg" />
                        <AvatarFallback>CN</AvatarFallback>
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