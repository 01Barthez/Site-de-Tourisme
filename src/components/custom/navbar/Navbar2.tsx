import React from 'react'
import { HiOutlineBell } from 'react-icons/hi'
import UserAvatar from './subcompoments/UserAvatar'
import { Button } from '../../ui/button'
import Logo from '../Logo'
import Travelers from './subcompoments/Travelers'
import { Separator } from '../../ui/separator'

const Navbar2: React.FC = () => {
  return (
    <div className='flex items-center justify-between'>
      {/* Left Part */}
      <div className="flex items-center gap-4">
        {/* Logo Img */}
        <Logo />

        {/* Separator bar */}
        <Separator orientation='vertical' />

        {/* Toggle Buton Travelers */}
        <Travelers />
      </div>


      {/* Right Part */}
      <div className="flex items-center gap-2">
        {/* Notification button */}
        <Button
          variant='outline'
          size="icon"
          className="relative w-auto h-auto p-3 text-xl border-none bg-transparent shadow-none rounded-full hover:bg-foreground/5 duration-200"
          onClick={() => alert('hello')}
        >
          <div className="relative">
            {/* Icon Bell */}
            <HiOutlineBell />

            {/* Notification opened */}
            <div className="absolute -top-1 -right-[2px] w-2 h-2 rounded-full bg-destructive"></div>
          </div>
        </Button>

        {/* USER ACCOUNT */}
        <UserAvatar />
      </div>
    </div>
  )
}

export default Navbar2