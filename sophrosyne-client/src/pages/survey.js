import './survey.css'
import {surveySubmit} from '../redux/actions/userActions';
import Gender from '../components/Gender'
import Identity from '../components/Identity'
import React, { Component } from 'react'
import Button from '@material-ui/core/Button'
import { Link } from 'react-router-dom';
import Container from '@material-ui/core/Container'
import { withRouter } from "react-router-dom";
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import { connect } from 'react-redux';




class survey extends Component {
    constructor(props) {
        super(props);
        this.state = {
            genders: [],
            identities: []
        }
    } 
    updateGender(genders){
        this.setState({genders: genders})
    }


    updateIdentity(identities){
        this.setState({identities: identities})
    }
    
    handleSubmit(){
        //let results = {genders: this.state.genders, id: []}
        let results = {genders: this.state.genders, identitities: this.state.identities, id: []}
        console.log(this.props)
        this.props.surveySubmit(results)

    }
   
    render() {
        
        
        return (
            <div className = 'survey'>
                <div className='rowC'>
                <Gender onUpdateGender = { g => this.updateGender(g)} genders = {this.state.genders}/>
                <Identity onUpdateIdentity = {i => this.updateIdentity(i)} identities = {this.state.identities} />
                <Button class = "SubmitButton" onClick = {() => this.handleSubmit()} component = {Link} to = "/home"> Submit </Button> 
                </div>
            </div>
        )
    }
}
survey.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    classes: PropTypes.object.isRequired
}

//export default survey


// EditDetails.propTypes = {
//     editUserDetails: PropTypes.func.isRequired,
//     classes: PropTypes.object.isRequired
// }

const mapStateToProps = (state) => ({
    credentials: state.user.credentials
})

export default connect(mapStateToProps, {surveySubmit})(survey);

//export default connect(mapStateToProps, { editUserDetails})(withStyles(styles)(EditDetails));