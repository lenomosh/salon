import React, { useState } from 'react'
import "./show.styles.scss"
// import NavbarComponent from "../../LandingPage/Navbar/Navbar.component"
const ServiceShow= () => {
    const [url, setUrl] = useState('htpp;//'+window.location.host+"/")
    return (
        <div className="serviveshow">
            {/* <NavbarComponent/> */}
            <div className='braids'>
                <div className='row'>
                    <div className='col-md-4'>
                        <img src="http://localhost:3000/images/services/hair.gif" alt=""/>
                    </div>
                    <div className='col-md-4'>
                        <h4>Braiding your hair can help to make it grow faster by providing it with a more stable structure.</h4>
                        <h4> The style can also protect your hair from daily contact with textiles and objects that may cause additional friction, which can lead to breakage.</h4>
                    </div>
                    <div className='col-md-4'>
                        <a href="#" class="btn btn-pruple btn-lg active" role="button">SELECT</a>
                    </div>
                </div>
            </div>
            <div className='weave'>
                <div className='row'>
                    <div className='col-md-4'>
                        <img src="http://localhost:3000/images/services/straightening.gif" alt=""/>
                    </div>
                    <div className='col-md-4'>
                        <h4>Hair weaving is the quickest technique that you can apply to get back hairs on your receding hairline instantly. </h4>
                        <h4>This fast method also ensures that the hair stays on your head for more than just a few weeks.</h4>
                    </div> 
                    <div className='col-md-4'>
                        <a href="#" className="btn btn-purple btn-lg active" clarole="button" id='button'>Select</a>
                    </div>
                </div>
            </div>
            <div className='straightening'>
                <div className='row'>
                    <div className='col-md-4'>
                        <img src="http://localhost:3000/images/services/weave.jpg" alt=""/>
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
                        <img src="https://i.pinimg.com/236x/fa/7f/91/fa7f917bbbbdad658bef2201a3d851d8.jpg" alt=""/>
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

export default ServiceShow
