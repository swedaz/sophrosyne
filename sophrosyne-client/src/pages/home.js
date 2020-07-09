import React, { Component } from 'react'
import axios from 'axios'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper';

import Profile from '../components/Profile'

export class home extends Component {
    render() {
        return (
            <div>
                <Grid container
                justify= "center"
                spacing = {10} 
                flex-direction = 'row' 
                style={{marginTop :'10%'}}>
                    <Grid item xs = {6}>
                        <Profile />
                    </Grid>
                </Grid>
            </div>
        )
    }
}

export default home
