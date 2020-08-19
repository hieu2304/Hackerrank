import React, { Fragment, Component } from 'react';
import {Helmet} from 'react-helmet';
import {questions} from '../question';
import isEmpty from '../utils/is-empty';
import M from 'materialize-css';

// import classnames from 'classnames';

class Answer4 extends Component{
    constructor(props){
        super(props);
        this.state ={questions,
            answer:'',
            currenQuestionIndex:0,
            currentQuestion:'',
            currentQuestion1:'',
            currentQuestion2:'',
            currentQuestion3:'',
            score:0,
            correctAnswer:0,
            wrongAnswer:0,
            flag:0,
            time: {}
        };
        this.interval=null;
    }
    componentDidMount(){
        const {questions , currentQuestion,currentQuestion1,currentQuestion2,currentQuestion3} = this.state;
        this.displayQuestion(questions,currentQuestion,currentQuestion1,currentQuestion2,currentQuestion3);
        this.startTimer();
    }

    componentWillMount(){
        clearInterval(this.interval);
    };

    startTimer =() =>{
        const countDownTime=Date.now() + 30000;
        this.interval=setInterval(()=>{
            const now=new Date();
            const distance = countDownTime -now;
            const minutes = Math.floor(distance % (1000*60*60) / (1000*60));
            const seconds = Math.floor(distance % (1000*60) / 1000);
            if(distance < 0)
            {
                clearInterval(this.interval);
                this.setState({
                    minutes:0,
                    seconds:0
                },()=>{
                    alert('Time out');
                    this.props.history.push('/');
                });
            }else{
                this.setState({
                    time:{
                        minutes,
                        seconds
                    }
                });
            }
        },1000)
    };

    displayQuestion =(questions = this.state.questions,currentQuestion,currentQuestion1,currentQuestion2,currentQuestion3) =>{
        let {currenQuestionIndex} = this.state
        if(!isEmpty(this.state.questions)){
            questions = this.state.questions;
            currentQuestion = questions[currenQuestionIndex];
            currentQuestion1 = questions[currenQuestionIndex + 1];
            currentQuestion2 = questions[currenQuestionIndex + 2];
            currentQuestion3 = questions[currenQuestionIndex + 3];
            const answer = currentQuestion3.answer;
            this.setState({
                currentQuestion,
                currentQuestion1,
                currentQuestion2,
                currentQuestion3,
                answer
            });
        }
    };
    
    increaseCount = () =>{
        this.setState({
            couter:5
        });
    };

    handdlerButtonSubmit =(e)=>{
        if(this.state.newAnswer.toLowerCase() === this.state.answer.toLowerCase()){      
            this.correctAnswer();
            this.endGame(); 
        }else{
            this.wrongAnswer();
        }
    }
    wrongAnswer = () =>{
        navigator.vibrate(1000);
        M.toast({
            html:'Wrong Answer',
            classes: 'toast-invalid',
            displayLength: 1500
        });
        this.setState(prevState =>({
            wrongAnswer: prevState.wrongAnswer + 1,
            currentQuestionIndex:prevState.currentQuestionIndex + 1,
            numberOfAnsweredQuestion:prevState.numberOfAnsweredQuestion + 1
        }),()=>{
            alert('Wrong Answer');
        });
    }
    correctAnswer = () =>{
        M.toast({
            html:'Correct Answer',
            classes: 'toast-valid',
            displayLength: 1500
        });
        this.setState(prevState =>({
            score: prevState.score +1,
            correctAnswer: prevState.correctAnswer + 1,
            currentQuestionIndex:prevState.currentQuestionIndex + 1,
            numberOfAnsweredQuestion: prevState.numberOfAnsweredQuestion +1,
            status:1            
        }),()=>{               
        });
       
    }
    //hàm này chuyền 
    endGame = ()=> {
        const {state} =this;
        const playerStats = {
            status:state.status
        };
        console.log(playerStats);      
        setTimeout(() =>{
            this.props.history.push('/',playerStats);
        },1000);
    }


    handdleInputChange = (e)=>{
        e.preventDefault();
        this.setState({
            newAnswer:e.target.value
        });
    }
    render () {
        const {time,currentQuestion3}=this.state;
        return(          
            <Fragment>
                <Helmet><title>Question Q3</title></Helmet>
                    <div id="home">       
                        <section>
                                <div className="header flex a-center j-between">
                                    <div className="header__nav--logo">
                                        J
                                    </div>
                                    <div className="header__nav--timing flex a-center">
                                        <i className="header__nav--timing--clock far fa-clock"></i>
                                        <div className="header__nav--timing--tick">
                                            <span>{time.minutes}:{time.seconds}</span>
                                        </div>
                                    </div>
                                    <div className="header__nav--process flex a-center j-center">
                                        <div className="header__nav--process--bar">
                                            <div className="header__nav--process--bar--done"></div>
                                        </div>
                                        <div className="header__nav--process--info">
                                            0/2 Attempts
                                        </div>
                                    </div>
                                    <div className="header__nav--user-login flex a-center">
                                        <div className="header__nav--user-login--icon">
                                            <i className="fas fa-user-circle"></i>
                                        </div>
                                        <div className="header__nav--user-login--mail">
                                            dangtrunghieu@gmail.com
                                        </div>
                                    </div>
                                </div>
                            <div className="main__content flex">
                                <div className="main__content--left-sidebar flex ">
                                    <div className="main__content--left-sidebar--bars active" value="all">                                
                                        <span  className="fas fa-bars"></span>                               
                                    </div>
                                    <ul className="main__content--left-sidebar--list flex">
                                        <li className="main__content--left-sidebar--list--item" value="q-1">
                                            <span >1</span>
                                        </li>
                                        <li className="main__content--left-sidebar--list--item" value="q-2">
                                            <span >2</span>
                                        </li>
                                        <li className="main__content--left-sidebar--list--item" value="q-3">
                                            <span >3</span>
                                        </li>
                                        <li className="main__content--left-sidebar--listelse--item" value="q-4">
                                            <span>4</span>
                                        </li>
                                    </ul>
                                </div>
                                <div className="main__content--right">
                                    <div className="main__content--right--questions">
                                            <br/>
                                            <h1>{currentQuestion3.question}</h1><br/>
                                            <h3>20 - 29 seconds</h3><br/><br/>
                                            <h4>Problem</h4><br/>
                                            <div className="main_content--right--questions--background">
                                                <h6>{currentQuestion3.background}</h6><br/>
                                            </div>                                         
                                            <div className="line col-xs-12"></div><br/>
                                            <h1>Your Answer</h1><br/><br/>
                                            <div>
                                                <input className="input-submit"onChange={event=>this.handdleInputChange(event)}></input>
                                            </div>
                                            <span className="right"><span className="submit-button"onClick={this.handdlerButtonSubmit}>SUBMIT & CONTINUTE</span></span><br/><br/><br/>
                                            <h3>Debug Console</h3><br/>
                                            <div>
                                                <input className="input-submit" readonly="readOnly"></input>
                                            </div><br/><br/> 
                                            <h5>@ Copyright 2020 Codelynx 2020</h5>            
                                        </div>                              
                                    </div>
                                </div>                            
                        </section>
                    </div>                
            </Fragment>
        );
    }
}
export default Answer4;