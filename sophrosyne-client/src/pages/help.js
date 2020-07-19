import React, { Component } from 'react'
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { Image } from 'semantic-ui-react';
import Grid from '@material-ui/core/Grid';
import './help.css'
import HelpT from './helpImg.png'
 
import {Link} from 'react-router-dom'

const aboutStyle = {color: 'black', fontSize: '105px', fontFamily: 'Arial', display: 'flex', alignItems: 'center', textAlign: 'center'};
const textStyle = {color: 'black', fontSize: '42px', fontFamily: 'Arial', display: 'flex', alignItems: 'center'};

class help extends Component {
    
    render() {
        return (
            <div>
                <div className = 'help' >
                    <Image style={{height: '25', width: '25'}} alt = 'Help' src = { HelpT } />
                </div>
                <div className = 'help2'>
                <h1 style= {{aboutStyle, marginTop: '50px'}}>United States </h1>
                    <ul>
                        <li>Emergency: 911</li>
                        <li>National Domestic Violence Hotline: 1- 800-799-7233</li>
                        <li>
                            <a href="http://www.suicidepreventionlifeline.org">National Suicide Prevention Lifeline</a>
                            : 1-800-273-TALK (8255)
                        </li>
                        <li>
                            <a href="http://www.suicide.org">Suicide Prevention, Awareness, and Support</a>
                        </li>
                        <li>
                            <a href="https://www.contact-usa.org/chat.html">Lifeline Crisis Chat</a>
                        </li>
                        <li>Crisis Text Line: Text REASON to 741741 (free, confidential and 24/7)</li>
                        <li>Self-Harm Hotline: 1-800-DONT CUT (1-800-366-8288)</li>
                        <li>Family Violence Helpline: 1-800-996-6228</li>
                        <li>Planned Parenthood Hotline: 1-800-230-PLAN (7526)</li>
                        <li>American Association of Poison Control Centers: 1-800-222-1222</li>
                        <li>National Council on Alcoholism and Drug Dependency: 1-800-622-2255</li>
                        <li>GLBT Hotline: 1-888-843-4564</li>
                        <li>The Trevor Project: 1-866-488-7386 or text “START” to 678678. </li>
                        <li>
                            <a href="https://www.veteranscrisisline.net">Veterans Crisis Line: </a>
                        </li>
                        <li>Trans LifeLine (also available in Spanish) Our Hotline: 877-565-8860 </li>
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
                        <li>Emergency: 911</li>
                        <li>Hotline: 1-888-353-2273</li>
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