import React from 'react'

import ReactEmoji from 'react-emoji';

const Message = ({message: {user , text} , name}) => {
    let isSentByCurrentUser = false;

    const trimmedName = name.trim().toLowerCase();

    if(user === trimmedName){
        isSentByCurrentUser = true;
    }   

 return (
    isSentByCurrentUser
      ? (
        <div>
          <p >{trimmedName}</p>
            <p>{ReactEmoji.emojify(text)}</p>
        </div>
        )
        : (
            <div>
                <p>{user}</p>
                <p>{ReactEmoji.emojify(text)}</p>
            </div>
        )
  );
}

export default Message;