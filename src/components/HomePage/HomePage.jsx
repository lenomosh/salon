import React from 'react';
import './HomePage.styles.scss'
import './material-dashboard.styles.scss'
import HomePageNav from './HomePageNav'
import DashBoard from '../Dashboard/Dashboard'

const HomePage=(props)=> {
  return (
    <div className="home-page-main">
       <HomePageNav/>
       <div className="main-panel">
       <DashBoard/>
       </div>
       
    </div>
  );
}

export default HomePage;