import React, { Component } from 'react'
import axios from 'axios'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper';
import MatchesComp from '../components/MatchesComp'
import Profile from '../components/Profile'
import { connect } from 'react-redux';
import { getUsers, removeMatch } from '../redux/actions/userActions';



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

        let st = this.setState;
        function rm (user) {
            removeMatch(user)(res => {
                getUsers()(s => {
                    //console.log(s)
                    st({matchResults: s.data})
                })
            }
            )
        } 

        return (
            
            <div className = 'match-page' >
                <div className = "profile">
                    <Profile/>
                </div>
        
                <Grid 
                container
                justify= "center"
                spacing = {10} 
                flex-direction = 'row' 
                style={{marginTop :'5%', marginLeft: '17%'}}>
                    <Grid item xs = {6} className = "match-section">
                        <h1> Meet your friends by taking our survey!</h1>
                        <MatchesComp matches = {this.state.matchResults} onUnMatch = {rm} />
                    </Grid>
                </Grid>
            </div>
        )
    }
}

export default matches