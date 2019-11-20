import React from 'react';
import '../Join/Join.css';

const Input = ({ message, setMessage, sendMessage }) => (
    <form>
        <input className="input-message" type="text" value={message} onChange={(event) => setMessage(event.target.value)} onKeyPress={event => event.key === 'Enter' ? sendMessage(event) : null} />
        <div className="position-input-button">
            <button className="button-message" onClick={(event) => sendMessage(event)}>Send </button>
        </div>
    </form>

)

export default Input;