import React from 'react'
import { Button } from '../../../ui/button'
import { HiOutlineBell } from 'react-icons/hi'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuTrigger
} from '../../../ui/dropdown-menu'
import { ScrollArea } from '../../../ui/scroll-area'
import CardNotification from '../../cards/CardNotification'
import { useFetch } from '../../../../hooks/useFetch'
import { INotifications } from "../../../../global/interface/interface";
import SkeletonNotificarions from "../../skeletons/SkeletonNotificarions";
import { Base_URL } from "../../../../api/test";
import ErrorNotification from '../../../../pages/errors/ErrorNotification'

/**
 * Functional component for a notification button using React.
 * It renders a dropdown menu with a trigger button that displays notifications.
 * @returns JSX element representing the notification button component.
 */
const NotificationBtn: React.FC = () => {
    const { data, loading, error } = useFetch<INotifications[]>(`${Base_URL}notification`);
    const NotificationUsers = data;
    console.log(NotificationUsers)

    return (
        <>
            <DropdownMenu>
                <DropdownMenuTrigger>
                    <Button
                        variant='outline'
                        size="icon"
                        className="relative w-auto h-auto p-3 text-xl duration-200 bg-transparent border-none rounded-full shadow-none hover:bg-foreground/5"
                    >
                        <div className="relative">
                            {/* Icon Bell */}
                            <HiOutlineBell className='text-2xl' />

                            {/* Notification opened */}
                            <div className="absolute -top-1 -right-[2px] w-2 h-2 rounded-full bg-blue-500"></div>
                        </div>
                    </Button>
                </DropdownMenuTrigger>

                <DropdownMenuContent className='mr-24 mt-2.5 space-y-4 rounded-2xl px-2.5 py-6 bg-card min-w-80'>
                    <DropdownMenuLabel className='text-xl font-semibold'>
                        Notifications
                    </DropdownMenuLabel>

                    {loading ? <SkeletonNotificarions /> :
                        (error ? <ErrorNotification error={error} /> :
                            <ScrollArea className="h-64 w-fit">
                                {NotificationUsers &&
                                    NotificationUsers.map((notif: INotifications) => (
                                        <DropdownMenuItem
                                            key={notif.id}
                                            className='mb-2 duration-200 rounded-lg hover:bg-background/5'
                                        >
                                            <CardNotification
                                                id={notif.id}
                                                url={`notifications/${notif.url}`}
                                                profile={notif.profile}
                                                name={notif.name}
                                                message={notif.message}
                                                time={notif.time}
                                            />
                                        </DropdownMenuItem>
                                    ))
                                }
                            </ScrollArea>
                        )
                    }
                </DropdownMenuContent>
            </DropdownMenu>
        </>
    )
}
export default NotificationBtn