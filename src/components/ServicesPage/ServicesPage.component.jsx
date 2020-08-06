import React, { useState } from 'react'
import "./ServicesPage.styles.scss"
import { Link } from 'react-router-dom'
const ServicesPage = () => {
    // var arr=[1,2,3,4,5,6]
    // const [state, setstate] = useState([1,2,3,4,5])
    // console.log (arr)
    return (
        <div className="servicesPage">
            <div className="intro">
                <h1><span className='pop'>Popular </span> <span className='pro'>Procedures</span> </h1>
                <p>Where beauty is a illumination of your soul </p>
            </div>
            <div className="logo">
               <nav>
                   <ul className="nav-links">
                        <li>
                            <Link to="services/show" classNameName="btn btn-purple btn-lg active" >Hair</Link >
                                <ul id="nav-links">
                                    <li>
                                        <Link to="services/show" classNameName="btn btn-purple btn-lg active" >braiding</Link >
                                    </li>
                                    <li>
                                        <Link to="services/show" classNameName="btn btn-purple btn-lg active" >weaving</Link >
                                    </li>
                                    <li>
                                        <Link to="services/show" classNameName="btn btn-purple btn-lg active" >blowdry</Link >
                                    </li>
                                    <li>
                                        <Link to="services/show" classNameName="btn btn-purple btn-lg active" >dreadlocks</Link >
                                    </li>
                                </ul>
                        </li>
                        <li>
                            <Link to="services/barbershop" classNameName="btn btn-purple btn-lg active" >Barbershop</Link >
                                <ul id="nav-links">
                                    <li>
                                        <Link to="services/show" classNameName="btn btn-purple btn-lg active" >fade</Link >
                                    </li>
                                    <li>
                                        <Link to="services/show" classNameName="btn btn-purple btn-lg active" >line up afro</Link >
                                    </li>
                                    <li>
                                        <Link to="services/show" classNameName="btn btn-purple btn-lg active" >wave</Link >
                                    </li>
                                    <li>
                                        <Link to="services/show" classNameName="btn btn-purple btn-lg active" >cleanshave</Link >
                                    </li>
                                </ul>
                        </li>            
                        <li>
                            <a href="#">Massage</a>
                            <ul id="nav-links">
                                <li>
                                    <a href="#">Hotstone</a>
                                </li>
                                <li>
                                    <a href="#">DeepTissue</a>
                                </li>
                                <li>
                                    <a href="#">Sweedish</a>
                                </li>
                                <li>
                                    <a href="#">Aroma therapy</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="#">Nails</a>
                            <ul id="nav-links">
                                <li>
                                    <a href="#">acyrlic</a>
                                </li>
                                <li>
                                    <a href="#">pedicure</a>
                                </li>
                                <li>
                                    <a href="#">manicure</a>
                                </li>
                                <li>
                                    <a href="#">nailpolish</a>
                                </li>
                                <li>
                                    <a href="#">Nail/Gel removal </a>
                                </li>
                                <li>
                                    <a href="#">Stickons or Tips</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="#">Skin</a>
                            <ul id="nav-links">
                                <li>
                                    <a href="#">facial</a>
                                </li>
                                <li>
                                    <a href="#">make up</a>
                                </li>
                                <li>
                                    <a href="#">Body Scrub</a>
                                </li>
                                <li>
                                    <a href="#">Electrotherapy</a>
                                </li>
                                <li>
                                    <a href="#">hair removal</a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                    <div className="burger">
                        <div className="line1"></div>
                        <div className="line1"></div>
                        <div className="line1"></div>
                    </div>
                </nav> 
                <img src="images/services/portfolio.gif" alt=""/>
            </div>
            <div className='location'>
                <h1><span className='pop'>LOCATION</span></h1>
                <p>Your are required to input you current loacation so that we can locate spas around you </p>
                <form action="location">
                    <div className='raw'>
                        <div classNameName="form-wrapper">
                            <div classNameName="form-group">
                                <input type="location" className='col-md-4' className="form-control" placeholder="input location"/>
                                <a href="#" className="btn btn-purple btn-md active" clarole="button" id='button'>Submit</a>
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
