import React, { Fragment, Component } from 'react';
import {Helmet} from 'react-helmet';
import {questions} from '../question';


class Summary extends Component{
        constructor(props){
            super(props);
            this.state ={questions}
        }
        render (){
            return(
                <Fragment>
                    <Helmet><title>Summary</title></Helmet>
                    <div id="home">
                        <div className="headersummary">
                            <div>
                                <span>J</span>
                            </div>
                            <div className="freestyle">
                                <span>JOB SEARCH</span>
                            </div>
                            <div className="freestyle2">
                                <span>RESUME SERVICE</span>
                            </div>
                            <div className="freestyle2">
                                <span>BLOG</span>
                            </div>
                            <div className="freestyle2">
                                <span>MORE</span>
                            </div>
                        </div><br/><br/><br/>
                        <div className="mainsubmit">
                            <h1 >Test submitted</h1><br/>
                            <div className="maintext">
                                <p>Jobby received your test report. Thank you for your application.</p><br/>
                                <p>We will reach out for you through your email address</p><br/><br/>
                                <p>If you have any futher questions, please contact us throught dangtrunghieu2304@gmail.com</p> 
                            </div><br/>
                            <div className="Col-xs-12">
                                <button className="return-button">RETURN TO JOBBY</button>
                            </div>                               
                        </div><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                        <div className="footersummary">
                            <div>
                                <ul>
                                    <li>Home</li>
                                    <li>All Jobs</li>
                                    <li>About us</li>
                                    <li>Contact us</li>
                                </ul>
                            </div>
                            <div className="freestyle3">
                                <ul>
                                    <li>Privacy Policy</li>
                                    <li>Term & Conditions</li>
                                    <li>Complaints</li>
                                    <li>FAQ</li>
                                </ul>
                            </div>
                            <div className="freestyle3">
                                <ul>
                                    <li>Tax: +84 23654908</li>
                                    <li>Phone: +84 23654908</li>
                                    <li>Address: 5A/2 Tran Phu ward 4 HCMC</li>
                                </ul>
                            </div>                          
                        </div>
                        <div className="codelynx">
                                <p>@Copyright 2020 Codelynx 2020</p>
                        </div>
                    </div>
                </Fragment>
            )
        }
}

export default Summary;