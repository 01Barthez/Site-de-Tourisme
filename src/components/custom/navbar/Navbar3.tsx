import React from 'react'
import Logo from '../Logo'

const Navbar3: React.FC = () => {
  return (
    <nav className='w-full'>
      <div className="relative px-4 py-4 flex justify-between items-center border-b border-gray-100">
        {/* Left-side */}
        <div className="flex items-center gap-8">
          {/* Logo Parth */}
          <Logo />
        </div>

        {/* Right parth */}
        <div className="">

        </div>
      </div>
    </nav>
  )
}

export default Navbar3