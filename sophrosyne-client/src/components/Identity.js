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
            selectedIdentity: ""
        }
    }
    

    getSelections() {
        let selections = []
        if(this.state.button1){
            selections.push("BIPOC")
        }
        if(this.state.button2){
            selections.push("LGBTQ+")
        }
        if(this.state.button3){
            selections.push("International Student")
        }
        if(this.state.button4){
            selections.push("Anyone")
        }
        return selections
    }

    toggleIdentity(identity){
        if(this.props.identities.includes(identity)){
            let newIdentities = this.props.identities.filter(g => g != identity) 
            this.props.onUpdateIdentity(newIdentities)
        }else{
            console.log(this.props.identities)
            let newIdentities = this.props.identities.concat([identity])
            this.props.onUpdateIdentity(newIdentities)
            console.log(newIdentities)
            
        }
        
    }

    handleClick1 = () => {
        this.toggleIdentity("BIPOC")
        
    }


    handleClick2 = () => {
        this.toggleIdentity("LGBTQ+")
       
    }
    handleClick3 = () => {
        this.toggleIdentity("International Student")
    }


    handleClick4 = () => {
        this.toggleIdentity("Anyone")
    }

    render() {
        let btn_class1 = this.props.identities.includes("BIPOC") ? "buttonTrue" : "buttonFalse";
        let btn_class2 = this.props.identities.includes("LGBTQ+") ? "buttonTrue" : "buttonFalse";
        let btn_class3 = this.props.identities.includes("International Student") ? "buttonTrue" : "buttonFalse";
        let btn_class4 = this.props.identities.includes("Anyone") ? "buttonTrue" : "buttonFalse";

        return (
            <div >
                <div>
                    <div>
                    <Container style={{borderLeft: 'solid #FF723F 5px'}} className = 'identity'>
                    <h2 className = 'text'>Select an identity: </h2>
                    <Button class = {btn_class1} key = "BIPOC" onClick={this.handleClick1.bind(this)} >BIPOC</Button>
                    <Button class = {btn_class2}  key = "LGBTQ+" onClick={this.handleClick2.bind(this)}>LGBTQ+</Button>
                    <Button class = {btn_class3} key = "International Student" onClick={this.handleClick3.bind(this)}>International Student</Button>
                    <Button class = {btn_class4} key = "Anyone" onClick={this.handleClick4.bind(this)} >Anyone</Button>        
                    </Container>
                    </div>
                </div>
            </div>
        )
    }
}
export default Identity