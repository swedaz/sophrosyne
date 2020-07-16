import React, { useState }from 'react'
import Message from '../components/Message'
import { Button, FormControl, InputLabel, Input } from '@material-ui/core';
import './chat.css'

const chatStyle = {color: 'black', fontSize: '100px', fontFamily: 'Arial', display: 'flex', alignItems: 'center', textAlign: 'center'};

function Chat() {
    const [input, setInput] = useState('');
    const [messages, setMessages] = useState([]);
    const [username, setUsername] = useState('');

    const sendMessage = (event) => {
        event.preventDefault();
        setMessages([...messages, input]);
        setInput('');
    }
    return (
        <div className = "chat">
            <h2 style = {chatStyle}>Chat app</h2>
            <form>
            <FormControl>
                <InputLabel>Enter a message</InputLabel>
                <Input value = {input} onChange = {event => setInput(event.target.value)}/>
                <Button disabled = {!input} variant = "contained" color = "primary" type = 'submit' onClick = {sendMessage}>Send message</Button>
            </FormControl>
            </form>
            {
                messages.map(message => (
                    <Message text = {message}/>
                ))
            }
        </div>
        )
    }

export default Chat;
