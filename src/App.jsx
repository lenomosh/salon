import React,{useState} from 'react';
import './App.scss';
import {BrowserRouter as Router,Route} from 'react-router-dom'
import WelcomePage from './components/WelcomePage/WelcomePage' 
import LoginPage from './components/LoginPage/LoginPage'
import RegistrationPage from './components/RegistrationPage/RegistrationPage';
import HomePage  from './components/HomePage/HomePage'

const App=()=> {
  const [isLogin, setlogin] = useState(false)
  return (
    <div className="vendor-page">
      <Router>
        <div className="welcome-main">
          {isLogin?'':<Route path="/" exact component={WelcomePage}/>}
          <Route path="/vendor-login" component={LoginPage}/>
          <Route path="/vendor-register" component={RegistrationPage}/>
        </div>
        <Route path="/vendor-home" component={HomePage}/>
      </Router>
    </div>
  );
}

export default App;
