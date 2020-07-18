import React from 'react'
import './Message.css'
import { Card, CardContent, Typography } from '@material-ui/core'

function Message({sender, otherUser, message}) {
    console.log(sender)
    console.log(otherUser)
    const isUser = sender !== otherUser;
    return (
        <div className = {`message ${isUser && 'message_user'}`}>
            <Card className = {isUser ? "message_userCard" : "message_guestCard"}>
                <CardContent>
                    <Typography
                        color = "white"
                        variant = "h5"
                        component = "h2"
                    >
                        {sender}: {message}
                    </Typography>
                </CardContent>
            </Card>
        </div>
    )
}

export default Message
