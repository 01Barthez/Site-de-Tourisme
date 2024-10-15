import React from 'react'
import UserAvatar from './subcompoments/UserAvatar'
import Logo from '../Logo'
import Travelers from './subcompoments/Travelers'
import { Separator } from '../../ui/separator'
import NotificationBtn from './subcompoments/NotificationBtn'

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
        <NotificationBtn />

        {/* USER ACCOUNT */}
        <UserAvatar />
      </div>
    </div>
  )
}

export default Navbar2