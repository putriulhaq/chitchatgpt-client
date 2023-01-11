import { React, useState } from 'react'
import Navbar from '../component/Navbar'
import Footer from '../component/Footer'
import Banner from '../component/Banner'
import { Container } from 'react-bootstrap'
import "../style/translate.css"


const Motivate = () => {
    const [message, setMessage] = useState('')
    const [response, setResponse] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        fetch('https://chitchatgpt-server.vercel.app/api/motivate', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ message })
        }).then((res) => res.json()).then((data) => setResponse(data.message))
    }

    const resetForm = () => {
        setMessage('')
        setResponse('')
    }

    const handleEnter = (event) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            event.stopPropagation();
            handleSubmit(event)
        }
    };

    return (
        <>
            <Navbar />
            <div className='banner-area two'>
                <div className="d-table-cell">
                    <Container fluid>
                        <div className='bann-content'>
                            <h1 className="title-banner">Express your feelings, I'll give you motivation.</h1>
                        </div>
                    </Container>
                </div>
            </div>
            <Container>
                <h1></h1>
                <form onSubmit={handleSubmit}>
                    <textarea className="input-translate"
                        value={message}
                        placeholder='What are you feeling?'
                        onKeyDown={handleEnter}
                        onChange={(e) => setMessage(e.target.value)}></textarea>
                    <div className="button">
                        <button type="submit" className="submit">Submit</button>
                        <input type="button" value="Reset Form" className="reset" onClick={resetForm} />
                    </div>
                </form>
                <div className="answer">{response}</div>
            </Container>
            <Footer />
        </>
    )
}

export default Motivate;