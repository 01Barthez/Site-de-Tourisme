import { AiOutlineHeart } from "react-icons/ai";
import { MdOutlineEventNote } from "react-icons/md";
import { RiLightbulbFlashLine } from "react-icons/ri";
import { BiHelpCircle } from "react-icons/bi";
import { HiOutlineLogout } from "react-icons/hi";
import { HiOutlineUser } from "react-icons/hi";
import React, { useState } from 'react'
import { Avatar, AvatarFallback, AvatarImage } from '../../../ui/avatar'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "../../../ui/dropdown-menu"
import { cn } from '../../../../lib/utils'
import { Link } from "react-router-dom";
import { useTheme } from "../../../../hooks/useTheme";
import { Switch } from "../../../ui/switch";

/**
 * Functional component for displaying a user avatar.
 * This component includes functionality for changing themes and logging out.
 * @returns JSX element for the UserAvatar component
 */
const UserAvatar: React.FC = () => {
    // gerer la deconexion
    const deconnexion = () => {
        console.log("deconnexion");
    }

    const { setTheme } = useTheme()
    const [isChecked, setIsChecked] = useState<boolean>(true)

    const changeTheme = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setTheme(isChecked ? "dark" : "light");
        setIsChecked((prev) => !prev);
    };
    console.log(changeTheme)

    return (
        <>
            <DropdownMenu>
                <DropdownMenuTrigger>
                    <Avatar className="rounded-full w-auto h-auto p-2 hover:bg-foreground/5 duration-300">
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

                <DropdownMenuContent className='mt-2 space-y-2 bg-card rounded-3xl min-w-72 mr-6'>
                    <DropdownMenuLabel className={cn('flex items-center gap-4', "mb-4")}>
                        <Avatar className="w-12 h-12 rounded-full">
                            <AvatarImage
                                src="/src/assets/userProfile.svg"
                                alt='profile Barthez'
                                className='w-full h-full object-cover'
                            />
                            <AvatarFallback className='w-full h-full'>
                                CN
                            </AvatarFallback>
                        </Avatar>

                        <div className="flex flex-col gap-1">
                            <h2 className="text-lg font-semibold">
                                Eden Smith
                            </h2>

                            <h6 className="text-xs text-foreground/60 font-light">
                                Los Angeles, CA
                            </h6>
                        </div>
                    </DropdownMenuLabel >

                    <DropdownMenuSeparator className='bg-foreground/20' />
                    <DropdownMenuGroup>
                        <DropdownMenuItem className="rounded-xl p-1">
                            <Link
                                to={'/account'}
                                className="flex gap-2.5 items-center p-1 w-full"
                            >
                                <HiOutlineUser className="text-2xl text-foreground/70" />

                                <span className="font-medium">
                                    My Account
                                </span>
                            </Link>
                        </DropdownMenuItem>

                        <DropdownMenuItem className="rounded-xl p-1">
                            <Link
                                to={'/author'}
                                className="flex gap-2.5 items-center p-1 w-full"
                            >
                                <MdOutlineEventNote className="text-2xl text-foreground/70" />
                                <span className="font-medium">
                                    My bookings
                                </span>
                            </Link>
                        </DropdownMenuItem>

                        <DropdownMenuItem className="rounded-xl p-1">
                            <Link
                                to={'/account-savelist'}
                                className="flex gap-2.5 items-center p-1 w-full"
                            >
                                <AiOutlineHeart className="text-2xl text-foreground/70" />
                                <span className="font-medium">
                                    Wishlist
                                </span>
                            </Link>
                        </DropdownMenuItem>
                    </DropdownMenuGroup>

                    <DropdownMenuSeparator className='bg-foreground/20' />
                    <DropdownMenuGroup className="rounded-xl p-1">
                        <DropdownMenuItem>
                            <div className="flex justify-between items-center p-1 w-full">
                                <div className="flex gap-2.5 items-center">
                                    <RiLightbulbFlashLine className="text-2xl text-foreground/70" />
                                    <span className="font-medium">
                                        Dark theme
                                    </span>
                                </div>

                                {/* toggle mode button  */}
                                <Switch onClick={changeTheme} />
                            </div>
                        </DropdownMenuItem>

                        <DropdownMenuItem className="rounded-xl p-1">
                            <Link
                                to={'/help'}
                                className="flex gap-2.5 items-center p-1 w-full"
                            >
                                <BiHelpCircle className="text-2xl text-foreground/70"
                                />
                                <span className="font-medium">
                                    Help
                                </span>
                            </Link>
                        </DropdownMenuItem>

                        <DropdownMenuItem className="rounded-xl p-1">
                            <button
                                className="flex gap-2.5 items-center p-1 w-full"
                                onClick={deconnexion}
                            >
                                <HiOutlineLogout className="text-2xl text-foreground/70 -rotate-180" />
                                <span className="font-medium">
                                    Log out
                                </span>
                            </button>
                        </DropdownMenuItem>
                    </DropdownMenuGroup>
                </DropdownMenuContent>
            </DropdownMenu>
        </>
    )
}

export default UserAvatar
