import React from 'react';

const Dashboard=(props) =>{
  const divStyle = {
    background:'gray'
  };
  return (
    <div style={divStyle} className="dashboard">
    
      <div className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="card card-stats">
                <div className="card-header card-header-warning card-header-icon">
                  <div className="card-icon">
                    <i className="material-icons">content_copy</i>
                  </div>
                  <p className="card-category">Used Space</p>
                  <h3 className="card-title">49/50
                    <small>GB</small>
                  </h3>
                </div>
                <div className="card-footer">
                  <div className="stats">
                    <i className="material-icons text-danger">warning</i>
                    <a href="javascript:;">Get More Space...</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="card card-stats">
                <div className="card-header card-header-success card-header-icon">
                  <div className="card-icon">
                    <i className="material-icons">store</i>
                  </div>
                  <p className="card-category">Revenue</p>
                  <h3 className="card-title">$34,245</h3>
                </div>
                <div className="card-footer">
                  <div className="stats">
                    <i className="material-icons">date_range</i> Last 24 Hours
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="card card-stats">
                <div className="card-header card-header-danger card-header-icon">
                  <div className="card-icon">
                    <i className="material-icons">info_outline</i>
                  </div>
                  <p className="card-category">Fixed Issues</p>
                  <h3 className="card-title">75</h3>
                </div>
                <div className="card-footer">
                  <div className="stats">
                    <i className="material-icons">local_offer</i> Tracked from Github
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="card card-stats">
                <div className="card-header card-header-info card-header-icon">
                  <div className="card-icon">
                    <i className="fa fa-twitter" />
                  </div>
                  <p className="card-category">Followers</p>
                  <h3 className="card-title">+245</h3>
                </div>
                <div className="card-footer">
                  <div className="stats">
                    <i className="material-icons">update</i> Just Updated
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="card card-chart">
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
              </div>
            </div>
            <div className="col-md-4">
              <div className="card card-chart">
                <div className="card-header card-header-warning">
                  <div className="ct-chart" id="websiteViewsChart" />
                </div>
                <div className="card-body">
                  <h4 className="card-title">Email Subscriptions</h4>
                  <p className="card-category">Last Campaign Performance</p>
                </div>
                <div className="card-footer">
                  <div className="stats">
                    <i className="material-icons">access_time</i> campaign sent 2 days ago
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card card-chart">
                <div className="card-header card-header-danger">
                  <div className="ct-chart" id="completedTasksChart" />
                </div>
                <div className="card-body">
                  <h4 className="card-title">Completed Tasks</h4>
                  <p className="card-category">Last Campaign Performance</p>
                </div>
                <div className="card-footer">
                  <div className="stats">
                    <i className="material-icons">access_time</i> campaign sent 2 days ago
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 col-md-12">
              <div className="card">
                <div className="card-header card-header-tabs card-header-primary">
                  <div className="nav-tabs-navigation">
                    <div className="nav-tabs-wrapper">
                      <span className="nav-tabs-title">Tasks:</span>
                      <ul className="nav nav-tabs" data-tabs="tabs">
                        <li className="nav-item">
                          <a className="nav-link active" href="#profile" data-toggle="tab">
                            <i className="material-icons">bug_report</i> Bugs
                            <div className="ripple-container" />
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="#messages" data-toggle="tab">
                            <i className="material-icons">code</i> Website
                            <div className="ripple-container" />
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="#settings" data-toggle="tab">
                            <i className="material-icons">cloud</i> Server
                            <div className="ripple-container" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="card-body">
                  <div className="tab-content">
                    <div className="tab-pane active" id="profile">
                      <table className="table">
                        <tbody>
                          <tr>
                            <td>
                              <div className="form-check">
                                <label className="form-check-label">
                                  <input className="form-check-input" type="checkbox" defaultValue defaultChecked />
                                  <span className="form-check-sign">
                                    <span className="check" />
                                  </span>
                                </label>
                              </div>
                            </td>
                            <td>Sign contract for "What are conference organizers afraid of?"</td>
                            <td className="td-actions text-right">
                              <button type="button" rel="tooltip" title="Edit Task" className="btn btn-primary btn-link btn-sm">
                                <i className="material-icons">edit</i>
                              </button>
                              <button type="button" rel="tooltip" title="Remove" className="btn btn-danger btn-link btn-sm">
                                <i className="material-icons">close</i>
                              </button>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div className="form-check">
                                <label className="form-check-label">
                                  <input className="form-check-input" type="checkbox" defaultValue />
                                  <span className="form-check-sign">
                                    <span className="check" />
                                  </span>
                                </label>
                              </div>
                            </td>
                            <td>Lines From Great Russian Literature? Or E-mails From My Boss?</td>
                            <td className="td-actions text-right">
                              <button type="button" rel="tooltip" title="Edit Task" className="btn btn-primary btn-link btn-sm">
                                <i className="material-icons">edit</i>
                              </button>
                              <button type="button" rel="tooltip" title="Remove" className="btn btn-danger btn-link btn-sm">
                                <i className="material-icons">close</i>
                              </button>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div className="form-check">
                                <label className="form-check-label">
                                  <input className="form-check-input" type="checkbox" defaultValue />
                                  <span className="form-check-sign">
                                    <span className="check" />
                                  </span>
                                </label>
                              </div>
                            </td>
                            <td>Flooded: One year later, assessing what was lost and what was found when a ravaging rain swept through metro Detroit
                            </td>
                            <td className="td-actions text-right">
                              <button type="button" rel="tooltip" title="Edit Task" className="btn btn-primary btn-link btn-sm">
                                <i className="material-icons">edit</i>
                              </button>
                              <button type="button" rel="tooltip" title="Remove" className="btn btn-danger btn-link btn-sm">
                                <i className="material-icons">close</i>
                              </button>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div className="form-check">
                                <label className="form-check-label">
                                  <input className="form-check-input" type="checkbox" defaultValue defaultChecked />
                                  <span className="form-check-sign">
                                    <span className="check" />
                                  </span>
                                </label>
                              </div>
                            </td>
                            <td>Create 4 Invisible User Experiences you Never Knew About</td>
                            <td className="td-actions text-right">
                              <button type="button" rel="tooltip" title="Edit Task" className="btn btn-primary btn-link btn-sm">
                                <i className="material-icons">edit</i>
                              </button>
                              <button type="button" rel="tooltip" title="Remove" className="btn btn-danger btn-link btn-sm">
                                <i className="material-icons">close</i>
                              </button>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className="tab-pane" id="messages">
                      <table className="table">
                        <tbody>
                          <tr>
                            <td>
                              <div className="form-check">
                                <label className="form-check-label">
                                  <input className="form-check-input" type="checkbox" defaultValue defaultChecked />
                                  <span className="form-check-sign">
                                    <span className="check" />
                                  </span>
                                </label>
                              </div>
                            </td>
                            <td>Flooded: One year later, assessing what was lost and what was found when a ravaging rain swept through metro Detroit
                            </td>
                            <td className="td-actions text-right">
                              <button type="button" rel="tooltip" title="Edit Task" className="btn btn-primary btn-link btn-sm">
                                <i className="material-icons">edit</i>
                              </button>
                              <button type="button" rel="tooltip" title="Remove" className="btn btn-danger btn-link btn-sm">
                                <i className="material-icons">close</i>
                              </button>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div className="form-check">
                                <label className="form-check-label">
                                  <input className="form-check-input" type="checkbox" defaultValue />
                                  <span className="form-check-sign">
                                    <span className="check" />
                                  </span>
                                </label>
                              </div>
                            </td>
                            <td>Sign contract for "What are conference organizers afraid of?"</td>
                            <td className="td-actions text-right">
                              <button type="button" rel="tooltip" title="Edit Task" className="btn btn-primary btn-link btn-sm">
                                <i className="material-icons">edit</i>
                              </button>
                              <button type="button" rel="tooltip" title="Remove" className="btn btn-danger btn-link btn-sm">
                                <i className="material-icons">close</i>
                              </button>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className="tab-pane" id="settings">
                      <table className="table">
                        <tbody>
                          <tr>
                            <td>
                              <div className="form-check">
                                <label className="form-check-label">
                                  <input className="form-check-input" type="checkbox" defaultValue />
                                  <span className="form-check-sign">
                                    <span className="check" />
                                  </span>
                                </label>
                              </div>
                            </td>
                            <td>Lines From Great Russian Literature? Or E-mails From My Boss?</td>
                            <td className="td-actions text-right">
                              <button type="button" rel="tooltip" title="Edit Task" className="btn btn-primary btn-link btn-sm">
                                <i className="material-icons">edit</i>
                              </button>
                              <button type="button" rel="tooltip" title="Remove" className="btn btn-danger btn-link btn-sm">
                                <i className="material-icons">close</i>
                              </button>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div className="form-check">
                                <label className="form-check-label">
                                  <input className="form-check-input" type="checkbox" defaultValue defaultChecked />
                                  <span className="form-check-sign">
                                    <span className="check" />
                                  </span>
                                </label>
                              </div>
                            </td>
                            <td>Flooded: One year later, assessing what was lost and what was found when a ravaging rain swept through metro Detroit
                            </td>
                            <td className="td-actions text-right">
                              <button type="button" rel="tooltip" title="Edit Task" className="btn btn-primary btn-link btn-sm">
                                <i className="material-icons">edit</i>
                              </button>
                              <button type="button" rel="tooltip" title="Remove" className="btn btn-danger btn-link btn-sm">
                                <i className="material-icons">close</i>
                              </button>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div className="form-check">
                                <label className="form-check-label">
                                  <input className="form-check-input" type="checkbox" defaultValue defaultChecked />
                                  <span className="form-check-sign">
                                    <span className="check" />
                                  </span>
                                </label>
                              </div>
                            </td>
                            <td>Sign contract for "What are conference organizers afraid of?"</td>
                            <td className="td-actions text-right">
                              <button type="button" rel="tooltip" title="Edit Task" className="btn btn-primary btn-link btn-sm">
                                <i className="material-icons">edit</i>
                              </button>
                              <button type="button" rel="tooltip" title="Remove" className="btn btn-danger btn-link btn-sm">
                                <i className="material-icons">close</i>
                              </button>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="card">
                <div className="card-header card-header-warning">
                  <h4 className="card-title">Employees Stats</h4>
                  <p className="card-category">New employees on 15th September, 2016</p>
                </div>
                <div className="card-body table-responsive">
                  <table className="table table-hover">
                    <thead className="text-warning">
                      <tr><th>ID</th>
                        <th>Name</th>
                        <th>Salary</th>
                        <th>Country</th>
                      </tr></thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>Dakota Rice</td>
                        <td>$36,738</td>
                        <td>Niger</td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>Minerva Hooper</td>
                        <td>$23,789</td>
                        <td>Curaçao</td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td>Sage Rodriguez</td>
                        <td>$56,142</td>
                        <td>Netherlands</td>
                      </tr>
                      <tr>
                        <td>4</td>
                        <td>Philip Chaney</td>
                        <td>$38,735</td>
                        <td>Korea, South</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;