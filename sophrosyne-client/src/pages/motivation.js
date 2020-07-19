import React, { Component } from 'react'
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { Image } from 'semantic-ui-react';
import motiv from './motivation.png'
import Profile from '../components/Profile'
import './motivation.css'

 
import {Link} from 'react-router-dom'

const aboutStyle = {color: 'black', fontSize: '105px', fontFamily: 'Arial', display: 'flex', alignItems: 'center', textAlign: 'center'};


class motivation extends Component {
    
    render() {
        return (
            <div className = 'motivation' >
                <Profile />
                <div className = 'motivImage'>
                    <Image alt = 'motiv' src = { motiv } />
                </div>
            </div >
        )
    }
}

export default motivation