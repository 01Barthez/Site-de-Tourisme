import React from 'react'
import UserAvatar from './subcompoments/UserAvatar'
import Logo from '../Logo'
import Travelers from './subcompoments/Travelers'
import { Separator } from '../../ui/separator'
import NotificationBtn from './subcompoments/NotificationBtn'
import Templates from './subcompoments/Templates'
import LanguageCurrent from './subcompoments/Language_Current'
import ListProperty from './subcompoments/ListProperty'

/**
 * Functional component for Navbar2.
 * @returns JSX element representing Navbar2 with Logo, Separator, NotificationBtn, and UserAvatar components.
 */
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
      <div className="flex items-center gap-3">
        {/* Toggle Buton Templates */}
        <Templates />

        {/* Toggle Buton Language and Current */}
        <LanguageCurrent />

        {/* Toggle Buton ListPropertys */}
        <ListProperty />

        <div className="flex items-center gap-1">
          {/* Notification button */}
          <NotificationBtn />

          {/* USER ACCOUNT */}
          <UserAvatar />
        </div>
      </div>
    </div>
  )
}

export default Navbar2