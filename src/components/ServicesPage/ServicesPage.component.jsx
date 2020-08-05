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
                            <a href="#">Hair</a>
                            <ul id="nav-links">
                                <li>
                                    <a href="#">braiding</a>
                                </li>
                                <li>
                                    <a href="#">weaving</a>
                                </li>
                                <li>
                                    <a href="#">wash and setting</a>
                                </li>
                                <li>
                                    <a href="#">hair dye</a>
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
                                    <a href="#">Body Scrub</a>
                                </li>
                                <li>
                                    <a href="#">Electrotherapy</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="#">Makeup</a>
                            <ul id="nav-links">
                                <li>
                                    <a href="#">eyebrowshaping</a>
                                </li>
                                <li>
                                    <a href="#">lashes</a>
                                </li>
                                <li>
                                    <a href="#">casual make up</a>
                                </li>
                                <li>
                                    <a href="#">dinner make up</a>
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
            </div>
        </div>
    )
}
export default ServicesPage
/* <h1>LOCATION</h1>
            <p>Your are required to input you current loacation so that we can locate spas around you </p>
            <form action="location">
                <div classNameName="form-wrapper">
                    <div classNameName="form-group">
                        <input type="location" classNameName="form-control" placeholder="input location"/>
                        <a href="#" classNameName="btn btn-purple btn-lg active"  role="button" id="button">SUBMIT</a>
                    </div>
                </div>
            </form>
            <div classNameName="Services"></div>
                <p>Select service that you are interested in.</p>
                <div classNameName="row">
                    {state.map( element=> 
                        <div classNameName="col-md-4" id="hair">
                            <img src="images/services/hair.gif" alt=""/>
                            <Link to="services/show" classNameName="btn btn-purple btn-lg active" >Hair</Link >
                        </div>
                    )}
                   
                    <div classNameName="col-md-4" id="hair">
                        <img src="images/services/mens.jpg" alt=""/>
            

                    </div>
                    <div classNameName="col-md-4" id="hair">
                        <img src="images/services/hairremoval.gif" alt=""/>
                        <h2>Hair Removal</h2>
                    </div>
                </div>
                <div classNameName="row">
                    <div classNameName="col-md-4" id="hair">
                        <img src="images/services/massage.png" alt=""/>
                        <h2>Massage</h2>
                    </div>
                    <div classNameName="col-md-4" id="hair">
                        <img src="images/services/nails.gif" alt=""/>
                        <h2>Nail</h2>
                    </div>
                    <div classNameName="col-md-4" id="hair">
                        <img src="images/services/facial.gif" alt=""/>
                        <h2>Face</h2>
                    </div>
                </div>
            </div>*/
