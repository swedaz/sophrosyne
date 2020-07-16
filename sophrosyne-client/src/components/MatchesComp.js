import '../pages/survey.css'
import React, { Component } from 'react'
import Button from '@material-ui/core/Button'
import { Link } from 'react-router-dom';
import Container from '@material-ui/core/Container'




class Identity extends Component {
    
    renderMatch(match){
        return( 
            <div>
                {match.id}
                {match.bio}
            </div>
    
        )
    }

    
    render() {
        let testMatches = {results: [{id: "test1", bio: "bio1"}, {id: "test2", bio: "bio2"}]}
        let matchDisplay = testMatches.results.map(this.renderMatch) 
        

        return (
            <div >
                <Button color = "inherit" >Matches</Button>
                {matchDisplay}
                
           
            </div>
        )

    }
}
export default Identity