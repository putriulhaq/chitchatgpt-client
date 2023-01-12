import { React, useState } from "react";
import Navbar from '../component/Navbar'
import Footer from '../component/Footer'
// import Banner from '../component/Banner'
import { Container } from 'react-bootstrap'
import "../style/translate.css"

const Translate = () => {
    const [message, setMessage] = useState('')
    const [response, setResponse] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        fetch('https://chitchatgpt-server.vercel.app/api/translate', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ message })
        }).then((res) => res.json()).then((data) => setResponse(data.message))
    }

    const resetForm = () => {
        setMessage("")
        setResponse("")
    }

    const handleEnter = (event) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            event.stopPropagation();
            handleSubmit(event)
        }
    };

    return (<>
        <Navbar />
        <section class="text-gray-800 background-radial-gradient ">
            <div class="bg-[#11393C] px-6 py-12 md:px-12 lg:text-center h-screen mt-12">
                <div class="container mx-auto">
                    <div class="grid lg:grid-cols-1  flex items-center">
                        <div class="lg:mt-36">
                            <h1 class="text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight mb-12 text-[#E8E9E4]">
                                Are you ready <br /><span>for Translate?</span>
                            </h1>
                        </div>
                        <div>
                            <form onSubmit={handleSubmit}>
                                <textarea rows="4"
                                    class="block p-2.5 w-full text-xl text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="Write your thoughts here..."
                                    value={message}
                                    onKeyDown={handleEnter}
                                    onChange={(e) => setMessage(e.target.value)}></textarea>
                                <div class="grid grid-cols-2 gap-4 ">
                                    <button type="button" class="bg-[#EF8354] mt-3 text-white from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2">Submit</button>
                                    <button type="button"
                                        class="mt-3 text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                                        onClick={resetForm} >Reset</button>
                                </div>
                                <div rows="4" class="mt-3 block p-2.5 w-full text-xl text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                    {response}
                                </div>
                            </form>
                        </div>

                    </div>
                </div>
            </div>
        </section>
        <Footer />
    </>)
}

export default Translate