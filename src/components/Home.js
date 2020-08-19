import React, { Fragment, Component } from 'react';
import {Helmet} from 'react-helmet';
import {questions} from '../question';
import isEmpty from '../utils/is-empty';
import {Link} from 'react-router-dom';

class Home extends Component {
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
            status:0,
            time: {}
        };
        this.interval=null;
    }

    componentDidMount(){
         const {state} = this.props.location;
         if(state !== undefined)
         { this.setState({
            status:state.status 
        });}
        const {questions , currentQuestion,currentQuestion1,currentQuestion2,currentQuestion3} = this.state;
        this.displayQuestion(questions,currentQuestion,currentQuestion1,currentQuestion2,currentQuestion3);
        this.startTimer();
    }

    componentWillMount(){
        clearInterval(this.interval);
    };

    startTimer =() =>{
        const countDownTime=Date.now() + 330000;
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
                    alert('time out');
                    this.props.history.push('/summary');
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
            const answer = currentQuestion.answer;
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
    handlerOptionClick = (flag) =>{
        if(this.state.flag !== 1){
            flag = 1;
            this.setState({
                flag
            })
        }
    };
    handlerOptionClick1 = (flag) =>{
        if(this.state.flag !== 2){
            flag = 2;
            this.setState({
                flag
            })
        }
    };

    handlerOptionClick2 = (flag) =>{
        if(this.state.flag !== 3){
            flag = 3;
            this.setState({
                flag
            })
        }
    };

    handlerOptionClick3 = (flag) =>{
        if(this.state.flag !== 4){
            flag = 4;
            this.setState({
                flag
            })
        }
    };

    handlerOptionClickAll = (flag) =>{
        if(this.state.flag !== 0){
            flag = 0;
            this.setState({
                flag
            })
        }
    };
    render () {        
        const {time ,currentQuestion,currentQuestion1,currentQuestion2,currentQuestion3,flag}     = this.state   
        const{state}=this.props.location; 
        let check='Not Answered';
        let Soling = 'SOLVE QUESTION';
        const dow= this.state.status;     
        if(state !== undefined)
        {              
            if(dow === 3 )
            {
                check='Accept';
                Soling='VIEW RESULT';
            }
            if(dow === 2)
            check='Fail';
            Soling='VIEW RESULT';
        }else{
                       
        }
            return(
                <Fragment>
                    <Helmet><title>Hackerank</title></Helmet>
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
                                    <span onClick={this.handlerOptionClickAll} className="fas fa-bars"></span>                               
                                </div>
                                <ul className="main__content--left-sidebar--list flex">
                                    <li className="main__content--left-sidebar--list--item " value="q-1">
                                        <span onClick={this.handlerOptionClick}>1</span>
                                    </li>
                                    <li className="main__content--left-sidebar--list--item" value="q-2">
                                        <span onClick={this.handlerOptionClick1}>2</span>
                                    </li>
                                    <li className="main__content--left-sidebar--list--item" value="q-3">
                                        <span onClick={this.handlerOptionClick2}>3</span>
                                    </li>
                                    <li className="main__content--left-sidebar--list--item" value="q-4">
                                        <span onClick={this.handlerOptionClick3}>4</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="main__content--right">
                                <div className="main__content--right--questions">
                                    <div className="main__content--right--questions--title row">
                                        <div className="col-xs-6">
                                            Questions
                                        </div>
                                        <div className="col-xs-2">
                                            Type
                                        </div>
                                        <div className="col-xs-2">
                                            Status
                                        </div>
                                        <div className="col-xs-2">

                                        </div>
                                        <div className="line col-xs-12"></div>
                                    </div>
                                    <ul className="main__content--right--questions--list">
                                    {(flag === 1 || flag ===0) && 
                                        <li>
                                                <div className="main__content--right--questions--list--item--content row a-center">
                                                    <div className="col-xs-6 flex a-center">
                                                        <div className="num-question">
                                                            Q{currentQuestion.id}
                                                        </div>
                                                        <div className="question-content">
                                                            {currentQuestion.question}
                                                        </div>
                                                    </div>
                                                <div className="col-xs-2 type">
                                                    {currentQuestion.type}
                                                </div>
                                                <div className='col-xs-2'>{check}</div>                   
                                                <div className="col-xs-2">
                                                    <div className="solve">
                                                        <Link to="/question1"className="solve">{Soling}</Link>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="line col-xs-12"></div>
                                        </li>
                                        }
                                        {(flag === 2 || flag === 0) &&
                                        <li>
                                                <div className="main__content--right--questions--list--item--content row a-center">
                                                    <div className="col-xs-6 flex a-center">
                                                        <div className="num-question">
                                                            Q{currentQuestion1.id}
                                                        </div>
                                                        <div className="question-content">
                                                            {currentQuestion1.question}
                                                        </div>
                                                    </div>
                                                <div className="col-xs-2 type">
                                                    {currentQuestion1.type}
                                                </div>
                                                <div className='col-xs-2'>{currentQuestion2.status === 1 ? "Not Answered" : "Done"}</div>                   
                                                <div className="col-xs-2">
                                                    <div className="solve">
                                                        <Link to="/question2" className="solve">{currentQuestion2.status === 1 ? "Solve Question" : "View results"}</Link>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="line col-xs-12"></div>
                                        </li>
                                        }
                                        {(flag === 3 ||flag ===0)&& 
                                        <li>
                                                <div className="main__content--right--questions--list--item--content row a-center">
                                                    <div className="col-xs-6 flex a-center">
                                                        <div className="num-question">
                                                            Q{currentQuestion2.id}
                                                        </div>
                                                        <div className="question-content">
                                                            {currentQuestion2.question}
                                                        </div>
                                                    </div>
                                                <div className="col-xs-2 type">
                                                    {currentQuestion2.type}
                                                </div>
                                                <div className='col-xs-2'>{currentQuestion2.status === 1 ? "Not Answered" : "Done"}</div>                   
                                                <div className="col-xs-2">
                                                    <div className="solve">
                                                        <Link to="/question3" className="solve">{currentQuestion2.status === 1 ? "Solve Question" : "View results"}</Link>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="line col-xs-12"></div>
                                        </li>
                                        }
                                        {(flag === 4 || flag === 0) && 
                                        <li>
                                                <div className="main__content--right--questions--list--item--content row a-center">
                                                    <div className="col-xs-6 flex a-center">
                                                        <div className="num-question">
                                                            Q{currentQuestion3.id}
                                                        </div>
                                                        <div className="question-content">
                                                            {currentQuestion3.question}
                                                        </div>
                                                    </div>
                                                <div class="col-xs-2 type">
                                                    {currentQuestion3.type}
                                                </div>
                                                <div className='col-xs-2'>{check}</div>                   
                                                <div className="col-xs-2">
                                                    <div className="solve">
                                                        <Link to="/question4" className="solve">{Soling}</Link>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="line col-xs-12"></div>
                                        </li>
                                        }
                                    </ul>
                                    <div className="Col-xs-12">
                                        <Link to="/summary"><button className="done-button">I DONE WITH THIS TEST</button></Link>
                                    </div><br/><br/><br/><br/><br/>
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
export default Home;