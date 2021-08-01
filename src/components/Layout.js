import React from 'react'
import Seo from './SEO'
import Header from './header'
import Footer from './footer'

const Layout = ({ children }) => {
    return (
        <>
            <Seo />

            <Header />

            {children}

            <Footer />
        </>
    )
}

export default Layout
