import React, { Component } from 'react'
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { Image } from 'semantic-ui-react';
import Grid from '@material-ui/core/Grid';
import './help.css'
import HelpT from './helpImg.png'
 
import {Link} from 'react-router-dom'
import { lightBlue } from '@material-ui/core/colors';

const aboutStyle = {color: 'black', fontSize: '105px', fontFamily: 'Arial', display: 'flex', alignItems: 'center', textAlign: 'center'};
const textStyle = {color: 'black', fontSize: '42px', fontFamily: 'Arial', display: 'flex', alignItems: 'center'};

const spanStyle = {color: lightBlue}

class help extends Component {
    
    render() {
        return (
            <div>
                <div className = 'help' >
                    <Image style={{height: '25', width: '25'}} alt = 'Help' src = { HelpT } />
                </div>
                <div className = 'help2'>
                <h1 style= {{aboutStyle, marginTop: '50px'}}>United States </h1>
                    <ul id ='usHelp'>
                        <li>Emergency: <span className= 'contactInfo'>911</span></li>
                        <li>National Domestic Violence Hotline: <span className= 'contactInfo'>1- 800-799-7233</span></li>
                        <li>
                            <a href="http://www.suicidepreventionlifeline.org">National Suicide Prevention Lifeline</a>
                            <span className= 'contactInfo'>: 1-800-273-TALK (8255)</span>
                        </li>
                        <li>
                            <a href="http://www.suicide.org">Suicide Prevention, Awareness, and Support</a>
                        </li>
                        <li>
                            <a href="https://www.contact-usa.org/chat.html">Lifeline Crisis Chat</a>
                        </li>
                        <li>Crisis Text Line: <span className= 'contactInfo'>Text REASON to 741741 (free, confidential and 24/7)</span></li>
                        <li>Self-Harm Hotline: <span className= 'contactInfo'>1-800-DONT CUT (1-800-366-8288)</span></li>
                        <li>Family Violence Helpline: <span className= 'contactInfo'>1-800-996-6228</span></li>
                        <li>Planned Parenthood Hotline: <span className= 'contactInfo'>1-800-230-PLAN (7526)</span></li>
                        <li>American Association of Poison Control Centers: <span className= 'contactInfo'>1-800-222-1222</span></li>
                        <li>National Council on Alcoholism and Drug Dependency: <span className= 'contactInfo'>1-800-622-2255</span></li>
                        <li>GLBT Hotline: <span className= 'contactInfo'>1-888-843-4564</span></li>
                        <li>The Trevor Project: <span className= 'contactInfo'>1-866-488-7386 or text “START” to 678678.</span> </li>
                        <li>
                            <a href="https://www.veteranscrisisline.net">Veterans Crisis Line: </a>
                        </li>
                        <li>Trans LifeLine (also available in Spanish) Our Hotline: <span className= 'contactInfo'>877-565-8860 </span></li>
                    </ul>  
                <h1 style= {{aboutStyle, marginTop: '50px'}}>‘Find a Therapist’ Online Directories</h1>
                    <ul>
                        <li>
                                <a href="https://psychcentral.com/find-help/">PsychCentral</a>
                        </li>
                        <li>
                                <a href="https://therapists.psychologytoday.com/rms">Psychology Today</a>
                        </li>
                        <li>
                                <a href="http://www.goodtherapy.org/find-therapist.html">GoodTherapy.org</a>
                        </li>
                        <li>
                                <a href="http://www.aamft.org/iMIS15/AAMFT/Content/Directories/Find_a_Therapist.aspx ">American Association for Marriage and Family Therapy</a>
                        </li>
                    </ul>
                <h1 style= {{aboutStyle, marginTop: '50px'}}>Canada</h1>
                    <ul>
                        <li>Emergency: <span className= 'contactInfo'>911</span></li>
                        <li>Hotline:<span className= 'contactInfo'>1-888-353-2273</span> </li>
                        <li>
                                <a href="http://www.yourlifecounts.org/need-help/crisis-lines">YourLifeCounts.org</a>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default help