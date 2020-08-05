import React from 'react';
import './ShopProfilePage.styles.scss'
import ShopImage from './imgs/08.jpg'
const ShopProfilePage=(props)=> {
  return (
    <div className="shop-profile-page">
      <div className="content">
        <div className="container-fluid mt-lg-5">
          <div className="row">
            <div className="col-md-8">
              <div className="card">
                <div className="card-header card-header-primary">
                  <h4 className="card-title">Edit Profile</h4>
                  <p className="card-category">Complete your profile</p>
                </div>
                <div className="card-body">
                  <form id="edit-profile">
                    <div className="row">
                      <div className="col-md-5">
                        <div className="form-group">
                          <label className="bmd-label-floating">Shop name</label>
                          <input type="text" className="form-control" id="shop-name"/>
                        </div>
                      </div>
                      <div className="col-md-3">
                        <div className="form-group">
                          <label className="bmd-label-floating">Owner name</label>
                          <input type="text" className="form-control" id="owner-name" />
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="form-group">
                          <label className="bmd-label-floating">Email address</label>
                          <input type="email" className="form-control" placeholder="Vendor email" disabled/>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <label className="bmd-label-floating">No of employees</label>
                          <input type="number" className="form-control" id="emp-no" />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label className="bmd-label-floating">Contact number</label>
                          <input type="text" className="form-control" id="vendor-contactno" />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-12">
                        <div className="form-group">
                          <label className="bmd-label-floating">Location</label>
                          <input type="text" className="form-control" id="vendor-location"/>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-12">
                        <div className="form-group">
                          <label>Description</label>
                          <div className="form-group">
                            <textarea className="form-control" rows={5} defaultValue={""} id="shop-description" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <button type="submit" className="btn btn-primary pull-right">Update Profile</button>
                    <div className="clearfix" />
                  </form>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card card-profile">
                <div className="card-avatar">
                  <a href="javascript:;">
                    <img className="img" src={ShopImage} />
                  </a>
                </div>
                <div className="card-body">
                  <h6 className="card-category text-gray">About</h6>
                  <h4 className="card-title" id="shop-name-title">Alec Thompson</h4>
                  <p className="card-description" id="shop-abt-desc">
                    Don't be scared of the truth because we need to restart the human foundation in truth And I love you like Kanye loves Kanye I love Rick Owens’ bed design but the back is...
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default ShopProfilePage;