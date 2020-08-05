import React from 'react';
import './ShopAppsPage.styles.scss'

//Appointment Pending status Component
const AppPending=(props)=>{
  return(
    <tr className="app-pending">
      <td>
        Dennis Kamunya
      </td>
      <td>
        Massage
      </td>
      <td>
        Thursday 4th 2.30pm
      </td>
      <td>
        No
      </td>
      <td className="text-primary">
        Pending...
      </td>
      <td className="text-danger">
        <button type="button" rel="tooltip" className="btn btn-outline-danger btn-round">
          <i className="material-icons">close</i>
        </button>
      </td>
      <td className="text-success">
        <button type="button" rel="tooltip" className="btn btn-outline-success btn-round">
          <i className="material-icons">check_circle</i>
        </button>
      </td>
    </tr>

  )
}

//Appointment Approved status Component
const AppApproved=(props)=>{
  return(
    <tr className="app-approved">
      <td>
        Dennis Kamunya
      </td>
      <td>
        Massage
      </td>
      <td>
        Thursday 4th 2.30pm
      </td>
      <td>
        Yes
      </td>
      <td className="text-primary">
        Approved
      </td>
      <td className="text-primary">
        <button type="button" rel="tooltip" className="btn btn-outline-danger btn-round">
          <i className="material-icons">close</i>
        </button>
      </td>
    </tr>

  )
}

//Appointment Declined status Component
const AppDeclined=(props)=>{
  return(
    <tr className="app-declined">
      <td>
        Dennis Kamunya
      </td>
      <td>
        Massage
      </td>
      <td>
        Thursday 4th 2.30pm
      </td>
      <td>
        No
      </td>
      <td className="text-primary">
      Declined
      </td>
      <td className="text-success">
      </td>
      <td className="text-success">
        <button type="button" rel="tooltip" className="btn btn-outline-success btn-round">
          <i className="material-icons">check_circle</i>
        </button>
      </td>
    </tr>

  )
}

const ShopAppsPage=(props)=> {
  return (
    <div className="shop-apps-page">
      <div className="card">
        <div className="card-header card-header-primary">
          <h4 className="card-title ">Appointments</h4>
        </div>
        <div className="card-body">
          <div className="table-responsive">
            <table className="table">
              <thead className=" text-primary">
                <tr>
                  <th>
                    Customer Name
                  </th>
                  <th>
                    Service
                  </th>
                  <th>
                    Time
                  </th>
                  <th>
                    Payment
                  </th>
                  <th>
                    Status
                  </th>
                  <th>
                    Decline
                  </th>
                  <th>
                    Approve
                  </th>
                </tr>
              </thead>
              <tbody>
                <AppPending/>
                <AppApproved/>
                <AppDeclined/>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShopAppsPage;