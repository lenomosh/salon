import React from 'react';
import './ShopAppsPage.styles.scss'

const ShopAppsPage=(props)=> {
  return (
    <div className="shop-apps-page">
      <div class="card">
        <div class="card-header card-header-primary">
          <h4 class="card-title ">Appointments</h4>
        </div>
        <div class="card-body">
          <div class="table-responsive">
            <table class="table">
              <thead class=" text-primary">
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
              </thead>
              <tbody>

                <tr>
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
                  <td class="text-primary">
                    Pending...
                  </td>
                  <td class="text-danger">
                    <a href='#'>Decline</a>
                  </td>
                  <td class="text-success">
                  <a href='#'>Approve</a>
                  </td>
                </tr>
                <tr>
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
                  <td class="text-primary">
                    Approved
                  </td>
                  <td class="text-primary">
                    <a href='#'>Decline</a>
                  </td>
                </tr>
                <tr>
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
                  <td class="text-primary">
                   Declined
                  </td>
                  <td class="text-success">
                  </td>
                  <td class="text-success">
                  <a href='#'>Approve</a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShopAppsPage;