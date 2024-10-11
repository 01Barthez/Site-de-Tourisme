import React from 'react'
import { Button } from '../../ui/button'
import { ModeToggle } from "../ModeToogle";
import Logo from '../Logo';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

const Navbar1: React.FC = () => {
    const navigate = useNavigate();

    return (
        <nav className=''>
            <div className="relative container py-4 flex justify-between border-b border-gray-200">
                {/* Left-side */}
                <div className="flex items-center gap-8">
                    {/* Logo Parth */}
                    <Logo />

                    {/* NavLinks */}
                    <ul className="flex items-center gap-4">
                        <li>
                            <Link to={'/'}>
                                Link1
                            </Link>
                        </li>

                        <li>
                            <Link to={'/'}>
                                Link2
                            </Link>
                        </li>

                        <li>
                            <Link to={'/'}>
                                Link3
                            </Link>
                        </li>

                        <li>
                            <Link to={'/'}>
                                Link4
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Right-side */}
                <div className="flex itesm-center gap-3">
                    {/* Toggle Theme Button */}
                    <ModeToggle />

                    {/* Notification button */}
                    <Button
                        variant='outline'
                        size="icon"
                        className="relative border-none bg-transparent shadow-none rounded-full hover:bg-gray-100 dark:hover:bg-primary-foreground/10"
                        onClick={() => alert('hello')}
                    >
                        <div className="relative">

                            {/* Notification opened */}
                            <div className="absolute -top-1 -right-[2px] w-2 h-2 rounded-full bg-destructive"></div>
                        </div>
                    </Button>

                    <Button
                        className='rounded-full p-6 text-lg'
                        onClick={() => navigate('/login')}
                    >
                        Sign up
                    </Button>
                </div>
            </div>
        </nav>
    )
}

export default Navbar1