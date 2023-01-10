import { React, useState } from 'react'


const Motivate = () => {
    const [message, setMessage] = useState('')
    const [response, setResponse] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        fetch('http://localhost:8000/api/motivate', {
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
        <><h1>Express your feelings, I'll give you motivation.</h1>
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
        </>
    )
}

export default Motivate;