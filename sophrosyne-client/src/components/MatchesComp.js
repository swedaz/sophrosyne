import '../pages/survey.css'
import React, { Component } from 'react'
import Button from '@material-ui/core/Button'
import { Link } from 'react-router-dom';
import Container from '@material-ui/core/Container'




class Identity extends Component {
    constructor(props){
        super(props)
    }
    renderMatch(match){
        return( 
            <div>

                <h1>
                {match.id}
                </h1>
                <h2>
                {match.bio}
                </h2>

                
            </div>
    
        )
    }

    
    render() {
        console.log(this.props)
        //let testMatches = {results: [{id: "test1", bio: "bio1"}, {id: "test2", bio: "bio2"}]}
        let matchDisplay = this.props.matches.results.map(this.renderMatch) 
        

        return (
            <div >
                <Button color = "inherit" >Matches</Button>
                {matchDisplay}
                
           
            </div>
        )

    }
}
export default Identity