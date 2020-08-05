import React from 'react'
import './ServicesPage.styles.scss'

const ServicesPage = () => {
    return (
        <div className="servicesPage">
            <h1>LOCATION</h1>
            <p>Youn are required to input you current loacation so that we can locate spas around you </p>
            <form action="location">
                <div className="form-group">
                    <input type="location" className="form-control" placeholder="input location"/>
                    <a href="#" class="btn btn-purple btn-lg active" role="button" id="form">SUBMIT</a>
                </div>
            </form>
            <div className="Services Offered"></div>
            <p>Select service that you are interested in.</p>
            <div className="row">
                <div className="col-md-4" id="hair">
                    <img src="../images/massage.gif" alt=""/>
                    <h6>Massage</h6>
                </div>
                <div className="col-md-4" id="hair">
                    <img src="../images/massage.png" alt=""/>
                    <h6>Massage</h6>
                </div>
                <div className="col-md-4" id="hair">
                    <img src="../images/massage.png" alt=""/>
                    <h6>Massage</h6>
                </div>
            </div>
            <div className="row">
                <div className="col-md-4" id="hair">
                    <img src="../images/massage.png" alt=""/>
                    <h6>Massage</h6>
                </div>
                <div className="col-md-4" id="hair">
                    <img src="../images/massage.png" alt=""/>
                    <h6>Massage</h6>
                </div>
                <div className="col-md-4" id="hair">
                    <img src="../images/massage.png" alt=""/>
                    <h6>Massage</h6>
                </div>
            </div>
        </div>
    )
}

export default ServicesPage
