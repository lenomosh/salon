import React from 'react';
import {Link} from 'react-router-dom'
import ShopImg from '../../imgs/08.jpg'

const HomePageNav=(props)=> {
  return (
    <div className='home-page-nav'>
      <div className="sidebar" data-color="purple" data-background-color="white" data-image="../assets/img/sidebar-1.jpg">
      <div className="shop-img">
                  <a href="javascript:;">
                    <img className="img" src={ShopImg} />
                  </a>
          </div>
        <div className="logo">
       
          <span className="simple-text logo-normal shop-name">Shop Name</span>
        </div>
        <div className="sidebar-wrapper">
          <ul className="nav">
            <li className="nav-item active">
              <Link to="/vendor-home" className="nav-link">
                <i className="material-icons">dashboard</i>
                <p>Dashboard</p>
              </Link>
            </li>
            <li className="nav-item ">
              <Link to="/vendor-home/shop-profile" className="nav-link">
                <i className="material-icons">person</i>
                <p>Shop Profile</p>
              </Link>
            </li>
            <li className="nav-item ">
              <Link to="/vendor-home/shop-services" className="nav-link" >
                <i className="material-icons">content_paste</i>
                <p>Shop Services</p>
              </Link>
            </li>
            <li className="nav-item ">
              <Link to="/vendor-home/appointments" className="nav-link">
                <i className="material-icons">library_books</i>
                <p>Appointments </p>
              </Link>
            </li>
            <li className="nav-item ">
              <a className="nav-link" href="#" onClick={()=>{window.location.href='/'}}>
                <i className="material-icons">bubble_chart</i>
                <p>Sign out</p>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default HomePageNav;