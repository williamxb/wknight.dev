import React from 'react'
import Layout from '../components/Layout'
import heroImage from '../images/hero-image.svg'

const homePage = () => {
    return (
        <Layout>
            <main className="flex flex-col bg-gradient-to-b from-gray-900 to-cool-gray-900">
                <div className="max-w-4xl min-h-screen flex-grow mx-auto flex flex-col justify-around">
                    <div className="sm:flex sm:flex-row-reverse sm:items-center">
                        <div className="sm:px-2">
                            <h1 className="px-4 pt-5 text-3xl text-left text-teal-500 sm:text-3xl">
                                Will Knight
                            </h1>
                            <p className="px-4 text-lg text-warm-gray-300 sm:mt-8">
                                Front-end Web Developer
                            </p>
                        </div>
                        <img
                            className="w-full max-w-lg mt-16 mx-auto sm:w-1/2"
                            src={heroImage}
                            alt="Gatsby and Tailwind CSS together"
                        />
                    </div>
                </div>
            </main>
        </Layout>
    )
}

export default homePage
