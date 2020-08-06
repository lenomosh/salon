import React, { useState } from 'react'
import "./massage.styles.scss"
// import NavbarComponent from "../../LandingPage/Navbar/Navbar.component"
const ServiceMassage= () => {
    const [url, setUrl] = useState('htpp;//'+window.location.host+"/")
    return (
        <div className="servivesmassage">
            {/* <NavbarComponent/> */}
            <div className='Hotstonemassage'>
                <div className='row'>
                    <div className='col-md-4'>
                        <img src="https://static.wixstatic.com/media/6853b7_739d955cd47c4455924b19c8f85937e0~mv2.gif" alt=""/>
                    </div>
                    <div className='col-md-4'>
                        <h4>Hot stone massage therapy helps melt away tension, ease muscle stiffness, and increase circulation and metabolism.</h4>
                        <h4> Hot stones, when coupled with massage, also help to expand blood vessels, which encourages blood flow throughout the body.</h4>
                    </div>
                    <div className='col-md-4'>
                        <a href="#" class="btn btn-pruple btn-lg active" clarole="button">SELECT</a>
                    </div>
                </div>
            </div>
            <div className='deeptissue'>
                <div className='row'>
                    <div className='col-md-4'>
                        <img src="https://www.kelolandspotlight.com/media/3massage2015.gif" alt=""/>
                    </div>
                    <div className='col-md-4'>
                        <h4>Deep tissue massage is a massage technique that’s mainly used to treat musculoskeletal issues, such as strains and sports injuries.</h4>
                        <h4> It involves applying sustained pressure using slow, deep strokes to target the inner layers of your muscles and connective tissues. </h4>
                        <h4>This helps to break up scar tissue that forms following an injury and reduce tension in muscle and tissue.</h4>
                    </div> 
                    <div className='col-md-4'>
                        <a href="#" className="btn btn-purple btn-lg active" clarole="button" id='button'>Select</a>
                    </div>
                </div>
            </div>
            <div className='bodyscrub'>
                <div className='row'>
                    <div className='col-md-4'>
                        <img src="https://www.lepetitspa.ca/images/Exfoliating-body-scrub.jpg" alt=""/>
                    </div>
                    <div className='col-md-4'>
                        <h4>Put simply, a body scrub is a skin care product whose primary function is to remove dead skin cells through exfoliation as well as cleanse the skin and increase the body's blood circulation.</h4>
                        <h4>The exfoliating component needs to be abrasive enough to achieve this but not too strong so as not to damage healthy skin.</h4>
                    </div>
                    <div className='col-md-4'>
                        <a href="#" class="btn btn-pruple btn-lg active" clarole="button">SELECT</a>
                    </div>
                </div>
            </div>
            <div className='hair removal'>
                <div className='row'>
                    <div className='col-md-4'>
                        <img src="http://localhost:3000/images/services/hairremoval.gif" alt=""/>
                    </div>
                    <div className='col-md-4'>
                        <h4>Arguably, one of the greatest benefits of having dreadlocks is the simple fact that it promotes healthy hair. </h4>
                        <h4>By twisting your hair into locks, it preserves its natural moisture, preventing it from drying out.</h4>
                        <h4>Dry hair may seem harmless enough, but it can have truly devastating effects.</h4>
                    </div>
                    <div className='col-md-4'>
                        <a href="#" class="btn btn-pruple btn-lg active" role="button">SELECT</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ServiceMassage
