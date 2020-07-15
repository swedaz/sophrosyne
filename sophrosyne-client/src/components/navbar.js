import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import logo from './Logo.png'

//MUI stuff
import AppBar from '@material-ui/core/AppBar'
import ToolBar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid';

class navbar extends Component {
    render() {
        return (
            <AppBar className = "appBar-container" 
            style={{backgroundColor: '#f6f5f5'}}>
                 <Grid container className = "nav-container" spacing={24} style={{flexDirection:'row', justify: 'flex-end', alignItems:'center'}}> 
                    <img id = 'logo' alt = 'logo' src = { logo } style={{width:'60px', height:'60px', justify:'flex-start'}}/>
                        <Grid item xs={11} style={{padding: '0px 15px'}}>
                            <Button color = "inherit" style= {{float: 'right', padding: '0px 30px'}} component = {Link} to = "/signup">Sign up</Button>
                            <Button color = "inherit" style= {{float: 'right', padding: '0px 30px'}} component = {Link} to = "/login">Login</Button>
                            <Button color = "inherit" style= {{float: 'right', padding: '0px 30px'}} component = {Link} to = "/home">Home</Button>
                            <Button color = "inherit" style= {{float: 'right', padding: '0px 30px'}} component = {Link} to = "/aboutUs">About Us</Button>
                        </Grid>
                </Grid>
            </AppBar>
        )
    }
}

export default navbar
