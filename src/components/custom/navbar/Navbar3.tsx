import React from 'react'
import Logo from '../Logo'

const Navbar3: React.FC = () => {
  return (
      <div className=" flex justify-between items-center">
        {/* Left-side */}
        <div className="flex items-center gap-8">
          {/* Logo Parth */}
          <Logo />
        </div>

        {/* Right parth */}
        <div className="">

        </div>
      </div>
  )
}

export default Navbar3