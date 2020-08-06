
import React from 'react';
import './App.css'
class Dashboard extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="dashboard">
          <h1>Welcome to Urembo palour Admin panel</h1>
          <ul>
            <li>Clients</li>
            <li>Approved Bookings</li>
            <li>Pending Bookings</li>
          </ul>

          <div class="card-deck">
            <div class="card">
            <img className="card-img-top" src='https://images.unsplash.com/photo-1439778615639-28529f7628bc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'/>
              <div class="card-body">
                <h5 class="card-title">Caroline Duke</h5>
                <cite class="card-text">Service: &ensp; Body Massage </cite> <br></br>
                <cite class="card-text">Service: &ensp; Body Massage </cite>
              </div>
              <div class="card-footer">
                <small class="text-muted">Booked 1 day ago</small>
              </div>
                <div class="card-footer">
                  <div class="btn-group" role="group" aria-label="Basic example">
                    <button type="button" class="btn btn-success">Accept</button>
                    <button type="button" class="btn btn-danger">Decline</button>
                    <button type="button" class="btn btn-primary">Pending</button>
                  </div>
                </div>
              </div>
            <div class="card">
            <img className="card-img-top" src='https://images.unsplash.com/photo-1594063596316-aa5f41ceb8dc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'/>
            <div class="card-body">
              <h5 class="card-title">Caroline Duke</h5>
              <cite class="card-text">Service: &ensp; brow treatment </cite>
              </div>
              <div class="card-footer">
                <small class="text-muted">Booked 3 days ago</small>
              </div>
              <div class="card-footer">
                  <div class="btn-group" role="group" aria-label="Basic example">
                    <button type="button" class="btn btn-success">Accept</button>
                    <button type="button" class="btn btn-danger">Decline</button>
                    <button type="button" class="btn btn-primary">Pending</button>
                  </div>
                </div>
            </div>
            <div class="card">
            <img className="card-img-top" src='https://images.unsplash.com/flagged/photo-1553024974-f36354bd6a26?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'/>
            <div class="card-body">
              <h5 class="card-title">Caroline Duke</h5>
              <cite class="card-text">Service: &ensp; Shave </cite>
              </div>
              <div class="card-footer">
                <small class="text-muted">Booked 3 days ago</small>
              </div>
              <div class="card-footer">
                  <div class="btn-group" role="group" aria-label="Basic example">
                    <button type="button" class="btn btn-success">Accept</button>
                    <button type="button" class="btn btn-danger">Decline</button>
                    <button type="button" class="btn btn-primary">Pending</button>
                  </div>
                </div>
            </div>
          </div>
          <div class="card-deck">
            <div class="card">
            <img className="card-img-top" src='https://images.unsplash.com/photo-1552457499-7e1eed6893f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'/>
            <div class="card-body">
              <h5 class="card-title">Caroline Duke</h5>
              <cite class="card-text">Service: &ensp; Body scrubs</cite>
              </div>
              <div class="card-footer">
                <small class="text-muted">Booked 4 days ago</small>
              </div>
              <div class="card-footer">
                  <div class="btn-group" role="group" aria-label="Basic example">
                    <button type="button" class="btn btn-success">Accept</button>
                    <button type="button" class="btn btn-danger">Decline</button>
                    <button type="button" class="btn btn-primary">Pending</button>
                  </div>
                </div>
            </div>
            <div class="card">
            <img className="card-img-top" src='https://images.unsplash.com/photo-1583759532753-c381535a04dd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'/>
            <div class="card-body">
              <h5 class="card-title">Caroline Duke</h5>
              <cite class="card-text">Service: &ensp; Waxing </cite>
              </div>
              <div class="card-footer">
                <small class="text-muted">Booked 4 days ago</small>
              </div>
              <div class="card-footer">
                  <div class="btn-group" role="group" aria-label="Basic example">
                    <button type="button" class="btn btn-success">Accept</button>
                    <button type="button" class="btn btn-danger">Decline</button>
                    <button type="button" class="btn btn-primary">Pending</button>
                  </div>
                </div>
            </div>
            <div class="card">
            <img className="card-img-top" src='https://images.unsplash.com/photo-1456327102063-fb5054efe647?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'/>
            <div class="card-body">
              <h5 class="card-title">Caroline Duke</h5>
              <cite class="card-text">Service: &ensp; Body Massage </cite>
              </div>
              <div class="card-footer">
                <small class="text-muted">Booked 5 days ago</small>
              </div>
              <div class="card-footer">
                  <div class="btn-group" role="group" aria-label="Basic example">
                    <button type="button" class="btn btn-success">Accept</button>
                    <button type="button" class="btn btn-danger">Decline</button>
                    <button type="button" class="btn btn-primary">Pending</button>
                  </div>
                </div>
            </div>
          </div>
          <div class="card-deck">
            <div class="card">
            <img className="card-img-top" src='https://images.unsplash.com/photo-1566219385696-291da818905f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'/>
            <div class="card-body">
              <h5 class="card-title">Caroline Duke</h5>
              <cite class="card-text">Service: &ensp; Colour Care </cite>
              </div>
              <div class="card-footer">
                <small class="text-muted">Booked 5 days ago</small>
              </div>
              <div class="card-footer">
                  <div class="btn-group" role="group" aria-label="Basic example">
                    <button type="button" class="btn btn-success">Accept</button>
                    <button type="button" class="btn btn-danger">Decline</button>
                    <button type="button" class="btn btn-primary">Pending</button>
                  </div>
                </div>
            </div>
            <div class="card">
            <img className="card-img-top" src='https://images.unsplash.com/photo-1588361035546-6e151e5db03a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'/>
            <div class="card-body">
              <h5 class="card-title">Caroline Duke</h5>
              <cite class="card-text">Service: &ensp; Body Massage </cite>
              </div>
              <div class="card-footer">
                <small class="text-muted">Booked 5 days ago</small>
              </div>
              <div class="card-footer">
                  <div class="btn-group" role="group" aria-label="Basic example">
                    <button type="button" class="btn btn-success">Accept</button>
                    <button type="button" class="btn btn-danger">Decline</button>
                    <button type="button" class="btn btn-primary">Pending</button>
                  </div>
                </div>
            </div>
            <div class="card">
            <img className="card-img-top" src='https://images.unsplash.com/photo-1561742026-49ec5faa1b95?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'/>
            <div class="card-body">
              <h5 class="card-title">Caroline Duke</h5>
              <cite class="card-text">Service: &ensp; Moisturising </cite>
              </div>
              <div class="card-footer">
                <small class="text-muted">Booked 5 days ago</small>
              </div>
              <div class="card-footer">
                  <div class="btn-group" role="group" aria-label="Basic example">
                    <button type="button" class="btn btn-success">Accept</button>
                    <button type="button" class="btn btn-danger">Decline</button>
                    <button type="button" class="btn btn-primary">Pending</button>
                  </div>
                </div>
            </div>
          </div>
        </div>
      
</React.Fragment>
    );
  }
}

export default Dashboard;