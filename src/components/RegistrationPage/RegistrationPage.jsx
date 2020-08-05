import React from 'react';
import './RegistrationPage.styles.scss'
import {Link} from 'react-router-dom'

const RegistrationPage=(props)=> {
  return (
    <div className="registration-page text-white">
      <div className="registration-form">
        <form id="reg-form">
          <Link className="nav-link" to={"/"}><img src="https://img.icons8.com/color/24/000000/logout-rounded-left--v1.png"/></Link>
          <h3>Sign Up</h3>
          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <label>Shop name</label>
                <input type="text" className="form-control" id="shop-name" placeholder="Shop name" />
              </div>

              <div className="form-group">
                <label>Number of employees</label>
                <input type="number" className="form-control" id="emp-no" placeholder="No of employees" />
              </div>

              <div className="form-group">
                <label>Owner Name</label>
                <input type="text" className="form-control" id="owner-name" placeholder="Owner name" />
              </div>

              <div className="form-group">
                <label>Email Address</label>
                <input type="email" className="form-control" id="vendor-email" placeholder="Vendor Email" />
              </div>
            </div>
            <div className="col-md-6">
            <div className="form-group">
            <label>
              Shop services:
              <select class="form-control drop" id="vendor-services" multiple required>
                <option>Hair</option>
                <option>Nails</option>
                <option>Massage</option>
                <option>Spa</option>
                <option>Barber</option>
                <option>Brow</option>
                <option>Waxing</option>
              </select>
            </label>
          </div>  
          <div className="form-group">
            <label>Contact number</label>
            <input type="number" className="form-control" id="vendor-contactno" placeholder="Vendor number" />
          </div>
          <div className="form-group">
            <label>Location</label>
            <input type="text" className="form-control" id="vendor-location" placeholder="Vendor Location" />
          </div>
          <div className="form-group">
            <label>Description</label>
            <textarea className="form-control" rows={5} defaultValue={""} id="shop-description" placeholder="Shop description"/>
          </div>
          <div className="form-group">
            <label>Password</label>
            <input type="password" className="form-control" id="vendor-password" placeholder="Enter password" />
          </div>
            </div>
          </div>
          
         

          <button type="submit" className="btn btn-primary btn-block">Get started</button>
          <p className="forgot-password text-right">
            Already registered? <Link to={"/vendor-login"}><strong>Log in</strong> </Link>
          </p>
        </form>
      </div>      
    </div>
  );
}

export default RegistrationPage;