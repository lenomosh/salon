import React from 'react';
import './HomePage.styles.scss'
import './material-dashboard.styles.scss'
import HomePageNav from './HomePageNav'

const HomePage=(props)=> {
  return (
    <div className="home-page-main">
       <HomePageNav/>
    </div>
  );
}

export default HomePage;