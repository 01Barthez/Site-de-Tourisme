import React from 'react'
import Logo from '../Logo'
import { Link } from 'react-router-dom'
import FooterCol from './FooterCol'
import { FootersLinks, SocialLink } from '../../../global/mocks/footer-mocks'

const Footer: React.FC = () => {
  return (
    <footer className='container'>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {/* Logo */}
        <div className=''>
          <Logo />
        </div>

        {/* Socials Links */}
        <div className="flex items-center gap-4">
          {
            SocialLink.map((link) => (
              <Link
                key={link.id}
                to={link.url}
                className=''
              >
                {link.icon}
              </Link>
            ))
          }
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