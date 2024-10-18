import React, { useState } from 'react'
import Logo from '../Logo'
import { ModeToggle } from '../ModeToogle'
import { Button } from '../../ui/button'
import { BsSearch } from 'react-icons/bs'
import { Input } from '../../ui/input'
import { useNavigate } from 'react-router-dom'
import NavLinks1 from './subcompoments/NavLinks1'

/**
 * Functional component for Navbar1.
 * This component renders a navigation bar with a search bar that can be toggled to show/hide.
 * It also includes a button to navigate to the login page.
 * @returns JSX element representing the Navbar1 component.
 */
const Navbar1: React.FC = () => {
    const navigate = useNavigate();
    const [hiddenSearchBar, setHiddenSearchBar] = useState<boolean>(true);
    const [searchText, setsearchText] = useState<string>("");

    const handleVisibility = () => setHiddenSearchBar((prev) => !prev);

    const handleSearchText = (e: React.ChangeEvent<HTMLInputElement>) => {
        setsearchText(e.target.value)
    }

    const handleSubmitSearch = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(searchText);

        // Effectuer la recherche...


        // Reinitialiser l'input de recherche
        setsearchText("");
    }

    return (
        <div className="flex justify-between items-center w-full">
            {/* Left-side */}
            <div className="flex items-center gap-8">
                {/* Logo Parth */}
                <Logo />

                {/* NavLinks */}
               <NavLinks1/>
            </div>

            {/* Right-side */}
            <div className="flex items-center gap-2">
                {/* Theme Button & Search Button */}
                <div className="flex items-center">
                    {/* Toggle Theme Button */}
                    <ModeToggle />

                    {/* Search button and search bar */}
                    <div className="relative">
                        {/* Search Icon */}
                        <Button
                            variant={'outline'}
                            className='bg-transparent group text-xl border-none shadow-none h-auto w-auto p-3 rounded-full duration-200 hover:bg-foreground/5'
                            onClick={handleVisibility}
                        >
                            <BsSearch className="rotate-90 group-hover:rotate-[65deg] duration-500" />
                        </Button>

                        {/* Search bar */}
                        {
                            hiddenSearchBar ? '' :
                                <form
                                    className="flex items-center  absolute -bottom-16 border-4 border-primary/30 right-0 min-w-96 bg-card  overflow-hidden rounded-full px-2 py-1 "
                                    data-aos='zoom-in-up'
                                    data-aos-duration="300"
                                    onSubmit={() => handleSubmitSearch}
                                >
                                    {/* search Input */}
                                    <Input
                                        type='search'
                                        placeholder="Type and press enter..."
                                        required
                                        value={searchText}
                                        onChange={handleSearchText}
                                        className="w-full border-none shadow-none placeholder:text-sm text-base tracking-wide outline-none focus-visible:ring-0"
                                    />

                                    {/* Submit button */}
                                    <Button
                                        variant={'secondary'}
                                        size={'icon'}
                                        className="border-none shadow-none bg-transparent text-lg hover:bg-transparent"
                                        type='button'
                                    >
                                        <BsSearch />
                                    </Button>
                                </form>
                        }
                    </div>
                </div>

                {/* Sign up Button */}
                <Button
                    className='rounded-full p-6 text-base'
                    onClick={() => navigate('/login')}
                >
                    Sign up
                </Button>
            </div>
        </div>
    )
}

export default Navbar1