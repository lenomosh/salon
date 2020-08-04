import React,{useState} from 'react';
import './App.scss';
import {BrowserRouter as Router,Route} from 'react-router-dom'
import WelcomePage from './components/WelcomePage/WelcomePage' 


const App=()=> {
  const [isLogin, setlogin] = useState(false)
  return (
    <div className="vendor-page">
      <Router>
      
      </Router>
    </div>
  );
}

export default App;
