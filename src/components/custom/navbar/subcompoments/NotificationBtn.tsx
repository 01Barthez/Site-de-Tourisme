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
// import { NotificationUsers } from '../../../../global/mocks/NotificationsUsers'

/**
 * Functional component for a notification button using React.
 * It renders a dropdown menu with a trigger button that displays notifications.
 * @returns JSX element representing the notification button component.
 */
const NotificationBtn: React.FC = () => {
    const { data, loading, error } = useFetch('https://670fc6caa85f4164ef2bdfb1.mockapi.io/notification');
    const NotificationUsers = data;
    return (
        <DropdownMenu>
            <DropdownMenuTrigger>
                <Button
                    variant='outline'
                    size="icon"
                    className="relative w-auto h-auto p-3 text-xl border-none bg-transparent shadow-none rounded-full hover:bg-foreground/5 duration-200"
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

                {loading ? 'loading...' :
                    (error ? `An error occured ${error}` :
                        <ScrollArea className="h-64 w-fit">
                            {
                                NotificationUsers.map((notif) => (
                                    <DropdownMenuItem className='hover:bg-background/5 mb-2 rounded-lg duration-200'>
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
    )
}

export default NotificationBtn