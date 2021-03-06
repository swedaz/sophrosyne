import React, { Component } from 'react'
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import { Link } from 'react-router-dom';
import dayjs from 'dayjs'
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import EditDetails from './EditDetails';
import Grid from '@material-ui/core/Grid';
import './Profile.css'

import Button from '@material-ui/core/Button'
import MuiLink from '@material-ui/core/Link'
import Typography from '@material-ui/core/Typography'
import CalendarToday from '@material-ui/icons/CalendarToday';
import EditIcon from '@material-ui/icons/Edit';
import KeyboardReturn from '@material-ui/icons/KeyboardReturn';

import { connect } from 'react-redux';
import { logoutUser, uploadImage } from '../redux/actions/userActions';
import Survey from '../pages/survey'

//import profile from '../pages/profile';
import Paper from '@material-ui/core/Paper';
//import { IconButton } from '@material-ui/core';

const aboutStyle = {color: 'black', fontSize: '90px', fontFamily: 'Poppins', display: 'flex'};
const textStyle = {color: 'grey', fontFamily: 'Poppins', fontSize: '30px'};
const accountStyle = {fontFamily: 'Poppins', fontStyle: 'normal', fontWeight: 'normal',fontSize: '24px', lineHeight: '36px', display: 'flex', alignItems: 'center'};

const styles = {
    paper: {
        // padding: 20,
        display:'flex',
        overflow: 'hidden'
      },
      profile: {
        '& .image-wrapper': {
          textAlign: 'center',
          position: 'relative',
          '& button': {
            position: 'absolute',
            top: '80%',
            left: '70%'
          }
        },
        '& .profile-image': {
          // width: 200,
          // height: 200,
          objectFit: 'cover',
          maxWidth: '100%',
          borderRadius: '50%'
        },
        '& .profile-details': {
          textAlign: 'center',
          '& span, svg': {
            verticalAlign: 'middle'
          },
          '& a': {
            color: '#00bcd4'
          }
        },
        '& hr': {
          border: 'none',
          margin: '0 0 10px 0'
        },
        '& svg.button': {
          '&:hover': {
            cursor: 'pointer'
          }
        }
      },
      buttons: {
        textAlign: 'center',
        '& a': {
          margin: '20px 10px'
        }
      }
};

class Profile extends Component {
  handleImageChange = (event) => {
    const image = event.target.files[0];
    const formData = new FormData();
    formData.append('image', image, image.name);
    this.props.uploadImage(formData);
  };
  handleEditPicture = () => {
    const fileInput = document.getElementById('imageInput');
    fileInput.click();
   };
  handleLogout = () => {
    this.props.logoutUser();
  };
  render() {
          const { classes, user: { 
                credentials: { handle, createdAt, imageUrl, bio, identities, genders }, 
                loading,
                authenticated
            }
        } = this.props;

        let profileMarkup = !loading ? (
            authenticated ? (
                <Grid container
                direction="row"
                id= 'profileContainer'
                justify= 'center'
                alignItems= 'center'
                spacing = {10}
                style= {{width:'40vw', height: '100vh'}}
                className={classes.paper}>
                  <Grid display= 'flex'>
                    <div className = {classes.profile}>
                            <Tooltip title= "Edit Profile Picture" placement= "top">
                              <IconButton id= "PhotoEdit" onClick={this.handleEditPicture} className="Button">
                                <EditIcon color = "primary"/>
                              </IconButton>
                           </Tooltip>
                        <div className = "profile-image">
                            <img src = {imageUrl} alt = "profile" className = "profile-image"/>
                            <input 
                              type="file" 
                              id= "imageInput" 
                              hidden= "hidden"
                              onChange={this.handleImageChange}
                            />
                        </div>
                        <hr/>
                        <div className = "profile-details">
                <MuiLink component = {Link} to = {`/users/${handle}`} color = "primary" variant = "h5">
                    @{handle}
                </MuiLink>
                <hr/>
                {bio && <Typography style={{fontFamily: "'Poppins', 'sans-serif'" }} id = "Bio" variant = "body2">{bio}</Typography>}
                <hr/>
                <hr/>
                {genders && <Typography style={{fontFamily: "'Poppins', 'sans-serif'" , fontSize: '15px'}} variant = "body2">Pronouns: {genders + " "}</Typography>}
                <hr/>
                <hr/>
                {identities && <Typography style={{fontFamily: "'Poppins', 'sans-serif'" , fontSize: '15px'}} variant = "body2">Identities: {identities + " "} </Typography>}
                <hr/>
                  <Tooltip title= "Logout" placement= "top">
                    <IconButton onClick = {this.handleLogout} component = {Link} to = "/home">
                      <KeyboardReturn color="primary"/>
                    </IconButton>
                  </Tooltip>
                <CalendarToday color = "primary"/>{' '}
            <span>Joined {dayjs(createdAt).format('MMM YYYY')}</span>
                        <EditDetails/>
                        </div>
                    </div>
                    <div style={{display:'flex', flexWrap:'wrap', alignItems:'center', justifyContent:'center'}} id = "ProfButtons" >
                      <Button id = "surveyButton"  component = {Link} to = "/profile/survey">Survey</Button>
                      <Button id = "MatchesButton" disabled = {!identities} component = {Link} to = "/profile/matches">Matches</Button>
                      <Button id = "MotivationButton"  component = {Link} to = "/profile/motivation">Motivation</Button>
                      <Button id = "HelpButton"  component = {Link} to = "/profile/help">Help</Button>
                    </div>
                  </Grid>
                </Grid>
        ) : (
                <div>
                  <h1 className = 'connect' style = {aboutStyle}>Connections start here!</h1>
                  <p className = 'info' style = {textStyle}>Begin your journey with us here at TheresHope to find your buddy!</p>
                  <Button className = 'signUp' component = {Link} to = "/signup" color = "primary" variant = "outlined">Sign Up</Button>
                  <p style = {accountStyle} className = 'account'>Already have an account? <Link to="/login"> Log in!</Link></p>
                </div>
        )) : (<p>loading...</p>)

        return profileMarkup;
    }
}

const mapStateToProps = (state) => ({
    user: state.user
});

const mapActionsToProps = {logoutUser,uploadImage};

Profile.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    uploadImage: PropTypes.func.isRequired,
    user: PropTypes.object.isRequired,
    classes: PropTypes.object.isRequired
};
  

export default connect(mapStateToProps, mapActionsToProps)(withStyles(styles)(Profile));
