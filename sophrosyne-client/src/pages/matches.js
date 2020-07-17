import React, { Component } from 'react'
import axios from 'axios'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper';
import MatchesComp from '../components/MatchesComp'
import { connect } from 'react-redux';
import { getUsers } from '../redux/actions/userActions';



export class matches extends Component {
    constructor(props){
        super(props)
        this.state = {matchResults:{results: [] }}
    }
     componentDidMount(){
        
        getUsers()(s => {
            //console.log(s)
            this.setState({matchResults: s.data})
        })
    }

    
    render() {
        console.log(this.state)
        return (
            <div>
                <Grid container
                justify= "center"
                spacing = {10} 
                flex-direction = 'row' 
                style={{marginTop :'10%'}}>
                    <Grid item xs = {6}>
                        <h1>Meet your friends!</h1>
                        <MatchesComp matches = {this.state.matchResults}/>
                    </Grid>
                </Grid>
            </div>
        )
    }
}

export default matches