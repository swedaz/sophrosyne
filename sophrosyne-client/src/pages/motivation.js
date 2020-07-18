import React, { Component } from 'react'
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { Image } from 'semantic-ui-react';
import Grid from '@material-ui/core/Grid';
import Profile from '../components/Profile'

 
import {Link} from 'react-router-dom'

const aboutStyle = {color: 'black', fontSize: '105px', fontFamily: 'Arial', display: 'flex', alignItems: 'center', textAlign: 'center'};


class motivation extends Component {
    
    render() {
        return (
            <div className = 'motivation' >
                <Profile />
                <h1 style = {aboutStyle}>motivation</h1>
            </div >
        )
    }
}

export default motivation