import './survey.css'
import Gender from '../components/Gender'
import Identity from '../components/Identity'
import React, { Component } from 'react'
import Button from '@material-ui/core/Button'
import { Link } from 'react-router-dom';
import Container from '@material-ui/core/Container'
import { withRouter } from "react-router-dom";




class survey extends Component {
    render() {
        
        
        return (
            <div className = 'survey'>
                <div className='rowC'>
                <Gender />
                <Identity />
                <Button class = "SubmitButton" component = {Link} to = "/home"> Submit </Button> 
                </div>
            </div>
        )
    }
}

export default survey