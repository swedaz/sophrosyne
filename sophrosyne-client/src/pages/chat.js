import React, { useState, useEffect }from 'react'
import Message from '../components/Message'
import { Link } from 'react-router-dom';
import { Button, FormControl, InputLabel, Input } from '@material-ui/core';
import { getMessages, sendMessage } from '../redux/actions/userActions';
import MuiLink from '@material-ui/core/Link'
import '../pages/chat.css'

const chatStyle = {color: 'black', fontSize: '100px', fontFamily: 'Arial', display: 'flex', alignItems: 'center', textAlign: 'center'};

function Chat(routeParams) {
    console.log(routeParams.match.params.user);
    const [input, setInput] = useState('');
    const [messages, setMessages] = useState([]);
    const username = routeParams.match.params.user;

    function pullMessages() {
        getMessages({user: username})(msg => {
            console.log(msg.data.messages);
            setMessages(msg.data.messages);
            setTimeout(() => {
                pullMessages()
            }, 1000);
        })
    }

    useEffect(() => {
        pullMessages()
    }, [])

    const onSendMessage = (event) => {
        event.preventDefault();
        sendMessage({toUser: username, message: input})(msg => {

        })
        setInput('');
    }

    return (
        <div className = "chat">
            <h1 style = {chatStyle}>Chat app</h1>
            <h3> Say hi to {username} </h3>
            <form>
            <FormControl className = 'enter'>
                <InputLabel>Enter a message</InputLabel>
                <Input value = {input} onChange = {event => setInput(event.target.value)}/>
                <Button disabled = {!input} variant = "contained" color = "primary" type = 'submit' onClick = {onSendMessage}>Send message</Button>
            </FormControl>
            </form>
            {
                messages.map(message => (
                    <Message sender = {message.users[0]} otherUser = {username} message = {message.message}/>
                ))
            }
        </div>
        )
    }

export default Chat;