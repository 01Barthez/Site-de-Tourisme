import React from 'react'
import { HiOutlineBell } from 'react-icons/hi'
import UserAvatar from './subcompoments/UserAvatar'

const Navbar2: React.FC = () => {
  return (
    <div>
      <HiOutlineBell />
      {/* USER ACCOUNT */}
      <UserAvatar />
    </div>
  )
}

export default Navbar2