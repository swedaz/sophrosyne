import '../pages/survey.css'
import React, { Component } from 'react'
import Button from '@material-ui/core/Button'
import { Link } from 'react-router-dom';
import Container from '@material-ui/core/Container'

var selectedGender = [];



class Gender extends Component {
    


    constructor(props) {
        super(props);
        this.state = {
            button1: false,
            button2: false,
            button3: false,
            button4: false,
            selectedGender: ""
        }
    }
    

    getSelections() {
        let selections = []
        if(this.state.button1){
            selections.push("She/her")
        }
        if(this.state.button2){
            selections.push("He/him")
        }
        if(this.state.button3){
            selections.push("They/them")
        }
        if(this.state.button4){
            selections.push("Other")
        }
        return selections
    }

    toggleGender(gender){
        if(this.props.genders.includes(gender)){
            let newGenders = this.props.genders.filter(g => g != gender) 
            this.props.onUpdateGender(newGenders)
        }else{
            console.log(this.props.genders)
            let newGenders = this.props.genders.concat([gender])
            this.props.onUpdateGender(newGenders)
            console.log(newGenders)
            
        }
        
    }

    handleClick1 = () => {
        this.toggleGender("She/her")
        //this.setState({button1: !this.state.button1})
        // if(this.props.genders.includes("She/her")){
        //     this.props.genders.filter(g => g != "She/her") 
        // }
        // this.props.onUpdateGender([])
        
    }


    handleClick2 = () => {
        this.toggleGender("He/him")
        //this.setState({button2: !this.state.button2})

        // this.setState({button2: !this.state.button2})
        // if(!this.state.button2){
        //     selectedGender.push("He/him")
        //     this.setState(function(state, selectedGender){
        //         return{
        //             selectedGender: "Man"
        //         };
        //     });
        // }
        //console.log(this.state.selectedGender)
        //console.log(selectedGender)
        
       
    }
    handleClick3 = () => {
        //this.setState({button3: !this.state.button3})
        this.toggleGender("They/them")

        // this.setState({button3: !this.state.button3})
        // if(!this.state.button3){
        //     selectedGender.push("They/them")
        // }
        // //console.log(this.state.selectedGender)
        // console.log(selectedGender)
    }


    handleClick4 = () => {
        //this.setState({button4: !this.state.button4})
        this.toggleGender("Other")

        // this.setState({button4: !this.state.button4})
        // if(!this.state.button4){
        //     selectedGender.push("Other")
        // } 
        // //console.log(this.state.selectedGender)
        // console.log(selectedGender)
    }

    render() {
        //let btn_class1 = this.state.button1 ? "buttonTrue" : "buttonFalse";
        let btn_class1 = this.props.genders.includes("She/her") ? "buttonTrue" : "buttonFalse";
        let btn_class2 = this.props.genders.includes("He/him") ? "buttonTrue" : "buttonFalse";
        let btn_class3 = this.props.genders.includes("They/them") ? "buttonTrue" : "buttonFalse";
        let btn_class4 = this.props.genders.includes("Other") ? "buttonTrue" : "buttonFalse";

        return (
            <div >
                <div>
                    <div>
                    <Container className = 'Gender'>
                    <h2 className = 'text'>Select your pronouns: </h2>
                    <Button class = {btn_class1} key = "She/her" onClick={this.handleClick1.bind(this)} >She/her</Button>
                    <Button class = {btn_class2}  key = "He/him" onClick={this.handleClick2.bind(this)}>He/him</Button>
                    <Button class = {btn_class3} key = "They/them" onClick={this.handleClick3.bind(this)}>They/them</Button>
                    <Button class = {btn_class4} key = "Other" onClick={this.handleClick4.bind(this)} >Other</Button>        
                    </Container>
                    </div>
                </div>
            </div>
        )
    }
}
export default Gender