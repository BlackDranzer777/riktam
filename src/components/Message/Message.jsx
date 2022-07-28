import React from 'react';
import './Message.css';

export const Message = ({own, message, img}) => {
  return (
    <div className={"message" + (own ? " own" : "")}>
        <div className={"messageTop" + (own ? " own" : "")}>
            <img src={img} alt="" className={"messageImg" + (own ? " own" : "")} />
            <p className={"messageText" + (own ? " own" : "") }>{message}</p>
        </div>
        {/* <div className={"messageBottom" + (own ? " own" : "")}>
            1h ago
        </div> */}
    </div>
  )
}
