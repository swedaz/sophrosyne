import React, { useState, useEffect }from 'react'
import Message from '../components/Message'
import { Link } from 'react-router-dom';
import { Button, FormControl, InputLabel, Input } from '@material-ui/core';
import MuiLink from '@material-ui/core/Link'
import '../pages/chat.css'

const chatStyle = {color: 'black', fontSize: '100px', fontFamily: 'Arial', display: 'flex', alignItems: 'center', textAlign: 'center'};

function Chat(routeParams) {
    console.log(routeParams.match.params.user);
    const [input, setInput] = useState('');
    const [messages, setMessages] = useState([{
        username: 'sonny', message: 'hello'}, 
        {username: 'swetha', text: 'yo'}
    ]);
    const [username, setUsername] = useState(routeParams.match.params.user);

    const sendMessage = (event) => {
        event.preventDefault();
        setMessages([
            ...messages, {username: username, text: input}
        ]);
        setInput('');
    }

    return (
        <div className = "chat">
            <h1 style = {chatStyle}>Chat app</h1>
            <h3> Welcome {username} </h3>
            <form>
            <FormControl>
                <InputLabel>Enter a message</InputLabel>
                <Input value = {input} onChange = {event => setInput(event.target.value)}/>
                <Button disabled = {!input} variant = "contained" color = "primary" type = 'submit' onClick = {sendMessage}>Send message</Button>
            </FormControl>
            </form>
            {
                messages.map(message => (
                    <Message username = {username} message = {message}/>
                ))
            }
        </div>
        )
    }

export default Chat;