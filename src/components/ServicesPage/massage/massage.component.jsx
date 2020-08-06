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
                        <img src="http://localhost:3000/images/services/message.png" alt=""/>
                    </div>
                    <div className='col-md-4'>
                        <h4>Hot stone massage therapy helps melt away tension, ease muscle stiffness, and increase circulation and metabolism.</h4>
                        <h4> Hot stones, when coupled with massage, also help to expand blood vessels, which encourages blood flow throughout the body.</h4>
                    </div>
                    <div className='col-md-4'>
                        <a href="#" class="btn btn-pruple btn-lg active" role="button">SELECT</a>
                    </div>
                </div>
            </div>
            <div className='deeptissue'>
                <div className='row'>
                    <div className='col-md-4'>
                        <img src="http://localhost:3000/images/services/deeptissue" alt=""/>
                    </div>
                    <div className='col-md-4'>
                        <h4>Deep tissue massage is a massage technique that’s mainly used to treat musculoskeletal issues, such as strains and sports injuries.</h4>
                        <h4> It involves applying sustained pressure using slow, deep strokes to target the inner layers of your muscles and connective tissues. This helps to break up scar tissue that forms following an injury and reduce tension in muscle and tissue.</h4>
                    </div> 
                    <div className='col-md-4'>
                        <a href="#" className="btn btn-purple btn-lg active" clarole="button" id='button'>Select</a>
                    </div>
                </div>
            </div>
            <div className='straightening'>
                <div className='row'>
                    <div className='col-md-4'>
                        <img src="http://localhost:3000/images/services/straightening.gif" alt=""/>
                    </div>
                    <div className='col-md-4'>
                        <h4>Regular straightening leads to a better maintenance program.” </h4>
                        <h4>Also, since curly hair has varying textures throughout — often with kinkier strands on the crown — straightening “levels the playing field,” so you can assess where there's thinness, breakage, or damage. </h4>
                        <h4>“When hair is curly, all you see is volume.</h4>
                    </div>
                    <div className='col-md-4'>
                        <a href="#" class="btn btn-pruple btn-lg active" clarole="button">SELECT</a>
                    </div>
                </div>
            </div>
            <div className='hair removal'>
                <div className='raw'>
                    <div className='col-md-4'>
                        <img src="http://localhost:3000/images/services/dreadlock.gif" alt=""/>
                    </div>
                    <div className='col-md-4'>
                        <h4>Arguably, one of the greatest benefits of having dreadlocks is the simple fact that it promotes healthy hair. By twisting your hair into locks, it preserves its natural moisture, preventing it from drying out.</h4>
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
