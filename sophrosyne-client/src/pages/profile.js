import React, { Component } from 'react'
import axios from 'axios'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper';
import hometransp from './home-transp.png'
import { Image } from 'semantic-ui-react';

import Profile from '../components/Profile' 

export class profile extends Component {
    render() {
        return (
            <div className = "home"  >
                <Grid container
                justify= "center"
                spacing = {10} 
                flex-direction = 'row'
                style={{marginTop :'10%'}}>
                    <Grid item xs = {6}>
                        <Profile />
                    </Grid>
                    <Image src = { hometransp }/>
                </Grid>
            </div>
        )
    }
}

export default profile