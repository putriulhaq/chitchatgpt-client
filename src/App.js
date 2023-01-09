import React, { useState } from "react";
import './App.css'
import './style/translate.css'

function App() {
  
  const [message, setMessage] = useState('')
  const [response, setResponse] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    fetch('http://localhost:8000/translate',{ 
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

  return (
    <div className="App">
      <h1>You can say anything and i will translate</h1>
      <h3>Indonesia to English only</h3>
      <form onSubmit={handleSubmit}>
        <textarea
        className="input-translate"
          value={message}
          placeholder='Drop your sentence, i will translate'
          onKeyDown={handleEnter}
          onChange={(e) => setMessage(e.target.value)}></textarea>

        <div className="button">
          <button type="submit" className="submit">Submit</button>
          <input type="button" value="Reset Form" className="reset" onClick={resetForm} />
        </div>
      </form>

      <div className="answer">{response}</div>
    </div>
  );
}

export default App;