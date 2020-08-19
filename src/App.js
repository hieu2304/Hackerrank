import React from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import Home from './components/Home';
import Answer from './components/Answer';
import Answer2 from './components/Answer2';
import Answer3 from './components/Answer3';
import Answer4 from './components/Answer4';
import Summary from './components/Summary';
function App() {
  
  return (
    <Router>
      <Route path="/"exact component={Home}/>
      <Route path="/question2"exact component={Answer2}/>
      <Route path="/question1"exact component={Answer}/>
      <Route path="/question3"exact component={Answer3}/>
      <Route path="/question4"exact component={Answer4}/>
      <Route path="/summary"exact component={Summary}/>
    </Router>
  );
}

export default App;
