import React, { Component } from 'react'
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { Image } from 'semantic-ui-react';
import map from './4euni.png'
import team from './team2.png'
import './aboutUs.css'
 
import {Link} from 'react-router-dom'

const aboutStyle = {color: 'white', fontSize: '105px', fontFamily: 'Arial', display: 'flex', alignItems: 'center', textAlign: 'center'};
const textStyle = {color: 'white', fontSize: '42px', fontFamily: 'Arial', display: 'flex', alignItems: 'center'};

class aboutUs extends Component {
    
    render() {
        return (
            <div>
                <div className = 'aboutUs' >
                    <h1 style = {aboutStyle}>About Us</h1>
                    <p style = {textStyle}>Here at TheresHope, we work hard to <br></br>create connections, whilst also providing<br></br>outlets of professional help.</p>
                    <Image alt = 'map' src = { map } />
                </div>
                <div className = 'abouUs2'>
                    <h1 style = {aboutStyle}>About Us</h1>
                    <p style = {textStyle}>Here at TheresHope, we work hard to <br></br>create connections, whilst also providing<br></br>outlets of professional help.</p>
                </div>
                <div className = 'abouUs3'>
                    <Image className = 'team' alt = 'team' src = { team }/>
                </div>
            </div>
        )
    }
}

export default aboutUs
