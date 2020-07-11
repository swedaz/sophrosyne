import '../pages/survey.css'
import React, { Component } from 'react'
import Button from '@material-ui/core/Button'
import { Link } from 'react-router-dom';
import Container from '@material-ui/core/Container'

var selectedIdentity = [];


class Identity extends Component {

    constructor(props) {
        super(props);
        this.state = {
            button1: false,
            button2: false,
            button3: false,
            button4: false,
        }
    }


    handleClick1 = () => {
        this.setState({button1: !this.state.button1})
        if(!this.state.button1){
            selectedIdentity.push("POC")
            
           
        }
        //console.log(this.state.selectedIdentity)
        console.log(selectedIdentity)
    }

    handleClick2 = () => {
        this.setState({button2: !this.state.button2})
        if(!this.state.button2){
            selectedIdentity.push("LGBTQ+")
        }
        //console.log(this.state.selectedIdentity)
        console.log(selectedIdentity)
        
       
    }
    handleClick3 = () => {
        this.setState({button3: !this.state.button3})
        if(!this.state.button3){
            selectedIdentity.push("International Student")
        }
        //console.log(this.state.selectedIdentity)
        console.log(selectedIdentity)
    }

    handleClick4 = () => {
        this.setState({button4: !this.state.button4})
        if(!this.state.button4){
            selectedIdentity.push("Anyone :)")
        } 
        //console.log(this.state.selectedIdentity)
        console.log(selectedIdentity)
    }

    render() {
        let btn_class1 = this.state.button1 ? "buttonTrue" : "buttonFalse";
        let btn_class2 = this.state.button2 ? "buttonTrue" : "buttonFalse";
        let btn_class3 = this.state.button3 ? "buttonTrue" : "buttonFalse";
        let btn_class4 = this.state.button4 ? "buttonTrue" : "buttonFalse";

        return (
            <div >
                <div>
                    <div>
                    <Container className = 'Identity'>
                    <h2 className = 'text'>Select an identity: </h2>
                    <Button class = {btn_class1} key = "POC" onClick={this.handleClick1.bind(this)} >POC</Button>
                    <Button class = {btn_class2}  key = "LGBTQ+" onClick={this.handleClick2.bind(this)}>LGBTQ+</Button>
                    <Button class = {btn_class3} key = "International Student" onClick={this.handleClick3.bind(this)}>International Student</Button>
                    <Button class = {btn_class4} key = "Anyone :)" onClick={this.handleClick4.bind(this)} >Anyone :)</Button>        
                    </Container>
                    </div>
                </div>
            </div>
        )
    }
}
export default Identity