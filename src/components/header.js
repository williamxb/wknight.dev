import React from 'react'

const Header = () => {
    return (
        <header>
            <div className="bg-white shadow dark:bg-gray-800">
                <div className="container flex items-center justify-between p-6 mx-auto font-mono font-bold text-gray-600 dark:text-gray-300">
                    <a href="/" class="text-2xl">
                        <h1 class="bg-rose-400 px-4 py-3 text-white">WK</h1>
                    </a>

                    <nav>
                        <a
                            href="/"
                            className="text-gray-800 dark:text-gray-200 border-b-2 border-blue-500 mx-1.5 sm:mx-6"
                        >
                            home
                        </a>

                        <a
                            href="/"
                            className="border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6"
                        >
                            cv
                        </a>

                        <a
                            href="/"
                            className="border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6"
                        >
                            contact
                        </a>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Header
