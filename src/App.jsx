import React,{useState} from 'react';
import './App.scss';
import {BrowserRouter as Router,Route} from 'react-router-dom'
import WelcomePage from './components/WelcomePage/WelcomePage' 
import LoginPage from './components/LoginPage/LoginPage'
import RegistrationPage from './components/RegistrationPage/RegistrationPage';


const App=()=> {
  const [isLogin, setlogin] = useState(false)
  return (
    <div className="vendor-page">
      <Router>
        {isLogin?'':<Route path="/" exact component={WelcomePage}/>}
        <Route path="/vendor-login" component={LoginPage}/>
        <Route path="/vendor-register" component={RegistrationPage}/>
      </Router>
    </div>
  );
}

export default App;
