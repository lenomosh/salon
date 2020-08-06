import React from 'react';
import {Link} from 'react-router-dom'
import ShopImg from '../../imgs/profile/shop.jpg'

const Dashboard=(props) =>{
  return (
    <div className="dashboard">
    
      <div className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-6">
              <Link to="/vendor-home/appointments" className="card card-stats">
                <div className="card-header card-header-danger card-header-icon">
                  <div className="card-icon">
                    <i className="material-icons">announcement</i>
                  </div>
                  <p className="card-category">Appointments</p>
                  <h3 className="card-title" id="app-no">75</h3>
                </div>
                <div className="card-footer">
                  <div className="stats">
                    <i className="material-icons">update</i> Just Updated
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6">
              <Link to="/vendor-home/appointments" className="card card-stats">
                <div className="card-header card-header-info card-header-icon">
                  <div className="card-icon">
                    <i className="material-icons">group_work</i>
                  </div>
                  <p className="card-category">Clients</p>
                  <h3 className="card-title" id="clients-no">+245</h3>
                </div>
                <div className="card-footer">
                  <div className="stats">
                    <i className="material-icons">update</i> Just Updated
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="card card-stats">
                <div className="card-header card-header-warning card-header-icon">
                  <div className="card-icon">
                    <i className="material-icons">content_copy</i>
                  </div>
                  <p className="card-category">Used Space</p>
                  <h3 className="card-title">30/50</h3>
                </div>
                <div className="card-footer">
                  <div className="stats">
                    <i className="material-icons text-danger">warning</i>
                    <a href="#">Add More Space...</a>
                  </div>
                </div>
              </div>
            </div>
         
           
          </div>
          <div className="row">
            <div className="col-md-6">
              <Link to="/vendor-home/shop-services" className="card card-chart">
                <div className="card-header card-header-success">
                  <div className="ct-chart" id="dailySalesChart" />
                </div>
                <div className="card-body">
                  <h4 className="card-title">Daily Sales</h4>
                  <p className="card-category">
                    <span className="text-success"><i className="fa fa-long-arrow-up" /> 55% </span> increase in today sales.</p>
                </div>
                <div className="card-footer">
                  <div className="stats">
                    <i className="material-icons">access_time</i> updated 4 minutes ago
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-md-6">
              <Link to="/vendor-home/shop-profile" className="card card-stats">
                <div className="card-header card-header-success card-header-icon">
                  <div className="card-icon">
                    <i className="material-icons">store</i>
                  </div>
                  <p className="card-category">Employees stats</p>
                  <h3 className="card-title">4</h3>
                  
                </div>
                <div className="card-footer">
                  <div className="stats">
                    <i className="material-icons">date_range</i> Last 24 Hours
                  </div>
                </div>
              </Link>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 col-md-12">
              <Link to="/vendor-home/shop-profile" className="card card-profile">
                <div className="card-avatar">
                    <img className="img" src={ShopImg} />
                </div>
                <div className="card-body">
                  <h6 className="card-category text-gray">Shop owner</h6>
                  <h4 className="card-title">Shop name</h4>
                  <p className="card-description">
                    Don't be scared of the truth because we need to restart the human foundation in truth And I love you like Kanye loves Kanye I love Rick Owens’ bed design but the back is...
                  </p>
                 
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;