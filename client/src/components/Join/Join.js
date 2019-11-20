import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import './Join.css';


const Join = () => {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');

  return (
    <div className="joinOuterContainer">
      <div className="joinInnerContainer">
        <h1 className="heading">Just a Chat</h1>
        <div><input placeholder="User" className="JoinInput" type="text" onChange={(event) => setName(event.target.value)} /> </div>
        <p></p>
        <div className="input-position"><input placeholder="Room" className="JoinInput" type="text" onChange={(event) => setRoom(event.target.value)} /> </div>
        <Link onClick={event => (!name || !room) ? event.preventDefault() : null} to={`/chat?name=${name}&room=${room}`}>
          <p></p>
          <div className="button-position">
            <button className="button mt-20" type="submit"> Submit </button>
          </div>
        </Link>
      </div>
    </div >
  );
}

export default Join;