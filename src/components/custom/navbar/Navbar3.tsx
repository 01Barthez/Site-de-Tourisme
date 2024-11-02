import React from 'react'
import Logo from '../Logo'
import ListProperty from './subcompoments/ListProperty'
// import NotificationBtn from './subcompoments/NotificationBtn'
import UserAvatar from './subcompoments/UserAvatar'
import CenterMenu from './subcompoments/CenterMenu'
import MenuBtn from './subcompoments/MenuBtn'

/**
 * Functional component for a Navbar with logo, notification button, user avatar, and menu button.
 * @returns JSX element representing the Navbar component.
 */
const Navbar3: React.FC = () => {
  return (
    <div className=" flex justify-between items-center">
      {/* Left-side */}
      <div className="flex items-center gap-8">
        {/* Logo Parth */}
        <Logo />
      </div>

      {/* Center part */}
      <div className="">
        <CenterMenu />
      </div>

      {/* Right parth */}
      <div className="flex items-center gap-1">
        {/* Toggle Buton ListPropertys */}
        <ListProperty />

        {/* Notification button */}
        {/* <NotificationBtn /> */}

        {/* USER ACCOUNT */}
          <UserAvatar />

        {/* Menu Btn */}
        <MenuBtn />
      </div>
    </div>
  )
}

export default Navbar3