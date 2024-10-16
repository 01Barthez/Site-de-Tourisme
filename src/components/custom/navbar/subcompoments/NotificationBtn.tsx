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
import { NotificationUsers } from '../../../../global/mocks/NotificationsUsers'

const NotificationBtn: React.FC = () => {
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

                <ScrollArea className="h-64 w-fit">
                    {
                        NotificationUsers.map((notif) => (
                            <DropdownMenuItem className='mb-2 rounded-lg'>
                                <CardNotification
                                    id={notif.id}
                                    url={notif.url}
                                    profile={notif.profile}
                                    name={notif.name}
                                    message={notif.message}
                                    time={notif.time}
                                />
                            </DropdownMenuItem>
                        ))
                    }

                </ScrollArea>
            </DropdownMenuContent>
        </DropdownMenu>

    )
}

export default NotificationBtn