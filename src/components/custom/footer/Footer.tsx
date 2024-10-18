import React from 'react'
import Logo from '../Logo'
import { Link } from 'react-router-dom'
import FooterCol from './FooterCol'
import { FootersLinks, SocialLink } from '../../../global/mocks/footer-mocks'

/**
 * Functional component for the footer section of a React application.
 * @returns JSX element representing the footer section with various links and content.
 */
const Footer: React.FC = () => {
  return (
    <footer className='w-screen overflow-hidden py-16 md:py-28 border-t border-t-foreground/20 bg-background text-foreground'>
      <div
        data-aos=""
        className="container grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10"
      >
        <div className='flex flex-row md:flex-col gap-4 col-span-2 md:col-span-1 justify-between'>
          {/* Logo */}
          <Logo />

          {/* Socials Links */}
          <div className="justify-self-start flex items-start gap-4 md:flex-col">
            {
              SocialLink.map((link) => (
                <Link
                  key={link.id}
                  to={link.url}
                  className='text-foreground/80 text-sm flex items-center gap-1 capitalize text-nowrap linkhover'
                >
                  <span className='text-lg'>
                    {link.icon}
                  </span>

                  <span className='hidden md:inline-block'>
                    {link.name}
                  </span>
                </Link>
              ))
            }
          </div>
        </div>


        {/* Links */}
        {
          FootersLinks.map((Col) => (
            <FooterCol
              key={Col.id}
              title={Col.title}
              links={Col.links}
            />
          ))
        }
      </div>
    </footer>
  )
}

export default Footer