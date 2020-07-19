import React, { useState, useEffect }from 'react'
import Message from '../components/Message'
import { Link } from 'react-router-dom';
import { Button, FormControl, InputLabel, Input } from '@material-ui/core';
import { getMessages, sendMessage } from '../redux/actions/userActions';
import MuiLink from '@material-ui/core/Link'
import Profile from '../components/Profile'
import { Grid } from '@material-ui/core';
import '../pages/chat.css'
import $ from "jquery"


const chatStyle = {color: 'black', fontSize: '100px', fontFamily: 'Poppins', display: 'flex', alignItems: 'center', textAlign: 'center'};


function Chat(routeParams) {
    
    // $(document).ready(function(){
    //     $('#message-container').animate({
    //         scrollTop: $('#message-container')[0].scrollHeight}, 2000);
    // });
    //$("#message-container").animate({ scrollTop: $('#div1')[0].scrollHeight}, 1000);
    

    console.log(routeParams.match.params.user);
    const [input, setInput] = useState('');
    const [messages, setMessages] = useState([]);
    const username = routeParams.match.params.user;

    function scrollBottom() {
        window.scrollTo(0, 99999);
    }
    $('#message-container').scrollTop(1000000);
    function pullMessages() {
        getMessages({user: username})(msg => {
            console.log(msg.data.messages);
            setMessages(msg.data.messages);
            setTimeout(() => {
                pullMessages()
            }, 1000);
            $('#"message-container"').scrollTop(1000000);
            scrollBottom()
        })
    }

    useEffect(() => {
        //scrollBottom()
        pullMessages()
        //scrollBottom()
    }, [])

    const onSendMessage = (event) => {
        event.preventDefault();
        sendMessage({toUser: username, message: input})(msg => {
        })
        setInput('');
        
        //scrollBottom()
    }

    

    

    return (
        <div className = "bigPage">
            <div>
                <Profile /> 
            </div>
            <div className = "chat" style={{marginTop :'5%', marginLeft: '40%'}}>>
            
                
                <Grid className = "message-container">
                    <h1>Your chat with {username}! </h1>
                {
                    messages.map(message => (
                        <Message sender = {message.users[0]} otherUser = {username} message = {message.message}/>
                    ))
                }
                <div>
                <h3> Say hi to {username}! </h3>
                <form>
                <FormControl className = 'enter'>
                    <InputLabel>Enter a message</InputLabel>
                    <Input className = "input-box" value = {input} onChange = {event => setInput(event.target.value)}/>
                    <Button disabled = {!input} variant = "contained" color = "primary" type = 'submit' onClick = {onSendMessage}>Send message</Button>
                </FormControl>
                </form>
                </div>
                </Grid>
                
            </div>
        </div>
        )
    }

export default Chat;