import React from 'react'
import Seo from './SEO'
import Header from './header'

const Layout = ({ children }) => {
    return (
        <>
            <Seo />

            <Header />

            {children}
            
            <footer className="py-2 text-center text-gray-600 text-xs">
                &copy; Will Knight 2021
            </footer>
        </>
    )
}

export default Layout
