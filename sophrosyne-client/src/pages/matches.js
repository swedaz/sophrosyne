import React, { Component } from 'react'
import axios from 'axios'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper';
import MatchesComp from '../components/MatchesComp'



export class matches extends Component {
    render() {
        return (
            <div>
                <Grid container
                justify= "center"
                spacing = {10} 
                flex-direction = 'row' 
                style={{marginTop :'10%'}}>
                    <Grid item xs = {6}>
                        <h1>Hello world</h1>
                        <MatchesComp/>
                    </Grid>
                </Grid>
            </div>
        )
    }
}

export default matches