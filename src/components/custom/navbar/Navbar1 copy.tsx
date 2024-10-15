import Logo from '../Logo';
import React, { useState } from 'react'
import { FiChevronDown } from "react-icons/fi";
import { BsSearch } from "react-icons/bs";
import { Button } from '../../ui/button'
import { ModeToggle } from "../ModeToogle";
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { Input } from "../../ui/input";

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

    }



    return (
        <div className="flex justify-between items-center w-full">
            {/* Left-side */}
            <div className="flex items-center gap-8">
                {/* Logo Parth */}
                <Logo />

                {/* NavLinks */}
                <ul className="flex items-center gap-0">
                    {/* Link 1 */}
                    <li className="group relative">
                        <span className="text-nowrap group cursor-pointer flex items-center gap-1 px-4 py-2 hover:bg-gray-200 rounded-full">
                            <span>
                                Home
                            </span>
                            <FiChevronDown className="group-hover:translate-y-[2px] duration-300 text-xl text-gray-400 group-hover:text-gray-500" />
                        </span>

                        <ul className="opacity-0 group-hover:opacity-100 flex translate-y-6 group-hover:translate-y-0 duration-300 transition-all absolute min-w-60 top-[3.9rem] border bg-card flex-col px-2 py-6 gap-2 shadow-lg rounded">
                            <li className="w-full">
                                <Link
                                    to={'/'}
                                    className="w-full inline-block hover:bg-gray-100 text-foreground2 hover:text-foreground p-2 px-4 text-sm rounded-md"
                                >
                                    Online booking
                                </Link>
                            </li>

                            <li className="w-full">
                                <Link
                                    to={'/home-2'}
                                    className="w-full inline-block hover:bg-gray-100 text-foreground2 hover:text-foreground p-2 px-4 text-sm rounded-md space-x-2"
                                >
                                    <span>
                                        Real Estate
                                    </span>

                                    <span className="bg-red-500 text-destructive-foreground text-[10px] py-[2px] px-1 rounded-sm">
                                        New!
                                    </span>
                                </Link>
                            </li>

                            <li className="w-full">
                                <Link
                                    to={'/home-3'}
                                    className="w-full inline-block hover:bg-gray-100 text-foreground2 hover:text-foreground p-2 px-4 text-sm rounded-md space-x-2"
                                >
                                    <span>
                                        Home 3
                                    </span>

                                    <span className="bg-red-500 text-destructive-foreground text-[10px] py-[2px] px-1 rounded-sm">
                                        New!
                                    </span>
                                </Link>
                            </li>
                        </ul>
                    </li>

                    {/* Link 2 */}
                    <li className="group relative">
                        <span className="text-nowrap group cursor-pointer flex items-center gap-1 px-4 py-2 hover:bg-gray-200 rounded-full">
                            <span>
                                Five columns
                            </span>
                            <FiChevronDown className="group-hover:translate-y-[2px] duration-300 text-xl text-gray-400 group-hover:text-gray-500" />
                        </span>

                        <ul className="opacity-0 group-hover:opacity-100 duration-300 transition-all absolute min-w-80 top-[3.9rem] -left-24 border bg-card px-2 py-6 gap-2 shadow-lg rounded grid grid-cols-5">
                            <li className="w-full">
                                <div className="flex flex-col gap-2">
                                    {/* Picture */}
                                    <div className="">
                                        <img src="/public/linkImage1.svg" alt="" className="w-full h-full object-cover" />
                                    </div>

                                    {/* Name */}
                                    <h6 className="font-medium">
                                        Company
                                    </h6>

                                    {/* Links */}
                                    <ul className="flex flex-col gap-2 text-foreground2 text-sm">
                                        <Link to='/'>
                                            Katz
                                        </Link>

                                        <Link to='/'>
                                            Livefish
                                        </Link>

                                        <Link to='/'>
                                            Digitube
                                        </Link>

                                        <Link to='/'>
                                            Midel
                                        </Link>

                                        <Link to='/'>
                                            Rhyloo
                                        </Link>

                                        <Link to='/'>
                                            Innojam
                                        </Link>
                                    </ul>
                                </div>
                            </li>

                            <li className="w-full">
                                <Link
                                    to={'/home-2'}
                                    className="w-full inline-block hover:bg-gray-100 text-foreground2 hover:text-foreground p-2 px-4 text-sm rounded-md space-x-2"
                                >
                                    <span>
                                        Real Estate
                                    </span>

                                    <span className="bg-red-500 text-destructive-foreground text-[10px] py-[2px] px-1 rounded-sm">
                                        New!
                                    </span>
                                </Link>
                            </li>

                            <li className="w-full">
                                <Link
                                    to={'/home-3'}
                                    className="w-full inline-block hover:bg-gray-100 text-foreground2 hover:text-foreground p-2 px-4 text-sm rounded-md space-x-2"
                                >
                                    <span>
                                        Home 3
                                    </span>

                                    <span className="bg-red-500 text-destructive-foreground text-[10px] py-[2px] px-1 rounded-sm">
                                        New!
                                    </span>
                                </Link>
                            </li>
                        </ul>
                    </li>

                    {/* Link 3 */}
                    <li className="group relative">
                        <Link to={'/listing-stay'} className="text-nowrap group cursor-pointer flex items-center gap-1 px-4 py-2 hover:bg-gray-200 rounded-full">
                            <span>
                                Listing page
                            </span>
                            <FiChevronDown className="group-hover:translate-y-[2px] duration-300 text-xl text-gray-400 group-hover:text-gray-500" />
                        </Link>

                        <ul className="opacity-0 group-hover:opacity-100 flex translate-y-6 group-hover:translate-y-0 duration-300 transition-all absolute min-w-60 top-[3.9rem] border bg-card flex-col px-2 py-6 gap-2 shadow-lg rounded">
                            <li className="w-full relative group">
                                <Link
                                    to={'/listing-stay'}
                                    className="relative group w-full hover:bg-gray-100 text-foreground2 hover:text-foreground p-2 px-4 text-sm rounded-md flex items-center gap-1"
                                >
                                    <span> Stay listings </span>
                                    <FiChevronDown className="group-hover:translate-y-[2px] duration-300 text-xl text-gray-400 group-hover:text-gray-500" />

                                    <ul className="absolute min-w-60 top-0 left-60 hidden group-hover:flex translate-y-6 group-hover:translate-y-0 duration-300 transition-all border bg-card flex-col px-2 py-6 gap-2 shadow-lg rounded">
                                        <li className="w-full">
                                            <Link
                                                to={'/listing-stay'}
                                                className="w-full inline-block hover:bg-gray-100 text-foreground2 hover:text-foreground p-2 px-4 text-sm rounded-md"
                                            >
                                                Stay Page
                                            </Link>
                                        </li>

                                        <li className="w-full">
                                            <Link
                                                to={'/listing-stay-map'}
                                                className="w-full inline-block hover:bg-gray-100 text-foreground2 hover:text-foreground p-2 px-4 text-sm rounded-md"
                                            >
                                                Stay Page (map)
                                            </Link>
                                        </li>

                                        <li className="w-full">
                                            <Link
                                                to={'/listing-stay-detail'}
                                                className="w-full inline-block hover:bg-gray-100 text-foreground2 hover:text-foreground p-2 px-4 text-sm rounded-md"
                                            >
                                                Stay Detail
                                            </Link>
                                        </li>
                                    </ul>
                                </Link>
                            </li>

                            <li className="w-full relative group">
                                <Link
                                    to={'/listing-experiences'}
                                    className="relative group w-full hover:bg-gray-100 text-foreground2 hover:text-foreground p-2 px-4 text-sm rounded-md flex items-center gap-1"
                                >
                                    <span> Experiences Listings </span>
                                    <FiChevronDown className="group-hover:translate-y-[2px] duration-300 text-xl text-gray-400 group-hover:text-gray-500" />

                                    <ul className="absolute min-w-60 top-0 left-60 hidden group-hover:flex translate-y-6 group-hover:translate-y-0 duration-300 transition-all border bg-card flex-col px-2 py-6 gap-2 shadow-lg rounded">
                                        <li className="w-full">
                                            <Link
                                                to={'/listing-experiences'}
                                                className="w-full inline-block hover:bg-gray-100 text-foreground2 hover:text-foreground p-2 px-4 text-sm rounded-md"
                                            >
                                                Experiences Page
                                            </Link>
                                        </li>

                                        <li className="w-full">
                                            <Link
                                                to={'/listing-experiences-map'}
                                                className="w-full inline-block hover:bg-gray-100 text-foreground2 hover:text-foreground p-2 px-4 text-sm rounded-md"
                                            >
                                                Experiences Page (map)
                                            </Link>
                                        </li>

                                        <li className="w-full">
                                            <Link
                                                to={'/listing-experiences-detail'}
                                                className="w-full inline-block hover:bg-gray-100 text-foreground2 hover:text-foreground p-2 px-4 text-sm rounded-md"
                                            >
                                                Experiences Detail
                                            </Link>
                                        </li>
                                    </ul>
                                </Link>
                            </li>

                            <li className="w-full relative group">
                                <Link
                                    to={'/listing-car'}
                                    className="relative group w-full hover:bg-gray-100 text-foreground2 hover:text-foreground p-2 px-4 text-sm rounded-md flex items-center gap-1"
                                >
                                    <span> Cars listings </span>
                                    <FiChevronDown className="group-hover:translate-y-[2px] duration-300 text-xl text-gray-400 group-hover:text-gray-500" />

                                    <ul className="absolute min-w-60 top-0 left-60 hidden group-hover:flex translate-y-6 group-hover:translate-y-0 duration-300 transition-all border bg-card flex-col px-2 py-6 gap-2 shadow-lg rounded">
                                        <li className="w-full">
                                            <Link
                                                to={'/listing-car'}
                                                className="w-full inline-block hover:bg-gray-100 text-foreground2 hover:text-foreground p-2 px-4 text-sm rounded-md"
                                            >
                                                Cars Pages
                                            </Link>
                                        </li>

                                        <li className="w-full">
                                            <Link
                                                to={'/listing-car-map'}
                                                className="w-full inline-block hover:bg-gray-100 text-foreground2 hover:text-foreground p-2 px-4 text-sm rounded-md"
                                            >
                                                Cars Pages (map)
                                            </Link>
                                        </li>

                                        <li className="w-full">
                                            <Link
                                                to={'/listing-car-detail'}
                                                className="w-full inline-block hover:bg-gray-100 text-foreground2 hover:text-foreground p-2 px-4 text-sm rounded-md"
                                            >
                                                Cars Details
                                            </Link>
                                        </li>
                                    </ul>
                                </Link>
                            </li>

                            <li className="w-full relative group">
                                <Link
                                    to={'/listing-real-estate'}
                                    className="relative group w-full hover:bg-gray-100 text-foreground2 hover:text-foreground p-2 px-4 text-sm rounded-md flex items-center gap-1"
                                >
                                    <span> Real Estate Listings </span>
                                    <FiChevronDown className="group-hover:translate-y-[2px] duration-300 text-xl text-gray-400 group-hover:text-gray-500" />

                                    <ul className="absolute min-w-60 top-0 left-60 hidden group-hover:flex translate-y-6 group-hover:translate-y-0 duration-300 transition-all border bg-card flex-col px-2 py-6 gap-2 shadow-lg rounded">
                                        <li className="w-full">
                                            <Link
                                                to={'/listing-real-estate'}
                                                className="w-full inline-block hover:bg-gray-100 text-foreground2 hover:text-foreground p-2 px-4 text-sm rounded-md"
                                            >
                                                Real Estate Listings
                                            </Link>
                                        </li>

                                        <li className="w-full">
                                            <Link
                                                to={'/listing-real-estate-map'}
                                                className="w-full inline-block hover:bg-gray-100 text-foreground2 hover:text-foreground p-2 px-4 text-sm rounded-md"
                                            >
                                                Real Estate Maps
                                            </Link>
                                        </li>
                                    </ul>
                                </Link>
                            </li>

                            <li className="w-full">
                                <Link
                                    to={'/listing-flights'}
                                    className="w-full inline-block hover:bg-gray-100 text-foreground2 hover:text-foreground p-2 px-4 text-sm rounded-md"
                                >
                                    Account page
                                </Link>
                            </li>
                        </ul>
                    </li>

                    {/* Link 4 */}
                    <li className="group relative">
                        <Link to={'/author'} className="text-nowrap group cursor-pointer flex items-center gap-1 px-4 py-2 hover:bg-gray-200 rounded-full">
                            <span>
                                Templates
                            </span>
                            <FiChevronDown className="group-hover:translate-y-[2px] duration-300 text-xl text-gray-400 group-hover:text-gray-500" />
                        </Link>

                        <ul className="opacity-0 group-hover:opacity-100 flex translate-y-6 group-hover:translate-y-0 duration-300 transition-all absolute min-w-60 top-[3.9rem] border bg-card flex-col px-2 py-6 gap-2 shadow-lg rounded">
                            <li className="w-full relative group">
                                <Link
                                    to={'/add-listing/1'}
                                    className="relative group w-full hover:bg-gray-100 text-foreground2 hover:text-foreground p-2 px-4 text-sm rounded-md flex items-center gap-1"
                                >
                                    <span> + Add listing </span>
                                    <FiChevronDown className="group-hover:translate-y-[2px] duration-300 text-xl text-gray-400 group-hover:text-gray-500" />

                                    <ul className="absolute min-w-60 top-0 left-60 hidden group-hover:flex translate-y-6 group-hover:translate-y-0 duration-300 transition-all border bg-card flex-col px-2 py-6 gap-2 shadow-lg rounded">
                                        <li className="w-full">
                                            <Link
                                                to={'/add-listing/1'}
                                                className="w-full inline-block hover:bg-gray-100 text-foreground2 hover:text-foreground p-2 px-4 text-sm rounded-md"
                                            >
                                                Add listing 1
                                            </Link>
                                        </li>

                                        <li className="w-full">
                                            <Link
                                                to={'/add-listing/2'}
                                                className="w-full inline-block hover:bg-gray-100 text-foreground2 hover:text-foreground p-2 px-4 text-sm rounded-md"
                                            >
                                                Add listing 2
                                            </Link>
                                        </li>

                                        <li className="w-full">
                                            <Link
                                                to={'/add-listing/2'}
                                                className="w-full inline-block hover:bg-gray-100 text-foreground2 hover:text-foreground p-2 px-4 text-sm rounded-md"
                                            >
                                                Add listing 3
                                            </Link>
                                        </li>

                                        <li className="w-full">
                                            <Link
                                                to={'/add-listing/2'}
                                                className="w-full inline-block hover:bg-gray-100 text-foreground2 hover:text-foreground p-2 px-4 text-sm rounded-md"
                                            >
                                                Add listing 4
                                            </Link>
                                        </li>

                                        <li className="w-full">
                                            <Link
                                                to={'/add-listing/2'}
                                                className="w-full inline-block hover:bg-gray-100 text-foreground2 hover:text-foreground p-2 px-4 text-sm rounded-md"
                                            >
                                                Add listing 5
                                            </Link>
                                        </li>

                                        <li className="w-full">
                                            <Link
                                                to={'/add-listing/2'}
                                                className="w-full inline-block hover:bg-gray-100 text-foreground2 hover:text-foreground p-2 px-4 text-sm rounded-md"
                                            >
                                                Add listing 6
                                            </Link>
                                        </li>

                                        <li className="w-full">
                                            <Link
                                                to={'/add-listing/2'}
                                                className="w-full inline-block hover:bg-gray-100 text-foreground2 hover:text-foreground p-2 px-4 text-sm rounded-md"
                                            >
                                                Add listing 7
                                            </Link>
                                        </li>

                                        <li className="w-full">
                                            <Link
                                                to={'/add-listing/2'}
                                                className="w-full inline-block hover:bg-gray-100 text-foreground2 hover:text-foreground p-2 px-4 text-sm rounded-md"
                                            >
                                                Add listing 8
                                            </Link>
                                        </li>

                                        <li className="w-full">
                                            <Link
                                                to={'/add-listing/2'}
                                                className="w-full inline-block hover:bg-gray-100 text-foreground2 hover:text-foreground p-2 px-4 text-sm rounded-md"
                                            >
                                                Add listing 9
                                            </Link>
                                        </li>

                                        <li className="w-full">
                                            <Link
                                                to={'/add-listing/2'}
                                                className="w-full inline-block hover:bg-gray-100 text-foreground2 hover:text-foreground p-2 px-4 text-sm rounded-md"
                                            >
                                                Add listing 10
                                            </Link>
                                        </li>
                                    </ul>
                                </Link>
                            </li>

                            <li className="w-full">
                                <Link
                                    to={'/check-out'}
                                    className="w-full inline-block hover:bg-gray-100 text-foreground2 hover:text-foreground p-2 px-4 text-sm rounded-md"
                                >
                                    Checkout
                                </Link>
                            </li>

                            <li className="w-full">
                                <Link
                                    to={'/pay-done'}
                                    className="w-full inline-block hover:bg-gray-100 text-foreground2 hover:text-foreground p-2 px-4 text-sm rounded-md"
                                >
                                    Pay done
                                </Link>
                            </li>

                            <li className="w-full">
                                <Link
                                    to={'/author'}
                                    className="w-full inline-block hover:bg-gray-100 text-foreground2 hover:text-foreground p-2 px-4 text-sm rounded-md"
                                >
                                    Author page
                                </Link>
                            </li>

                            <li className="w-full">
                                <Link
                                    to={'/account'}
                                    className="w-full inline-block hover:bg-gray-100 text-foreground2 hover:text-foreground p-2 px-4 text-sm rounded-md"
                                >
                                    Account page
                                </Link>
                            </li>

                            <li className="w-full">
                                <Link
                                    to={'/subscription'}
                                    className="w-full inline-block hover:bg-gray-100 text-foreground2 hover:text-foreground p-2 px-4 text-sm rounded-md"
                                >
                                    Subscription
                                </Link>
                            </li>
                        </ul>
                    </li>

                    {/* Link 5 */}
                    <li className="group relative">
                        <Link to={'/blog'} className="text-nowrap group cursor-pointer flex items-center gap-1 px-4 py-2 hover:bg-gray-200 rounded-full">
                            <span>
                                Other pages
                            </span>
                            <FiChevronDown className="group-hover:translate-y-[2px] duration-300 text-xl text-gray-400 group-hover:text-gray-500" />
                        </Link>

                        <ul className="opacity-0 group-hover:opacity-100 flex translate-y-6 group-hover:translate-y-0 duration-300 transition-all absolute min-w-60 top-[3.9rem] border bg-card flex-col px-2 py-6 gap-2 shadow-lg rounded">
                            <li className="w-full">
                                <Link
                                    to={'/add-listing/1'}
                                    className="w-full inline-block hover:bg-gray-100 text-foreground2 hover:text-foreground p-2 px-4 text-sm rounded-md"
                                >
                                    + Add listing
                                </Link>
                            </li>

                            <li className="w-full">
                                <Link
                                    to={'/blog'}
                                    className="w-full inline-block hover:bg-gray-100 text-foreground2 hover:text-foreground p-2 px-4 text-sm rounded-md"
                                >
                                    Blog page
                                </Link>
                            </li>

                            <li className="w-full">
                                <Link
                                    to={'/blog/single'}
                                    className="w-full inline-block hover:bg-gray-100 text-foreground2 hover:text-foreground p-2 px-4 text-sm rounded-md"
                                >
                                    Blog simple
                                </Link>
                            </li>

                            <li className="w-full">
                                <Link
                                    to={'/about'}
                                    className="w-full inline-block hover:bg-gray-100 text-foreground2 hover:text-foreground p-2 px-4 text-sm rounded-md"
                                >
                                    About
                                </Link>
                            </li>

                            <li className="w-full">
                                <Link
                                    to={'/contact'}
                                    className="w-full inline-block hover:bg-gray-100 text-foreground2 hover:text-foreground p-2 px-4 text-sm rounded-md"
                                >
                                    Contact us
                                </Link>
                            </li>

                            <li className="w-full">
                                <Link
                                    to={'/login'}
                                    className="w-full inline-block hover:bg-gray-100 text-foreground2 hover:text-foreground p-2 px-4 text-sm rounded-md"
                                >
                                    Login
                                </Link>
                            </li>

                            <li className="w-full">
                                <Link
                                    to={'/signup'}
                                    className="w-full inline-block hover:bg-gray-100 text-foreground2 hover:text-foreground p-2 px-4 text-sm rounded-md"
                                >
                                    Signup
                                </Link>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>

            {/* Right-side */}
            <div className="flex itesm-center gap-1">
                {/* Toggle Theme Button */}
                <ModeToggle />

                {/* Search button and search bar */}
                <div className="relative">
                    {/* Search Icon */}
                    <Button
                        variant={'outline'}
                        className='bg-transparent group text-xl border-none shadow-none h-auto w-auto p-4 rounded-full duration-200 transition-all dark:hover:bg-primary-foreground/10'
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