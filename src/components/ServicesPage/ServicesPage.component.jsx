import React from 'react'
import './ServicesPage.styles.scss'

const ServicesPage = () => {
    return (
        <div className="servicesPage">
            <h1>LOCATION</h1>
            <P>Youn are required to input you current loacation so that we can locate spas around you </P>
            <form action="location">
                <div className="form-group">
                    <input type="location" className="form-control" placeholder="input location"/>
                    <a href="#" class="btn btn-purple btn-lg active" role="button">SUBMIT</a>
                </div>
            </form>
        </div>
    )
}

export default ServicesPage
