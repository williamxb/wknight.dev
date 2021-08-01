import React from 'react'
import Layout from '../components/Layout'

const contactPage = () => {
    return (
        <Layout>
            <div className="flex flex-col min-h-screen bg-gradient-to-b from-gray-900 to-cool-gray-900">
                <main className="max-w-4xl flex-grow mx-auto flex flex-col justify-around">
                    <div className="bg-white w-full">
                        <h1 className="text-4xl lg:text-5xl font-bold leading-tight py-48">
                            Let's talk!
                        </h1>
                    </div>
                </main>
            </div>
        </Layout>
    )
}

export default contactPage
