import { Link } from 'gatsby'
import React from 'react'
import Layout from '../components/Layout'

const notFoundPage = () => {
    return (
        <Layout>
            <main className="flex flex-col bg-gradient-to-b from-gray-900 to-cool-gray-900">
                <div className="px-4 sm:px-0 max-w-xl min-h-screen flex-grow mx-auto flex flex-col justify-center">
                    <div className="flex flex-col text-center">
                        <h1 className="text-mono text-9xl text-gray-100">
                            404
                        </h1>
                        <p className="text-5xl text-warm-gray-300 my-12 self-center">
                            Sorry - this page doesn't seem to exist.
                        </p>
                        <Link
                            to="/home"
                            className="w-max mx-auto border border-rose-400 duration-200 ease-in-out font-medium hover:bg-rose-400 hover:text-gray-800 px-4 py-2 rounded-md shadow-sm text-base text-white transition-all whitespace-nowrap"
                        >
                            Go home
                        </Link>
                    </div>
                </div>
            </main>
        </Layout>
    )
}

export default notFoundPage
