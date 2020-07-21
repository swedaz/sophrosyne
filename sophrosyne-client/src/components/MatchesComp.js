import '../pages/survey.css'
import React, { Component } from 'react'
import Button from '@material-ui/core/Button'
import { Link } from 'react-router-dom';
import Container from '@material-ui/core/Container'
import './matches.css'

class Identity extends Component {
    constructor(props){
        super(props)
    }

    renderMatch(match, unMatch){
        return( 
            <div className = 'matchcomp'>

            
            <div className = 'match-container'>
                <div className = "image-format">
                    <img src={match.imageUrl} className = "match-image"></img>
                </div>
                <div className = "text-container">

                    <h1 className = "user-text">
                        {match.id} ({match.pronouns + " "}) 
                    </h1>
                    <h2 className = "pronoun-text">
                              {match.bio}
                    </h2>
                    <h2 className = "texting-text">
                        Meet {match.id}! You both identify as {match.commonIdentities + " "}!
                    </h2>
                
                </div>
                <div>
                    <Button style={{backgroundColor: '#fdce00', color: 'White'}} className = "chatMe-button" 
                    component = {Link} to = {"/profile/chat/" + match.id}>
                        Chat with me!
                    </Button>
                    <Button style={{backgroundColor: '#FF723F', color: 'White', marginTop: '10px'}} className = "unmatch-button" onClick = {() => unMatch(match.id)} >
                        Unmatch
                    </Button>
                </div>
               
            </div>
            </div>
    
        )
    }

    
    render() {
        //console.log(this.props)
        //let testMatches = {results: [{id: "test1", bio: "bio1"}, {id: "test2", bio: "bio2"}]}
        let unMatch = this.props.onUnMatch;
        let matchDisplay = this.props.matches.results.map(m => this.renderMatch(m, unMatch)); 
        return (
            <div >
                {matchDisplay}
            </div>
        )

    }
}
export default Identity