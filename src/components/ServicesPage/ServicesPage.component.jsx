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
                    <a href="#" class="btn btn-purple btn-lg active"  role="button" id="button">SUBMIT</a>
                </div>
            </form>
            <div className="Services"></div>
                <p>Select service that you are interested in.</p>
                <div className="row">
                    <div className="col-md-4" id="hair">
                        <img src="images/services/hair.gif" alt=""/>
                        <h2> Hair</h2>
                    </div>
                    <div className="col-md-4" id="hair">
                        <img src="images/services/mens.jpg" alt=""/>
                        <h2>barber shop</h2>
                    </div>
                    <div className="col-md-4" id="hair">
                        <img src="images/services/hairremoval.gif" alt=""/>
                        <h2>Hair Removal</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4" id="hair">
                        <img src="images/services/massage.png" alt=""/>
                        <h2>Massage</h2>
                    </div>
                    <div className="col-md-4" id="hair">
                        <img src="images/services/nails.gif" alt=""/>
                        <h2>Nail</h2>
                    </div>
                    <div className="col-md-4" id="hair">
                        <img src="images/services/facial.gif" alt=""/>
                        <h2>Face</h2>
                    </div>
                </div>
        </div>
    )
}

export default ServicesPage
