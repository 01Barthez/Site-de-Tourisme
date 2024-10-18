import React from 'react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '../../../ui/dropdown-menu'
import { HiOutlineChevronDown } from 'react-icons/hi'
import { Link } from 'react-router-dom'
import { Button } from '../../../ui/button'

/**
 * Functional component that renders a dropdown menu with various template options.
 * @returns JSX element representing the dropdown menu with template options.
 */
const Templates: React.FC = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex items-center gap-1">
        <span className='font-medium'>
          Templates
        </span>
        <HiOutlineChevronDown className="duration-200 text-foreground/50" />
      </DropdownMenuTrigger>

      <DropdownMenuContent className='p-0 mt-5 space-y-2 bg-card w-screen rounded-none'>
        <div className="px-3 py-10 flex items-start justify-between">
          <div className="flex gap-6">
            {/* First colonne */}
            <DropdownMenuItem className=' text-sm focus:bg-transparent flex flex-col gap-4 items-start'>
              <h4 className="font-medium">
                Home
              </h4>

              <ul className="flex flex-col gap-4">
                <li className="w-full">
                  <Link
                    to={'/'}
                    className="w-fit inline-block text-foreground/80 hover:text-foreground "
                  >
                    Online booking
                  </Link>
                </li>

                <li className="w-full">
                  <Link
                    to={'/home-2'}
                    className="w-fit inline-block text-foreground/80 hover:text-foreground space-x-2"
                  >
                    <span>
                      Real Estate
                    </span>

                    <span className="bg-red-500 dark:bg-red-700 text-destructive-foreground text-[10px] py-[2px] px-1 rounded-sm">
                      New!
                    </span>
                  </Link>
                </li>

                <li className="w-full">
                  <Link
                    to={'/home-3'}
                    className="w-fit inline-block text-foreground/80 hover:text-foreground space-x-2"
                  >
                    <span>
                      Home 3
                    </span>

                    <span className="bg-red-500 dark:bg-red-700 text-destructive-foreground text-[10px] py-[2px] px-1 rounded-sm">
                      New!
                    </span>
                  </Link>
                </li>
              </ul>
            </DropdownMenuItem>

            {/* Second colonne */}
            <DropdownMenuItem className=' text-sm focus:bg-transparent flex flex-col gap-4 items-start'>
              <h4 className="font-medium">
                Listing pages
              </h4>

              <ul className="flex flex-col gap-4">
                <li className="w-full">
                  <Link
                    to={'/listing-stay'}
                    className="w-fit inline-block text-foreground/80 hover:text-foreground "
                  >
                    Stay listings
                  </Link>
                </li>

                <li className="w-full">
                  <Link
                    to={'/listing-stay-map'}
                    className="w-fit inline-block text-foreground/80 hover:text-foreground "
                  >
                    Stay listings (map)
                  </Link>
                </li>

                <li className="w-full">
                  <Link
                    to={'/listing-stay-detail'}
                    className="w-fit inline-block text-foreground/80 hover:text-foreground "
                  >
                    Stay detail
                  </Link>
                </li>

                <li className="w-full">
                  <Link
                    to={'/listing-experiences'}
                    className="w-fit inline-block text-foreground/80 hover:text-foreground "
                  >
                    Experiences listings
                  </Link>
                </li>

                <li className="w-full">
                  <Link
                    to={'/listing-experiences-map'}
                    className="w-fit inline-block text-foreground/80 hover:text-foreground "
                  >
                    Experiences (map)
                  </Link>
                </li>

                <li className="w-full">
                  <Link
                    to={'/listing-experiences-detail'}
                    className="w-fit inline-block text-foreground/80 hover:text-foreground "
                  >
                    Experiences detail
                  </Link>
                </li>
              </ul>
            </DropdownMenuItem>

            {/* Thirt colonne */}
            <DropdownMenuItem className=' text-sm focus:bg-transparent flex flex-col gap-4 items-start'>
              <h4 className="font-medium">
                Listing pages
              </h4>

              <ul className="flex flex-col gap-4">
                <li className="w-full">
                  <Link
                    to={'/listing-car'}
                    className="w-fit inline-block text-foreground/80 hover:text-foreground "
                  >
                    Cars listings
                  </Link>
                </li>

                <li className="w-full">
                  <Link
                    to={'/listing-car-map'}
                    className="w-fit inline-block text-foreground/80 hover:text-foreground "
                  >
                    Cars listings (map)
                  </Link>
                </li>

                <li className="w-full">
                  <Link
                    to={'/listing-car-detail'}
                    className="w-fit inline-block text-foreground/80 hover:text-foreground "
                  >
                    Car detail
                  </Link>
                </li>

                <li className="w-full">
                  <Link
                    to={'/listing-real-estate'}
                    className="w-fit inline-block text-foreground/80 hover:text-foreground "
                  >
                    Real estate listings
                  </Link>
                </li>

                <li className="w-full">
                  <Link
                    to={'/listing-real-estate-map'}
                    className="w-fit inline-block text-foreground/80 hover:text-foreground "
                  >
                    Real estate (map)
                  </Link>
                </li>

                <li className="w-full">
                  <Link
                    to={'/listing-flights'}
                    className="w-fit inline-block text-foreground/80 hover:text-foreground "
                  >
                    Flights listings
                  </Link>
                </li>
              </ul>
            </DropdownMenuItem>

            {/* fourth colonne */}
            <DropdownMenuItem className=' text-sm focus:bg-transparent flex flex-col gap-4 items-start'>
              <h4 className="font-medium">
                Templates
              </h4>

              <ul className="flex flex-col gap-4">
                <li className="w-full">
                  <Link
                    to={'/add-listing/1'}
                    className="w-fit inline-block text-foreground/80 hover:text-foreground "
                  >
                    + Add listing
                  </Link>
                </li>

                <li className="w-full">
                  <Link
                    to={'/checkout'}
                    className="w-fit inline-block text-foreground/80 hover:text-foreground "
                  >
                    Checkout
                  </Link>
                </li>

                <li className="w-full">
                  <Link
                    to={'/pay-done'}
                    className="w-fit inline-block text-foreground/80 hover:text-foreground "
                  >
                    Pay done
                  </Link>
                </li>

                <li className="w-full">
                  <Link
                    to={'/author'}
                    className="w-fit inline-block text-foreground/80 hover:text-foreground "
                  >
                    Author page
                  </Link>
                </li>

                <li className="w-full">
                  <Link
                    to={'/account'}
                    className="w-fit inline-block text-foreground/80 hover:text-foreground "
                  >
                    Account page
                  </Link>
                </li>

                <li className="w-full">
                  <Link
                    to={'/subscription'}
                    className="w-fit inline-block text-foreground/80 hover:text-foreground "
                  >
                    Subscription
                  </Link>
                </li>
              </ul>
            </DropdownMenuItem>

            {/* five colonne */}
            <DropdownMenuItem className=' text-sm focus:bg-transparent flex flex-col gap-4 items-start'>
              <h4 className="font-medium">
                Other pages
              </h4>

              <ul className="flex flex-col gap-4">
                <li className="w-full">
                  <Link
                    to={'/add-listing/1'}
                    className="w-fit inline-block text-foreground/80 hover:text-foreground "
                  >
                    + Add listing
                  </Link>
                </li>

                <li className="w-full">
                  <Link
                    to={'/components.jsonblog'}
                    className="w-fit inline-block text-foreground/80 hover:text-foreground "
                  >
                    Blog page
                  </Link>
                </li>

                <li className="w-full">
                  <Link
                    to={'/blog/single'}
                    className="w-fit inline-block text-foreground/80 hover:text-foreground "
                  >
                    Blog single
                  </Link>
                </li>

                <li className="w-full">
                  <Link
                    to={'/about'}
                    className="w-fit inline-block text-foreground/80 hover:text-foreground "
                  >
                    About
                  </Link>
                </li>

                <li className="w-full">
                  <Link
                    to={'/contact'}
                    className="w-fit inline-block text-foreground/80 hover:text-foreground "
                  >
                    Contact us
                  </Link>
                </li>

                <li className="w-full">
                  <Link
                    to={'/login'}
                    className="w-fit inline-block text-foreground/80 hover:text-foreground "
                  >
                    Login
                  </Link>
                </li>

                <li className="w-full">
                  <Link
                    to={'/login'}
                    className="w-fit inline-block text-foreground/80 hover:text-foreground "
                  >
                    Signup
                  </Link>
                </li>
              </ul>
            </DropdownMenuItem>
          </div>

          {/* Last One */}
          <DropdownMenuItem className='relative w-full max-w-sm p-0 rounded-2xl h-56  overflow-hidden border focus:bg-transparent'>
            <Link
              to={'listing-stay'}
              className="w-full inline-block">
              <div className="flex flex-col gap-10 p-4 relative z-20 ">
                {/* Header part */}
                <div className="flex flex-col gap-3">
                  <span className="text-slate-700">
                    Collection
                  </span>

                  <h3 className="font-semibold text-xl text-slate-900 md:text-2xl">
                    The most popular <br />
                    in the world
                  </h3>
                </div>

                {/* Button Part */}
                <Button className="bg-background hover:bg-background/90 text-foreground font-medium w-fit p-6 rounded-full">
                  Show more
                </Button>
              </div>

              {/* Image layout */}
              <div className="w-full h-full absolute top-0 left-0 z-10">
                <img
                  src="/public/Image.svg"
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
            </Link>
          </DropdownMenuItem>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default Templates