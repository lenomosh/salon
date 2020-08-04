import React from 'react';
import './App.scss';
import { Switch, Route } from 'react-router-dom';
import ServicesPage from './components/ServicesPage/ServicesPage.component';
import LandingPage from './components/LandingPage/LangingPage.component';
import ContactsPage from './components/ContactsPage/ContactsPage.component';

function App() {
  return (
    <div >
        <Switch>
            <Route exact path='/' component={LandingPage}/>
            <Route exact path='/services' component={ServicesPage}/>
           <Route exact path='/contacts' component={ContactsPage}/>
        </Switch>
    </div>
  );
}

export default App;
