import React, { Component } from 'react'
import axios from 'axios'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper';

import Profile from '../components/Profile'

export class home extends Component {
    render() {
        return (
            <div>
                <Grid container spacing = {10} flex-direction = 'row'>
                    <Grid item xs = {20}>
                        <Profile />
                    </Grid>
                </Grid>
            </div>
        )
    }
}

export default home
