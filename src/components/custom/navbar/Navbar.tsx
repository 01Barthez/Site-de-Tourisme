//  This compoment is for the selected Navbar
//  We are going ti use a zustand store to manage which navbar will appear at the top of the selected home
import React from 'react'
import Navbar1 from './Navbar1'
import { useSetNavbar } from '../../../hooks/useSetNavbar'
import Navbar2 from './Navbar2';
import Navbar3 from './Navbar3';
import SmallUpNavbar from './SmallUpNavbar';

const Navbar: React.FC = () => {
    const { selectedNav } = useSetNavbar();

    return (
        <nav className='sticky top-0 left-0 w-screen backdrop-blur-md'>
            {/* NavBar for small screens */}
            <div className="md:hidden">
                <SmallUpNavbar />
            </div>

            {/* NavBar for large screens */}
            <div className="hidden md:block px-4  border-b border-gray-100">
                {
                    selectedNav === "nav1" ? (<Navbar1 />) : (selectedNav === "nav2" ? (<Navbar2 />) : (<Navbar3 />))
                }
            </div>
        </nav>
    )
}

export default Navbar