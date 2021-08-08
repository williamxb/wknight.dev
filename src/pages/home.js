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
                            <h1 className="px-4 pt-5 text-2xl text-left text-teal-500 font-bold sm:text-3xl">
                                Gatsby Starter Tailwind CSS
                            </h1>
                            <p className="px-4 mt-8 text-lg text-gray-700 sm:mt-8">
                                Start your Gatsby and Tailwind CSS project
                                easily with this Gatsby Starter
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
