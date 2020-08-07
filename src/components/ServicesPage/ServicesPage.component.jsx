import React, { useState } from 'react'
import "./ServicesPage.styles.scss"
import { Link } from 'react-router-dom'
const ServicesPage = () => {
	 const [service,setService]=useState('')	

    return (
        <div className="servicesPage">
            <div className="intro">
                <h1><span className='pop'>Popular </span> <span className='pro'>Procedures</span> </h1>
                <p>Where beauty is a illumination of your soul </p>
            </div>
            <div className="logo">
							<nav class="nav">
							
								<a class="nav-link" onClick={()=>{setService('Hair');alert('ENTER LOCATION')}} href="#loc-form">HAIR</a>
								<a class="nav-link" onClick={()=>{setService('Nails');alert('ENTER LOCATION')}} href="#loc-form">NAILS</a>
								<a class="nav-link" onClick={()=>{setService('Massage');alert('ENTER LOCATION')}} href="#loc-form">MASSAGE</a>
								<a class="nav-link" onClick={()=>{setService('Spa');alert('ENTER LOCATION')}} href="#loc-form">SPA</a>
								<a class="nav-link" onClick={()=>{setService('Barber');alert('ENTER LOCATION')}} href="#loc-form">BARBER</a>
								<a class="nav-link" onClick={()=>{setService('Brows');alert('ENTER LOCATION')}} href="#loc-form">BROWS</a>
								<a class="nav-link" onClick={()=>{setService('Waxing');alert('ENTER LOCATION')}} href="#loc-form">WAXING</a>
							</nav>  
							<img src="images/services/portfolio.gif" alt=""/>
            </div>
            <div className='location'>
                <h1><span className='pop'>LOCATION</span></h1>
                <p>Your are required to input you current loacation so that we can locate spas around you </p>
                <form id="loc-form" action="location">
                    <div className='raw'>
                        <div classNameName="form-wrapper">
                            <div classNameName="form-group">
                                <input type="text" id="cus-location" className='col-md-4' className="form-control" placeholder="Enter your location"/>
                                <a href="#" className="btn btn-purple btn-md active mt-4" clarole="button" id='button'>SEARCH</a>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default ServicesPage
{/* 
            <div classNameName="Services"></div>
                <p>Select service that you are interested in.</p>
                <div classNameName="row">
                    {state.map( element=> 
                        <div classNameName="col-md-4" id="hair">
                           
                            <Link to="services/show" classNameName="btn btn-purple btn-lg active" >Hair</Link >
                        </div>
                    )}
                   
                   
                </div>
            </div>*/}
