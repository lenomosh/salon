import React from 'react';

const HomePageNav=(props)=> {
  return (
    <div className='home-page-nav'>
      <div className="sidebar" data-color="purple" data-background-color="white" data-image="../assets/img/sidebar-1.jpg">
        <div className="logo">
          <span className="simple-text logo-normal shop-name">Shop Name</span>
        </div>
        <div className="sidebar-wrapper">
          <ul className="nav">
            <li className="nav-item active">
              <a className="nav-link" href="./dashboard.html">
                <i className="material-icons">dashboard</i>
                <p>Dashboard</p>
              </a>
            </li>
            <li className="nav-item ">
              <a className="nav-link" href="./user.html">
                <i className="material-icons">person</i>
                <p>Shop Profile</p>
              </a>
            </li>
            <li className="nav-item ">
              <a className="nav-link" href="./tables.html">
                <i className="material-icons">content_paste</i>
                <p>Shop Services</p>
              </a>
            </li>
            <li className="nav-item ">
              <a className="nav-link" href="./typography.html">
                <i className="material-icons">library_books</i>
                <p>Appointments </p>
              </a>
            </li>
            <li className="nav-item ">
              <a className="nav-link" href="./icons.html">
                <i className="material-icons">bubble_chart</i>
                <p>Sign out</p>
              </a>
            </li>
            <li className="nav-item ">
              <a className="nav-link" href="./map.html">
                <i className="material-icons">location_ons</i>
                <p>Maps</p>
              </a>
            </li>
            <li className="nav-item ">
              <a className="nav-link" href="./notifications.html">
                <i className="material-icons">notifications</i>
                <p>Notifications</p>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default HomePageNav;