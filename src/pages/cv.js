import React from 'react'
import Layout from '../components/Layout'
import { Link } from 'gatsby'
import cvFile from '../../public/CV.pdf'

function downloadCV() {
    window.open(cvFile)
}

const cvPage = () => {
    return (
        <Layout>
            <div className="flex flex-col min-h-screen bg-gray-200">
                <main className="max-w-4xl flex-grow mx-auto flex flex-col justify-around">
                    <div className="sm:px-2">
                        <h1 className="px-4 pt-5 text-4xl text-center font-light text-blue-500 md:text-6xl">
                            Thanks for your interest!
                        </h1>

                        <div className="flex justify-around">
                            <button type="submit" onClick={downloadCV}>
                                Download
                            </button>
                        </div>
                    </div>
                </main>
            </div>
        </Layout>
    )
}

export default cvPage
