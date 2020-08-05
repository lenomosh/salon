import React from 'react';
import {BrowserRouter as Router,Route,Redirect} from 'react-router-dom'
import './HomePage.styles.scss'
import './material-dashboard.styles.scss'
import HomePageNav from './HomePageNav'
import DashBoard from '../Dashboard/Dashboard'
import ShopProfilePage from '../ShopProfilePage/ShopProfilePage'

const HomePage=(props)=> {
  return (
    <Router>
      <div className="home-page-main">
        <HomePageNav/>
        <div className="main-panel">
          <Route path="/vendor-home" exact component={DashBoard}/>
          <Route path="/vendor-home/shop-profile" component={ShopProfilePage}/>
          <Route path="/vendor-home/shop-services" component={ShopServicesPage}/>
          <Route path="/vendor-home/appointments" component={ShopAppPage}/>
        </div>
    </div>
    </Router>
    
  );
}

export default HomePage;