import React from 'react'
import { HiOutlineBell } from 'react-icons/hi'
import UserAvatar from './subcompoments/UserAvatar'
import { Button } from '../../ui/button'

const Navbar2: React.FC = () => {
  return (
    <div>

      
      {/* Notification button */}
      <Button
        variant='outline'
        size="icon"
        className="relative text-2xl border-none bg-transparent shadow-none rounded-full hover:bg-gray-100 dark:hover:bg-primary-foreground/10"
        onClick={() => alert('hello')}
      >
        <div className="relative">
          <HiOutlineBell />

          {/* Notification opened */}
          <div className="absolute -top-1 -right-[2px] w-2 h-2 rounded-full bg-destructive"></div>
        </div>
      </Button>
      {/* USER ACCOUNT */}
      <UserAvatar />
    </div>
  )
}

export default Navbar2