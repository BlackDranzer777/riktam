import React from 'react';
import { Message } from '../Message/Message';
import './Chat.css';

const data = [
    {
        id:1,
        img:'https://upload.wikimedia.org/wikipedia/en/5/5e/Ron_Weasley_poster.jpg',
        message:'Hey! Harry',
        own:false
    },
    {
        id:2,
        img:'https://api.time.com/wp-content/uploads/2014/07/301386_full1.jpg',
        message:'Hi! Ron. What\'s up ?',
        own:true
    },
    {
        id:3,
        img:'https://upload.wikimedia.org/wikipedia/en/5/5e/Ron_Weasley_poster.jpg',
        message:"Just hanging out with Fred & George.",
        own:false
    },
    {
        id:4,
        img:'https://api.time.com/wp-content/uploads/2014/07/301386_full1.jpg',
        message:"That's cool. I'm going for quidditch practice. Trials are near!",
        own:true
    },
    {
        id:5,
        img:'https://api.time.com/wp-content/uploads/2014/07/301386_full1.jpg',
        message:'You said you will give it a try.',
        own:true
    },
    {
        id:6,
        img:'https://upload.wikimedia.org/wikipedia/en/5/5e/Ron_Weasley_poster.jpg',
        message:'I\'ll be right there.',
        own:false
    },
    {
        id:7,
        img:'https://api.time.com/wp-content/uploads/2014/07/301386_full1.jpg',
        message:'I\'ll wait, then.',
        own:true
    },
    {
        id:8,
        img:'https://upload.wikimedia.org/wikipedia/en/5/5e/Ron_Weasley_poster.jpg',
        message:"Have you seen my wand ?",
        own:false
    },
    {
        id:9,
        img:'https://api.time.com/wp-content/uploads/2014/07/301386_full1.jpg',
        message:"The broken one ?",
        own:true
    },
    {
        id:10,
        img:'https://upload.wikimedia.org/wikipedia/en/5/5e/Ron_Weasley_poster.jpg',
        message:'Yes!',
        own:false
    }, 
];

export const Chat = () => {
  return (
    <div className='Chat'>
        <div className="chatbox">
            <div className="messageBox">
                {data.map((user) => {
                    return <Message own={user.own} img={user.img} message={user.message}/>
                })}
            </div>
            <div className="messageInputBox">
                <div className="messageInputWrapper">
                    <textarea name="" id="" className="messageInput" placeholder='Enter your message here'></textarea>
                    <div className="emoji">
                        <img src="/emoji.jpeg" alt="" className="emoji-img" />
                    </div>
                </div>
                <button className="sendMessage">Send</button>
            </div>
        </div>
    </div>
  )
}
