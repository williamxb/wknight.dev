import React from 'react'
import { Link } from 'gatsby'

const Header = () => {
    return (
        <header>
            <div className="bg-white shadow dark:bg-gray-800">
                <div className="container flex items-center justify-between p-6 mx-auto font-mono font-bold text-gray-600 dark:text-gray-300">
                    <Link
                        to="/"
                        className="text-2xl bg-rose-400 px-4 py-3 text-white"
                    >
                        WK
                    </Link>

                    <nav>
                        <Link
                            to="/"
                            className="border-b-2 hover:border-blue-500 mx-1.5 sm:mx-6"
                            activeClassName="text-blue-500 border-blue-500"
                        >
                            home
                        </Link>

                        <Link
                            to="/cv"
                            className="border-b-2 hover:border-blue-500 mx-1.5 sm:mx-6"
                            activeClassName="text-blue-500 border-blue-500"
                        >
                            cv
                        </Link>

                        <Link
                            to="/contact"
                            className="border-b-2 hover:border-blue-500 mx-1.5 sm:mx-6"
                            activeClassName="text-blue-500 border-blue-500"
                        >
                            contact
                        </Link>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Header
