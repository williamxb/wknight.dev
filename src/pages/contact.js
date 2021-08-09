import React from 'react'
import Layout from '../components/Layout'

const contactPage = () => {
    return (
        <Layout>
            <div className="flex min-h-screen bg-cool-gray-900 justify-center">
                <main className="my-auto mx-auto flex-grow flex flex-col justify-around max-w-4xl bg-gray-200 p-16 rounded">
                    <h1 className="mb-16 font-mono text-4xl lg:text-5xl text-teal-600 font-bold self-center">
                        Let's talk!
                    </h1>

                    <form
                        name="Contact Form"
                        data-netlify="true"
                        data-netlify-recaptcha="true"
                        data-netlify-honeypot="bot-field"
                        method="POST"
                        id="form"
                    >
                        <input name="bot-field" className="hidden"></input>

                        <div class="mb-4">
                            <label
                                htmlFor="name"
                                class="block mb-2 text-sm text-gray-600 dark:text-gray-400"
                            >
                                Full Name
                            </label>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                placeholder="John Doe"
                                required=""
                                class="w-full px-3 py-2 bg-white placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
                            ></input>
                        </div>

                        <div class="mb-4">
                            <label
                                htmlFor="email"
                                class="block mb-2 text-sm text-gray-600 dark:text-gray-400"
                            >
                                Email Address
                            </label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                placeholder="you@company.com"
                                required=""
                                class="w-full px-3 py-2 bg-white placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
                            ></input>
                        </div>

                        <div class="mb-4">
                            <label
                                htmlFor="message"
                                class="block mb-2 text-sm text-gray-600 dark:text-gray-400"
                            >
                                Your Message
                            </label>

                            <textarea
                                rows="4"
                                name="message"
                                id="message"
                                placeholder="Your Message"
                                class="w-full h-28 px-3 py-2 bg-white placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
                                required=""
                            ></textarea>
                        </div>
                        <div class="mb-3">
                            <button
                                type="submit"
                                class="w-full px-3 py-4 text-white bg-indigo-500 rounded-md focus:bg-indigo-600 focus:outline-none"
                            >
                                Send Message
                            </button>
                        </div>
                        <p
                            class="text-xs text-center text-gray-400"
                            id="result"
                        ></p>
                    </form>
                </main>
            </div>
        </Layout>
    )
}

export default contactPage
