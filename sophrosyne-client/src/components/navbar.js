import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import logo from './Logo.png'

//MUI stuff
import AppBar from '@material-ui/core/AppBar'
import ToolBar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button'

class navbar extends Component {
    render() {
        return (
            <AppBar className = "appBar-container" 
            style={{backgroundColor: '#f6f5f5'}}>
                <ToolBar className = "nav-container" >
                    <img id = 'logo'
                     alt = 'logo' 
                     src = { logo } 
                     style={{width:'60px', height:'60px'}}
                     />
                    <Button color = "inherit" style= {{float: 'right'}} component = {Link} to = "/aboutUs">About Us</Button>
                    <Button color = "inherit" style= {{float: 'right'}} component = {Link} to = "/home">Home</Button>
                    <Button color = "inherit" style= {{float: 'right'}} component = {Link} to = "/login">Login</Button>
                    <Button color = "inherit" style= {{float: 'right'}} component = {Link} to = "/signup">Sign up</Button>
                </ToolBar>
            </AppBar>
        )
    }
}

export default navbar
