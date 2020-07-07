import React, { Component } from 'react'
import axios from 'axios'
import Grid from '@material-ui/core/Grid'

import Profile from '../components/Profile'

export class home extends Component {
    render() {
        return (
            <Grid container spacing = {16}>
                <Profile />
            </Grid>
        )
    }
}

export default home
