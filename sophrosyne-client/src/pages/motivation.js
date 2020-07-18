import React, { Component } from 'react'
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { Image } from 'semantic-ui-react';
import Grid from '@material-ui/core/Grid';
 
import {Link} from 'react-router-dom'

const aboutStyle = {color: 'black', fontSize: '105px', fontFamily: 'Arial', display: 'flex', alignItems: 'center', textAlign: 'center'};


class help extends Component {
    
    render() {
        return (
            <div className = 'help' >
                <h1 style= {{aboutStyle, marginTop: '50px'}}>HELPPPP</h1>
                <h1 style= {{aboutStyle}}>MOTIVATION</h1>
                <h1 style= {{aboutStyle}}>MOTIVATION</h1>

            </div >
        )
    }
}

export default help