import React,{useState} from 'react';
import './App.scss';
import {BrowserRouter as Router,Route} from 'react-router-dom'
import WelcomePage from './components/WelcomePage/WelcomePage' 
import LoginPage from './components/LoginPage/LoginPage'


const App=()=> {
  const [isLogin, setlogin] = useState(false)
  return (
    <div className="vendor-page">
      <Router>
        {isLogin?'':<Route path="/" exact component={WelcomePage}/>}
        <Route path="/login" component={LoginPage}/>
      </Router>
    </div>
  );
}

export default App;
