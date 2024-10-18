import React from 'react'
import SEO from '../../components/custom/SEO'

const PageError: React.FC = () => {
    return (
        <>
            <SEO
                title="Page Not Found | Chisfis Projet"
                description="Access your account to manage bookings and preferences."
            />

            <div className='container flex items-center justify-center h-screen w-screen'>
                <h1 className="text-5xl md:text-6xl lg:text-7xl">
                    404 NotFound
                </h1>
            </div>
        </>
    )
}

export default PageError