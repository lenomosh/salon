import React from 'react';
import './App.scss';
import { Switch, Route } from 'react-router-dom';
import ServicesPage from './components/ServicesPage/ServicesPage.component';
import ServiceShow from './components/ServicesPage/show/show.component';
import ServiceBarbershop from './components/ServicesPage/barbershop/barbershop.component';
import ServiceMassage from './components/ServicesPage/massage.component';


function App() {
  return (
    <div >
        <Switch>
            <Route exact path='/services' component={ServicesPage}/>
            <Route exact path='/services/show' component={ServiceShow}/>
            <Route exact path='/services/barbershop' component={ServiceBarbershop}/>
            <Route exact path='/services/massage' component={ServiceMassage}/>
        </Switch>
    </div>
  );
}

export default App;
