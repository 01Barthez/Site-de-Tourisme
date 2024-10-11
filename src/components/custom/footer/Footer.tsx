import React from 'react'
import Logo from '../Logo'
import { Link } from 'react-router-dom'
import FooterCol from './FooterCol'
import { FootersLinks, SocialLink } from '../../../global/mocks/footer-mocks'

const Footer: React.FC = () => {
  return (
    <footer className=' py-16 md:py-28 border-t border-t-gray-200'>
      <div className="container grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10">
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
                  className='text-foreground2 flex items-center gap-1 capitalize text-nowrap linkhover'
                >
                  <span className='text-2xl'>
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
        {/* <div className="flex"> */}
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
      {/* </div> */}
    </footer>
  )
}

export default Footer