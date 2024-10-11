import { AiOutlineDown } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";
import React, { useState } from 'react'
import { Button } from '../../ui/button'
import { ModeToggle } from "../ModeToogle";
import Logo from '../Logo';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { Input } from "../../ui/input";

const Navbar1: React.FC = () => {
    const navigate = useNavigate();
    const [hiddenSearchBar, setHiddenSearchBar] = useState<boolean>(true);
    const [searchText, setsearchText] = useState<string>("");

    const handleVisibility = () => setHiddenSearchBar((prev) => !prev);

    const handleSubmitSearch = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(searchText);
    }


    return (
        <nav className=''>
            <div className="relative container py-4 flex justify-between border-b border-gray-200">
                {/* Left-side */}
                <div className="flex items-center gap-8">
                    {/* Logo Parth */}
                    <Logo />

                    {/* NavLinks */}
                    <ul className="flex items-center gap-4">
                        <li className="flex items-center gap-1">
                            <span>
                                Link1
                            </span>
                            <AiOutlineDown />
                        </li>

                        <li className="flex items-center gap-1">
                            <span>
                                Link2
                            </span>
                            <AiOutlineDown />
                        </li>

                        <li className="flex items-center gap-1">
                            <span>
                                Link3
                            </span>
                            <AiOutlineDown />
                        </li>

                        <li className="flex items-center gap-1">
                            <span>
                                Link4
                            </span>
                            <AiOutlineDown />
                        </li>
                    </ul>
                </div>

                {/* Right-side */}
                <div className="flex itesm-center">
                    {/* Toggle Theme Button */}
                    <ModeToggle />

                    {/* Search button and search bar */}
                    <div className="relative">
                        {/* Search Icon */}
                        <Button
                            variant={'outline'}
                            className='group text-xl border-none shadow-none h-auto w-auto p-4 rounded-full duration-200 transition-all dark:hover:bg-primary-foreground/10'
                            onClick={handleVisibility}
                        >
                            <BsSearch className="rotate-90 group-hover:rotate-[65deg] duration-500" />
                        </Button>

                        {/* Search bar */}
                        {
                            hiddenSearchBar ? '' :
                                <form
                                    className="absolute -bottom-14 right-0 min-w-80"
                                    data-aos='zoom-in-up'
                                    data-aos-duration="300"
                                    onSubmit={() => handleSubmitSearch}
                                >
                                    <div className="flex items-center outline-primary/30 outline rounded-full">
                                        {/* search Input */}
                                        <Input
                                            type='search'
                                            placeholder="Type and press enter..."
                                            required
                                            value={searchText}
                                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => { setsearchText(e.target.value) }}
                                            className="w-full border-none shadow-none placeholder:text-sm text-lg tracking-wide outline-none focus-visible:ring-0"
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
                                    </div>
                                </form>
                        }
                    </div>

                    {/* Sign up Button */}
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