import React from 'react'
import "./barbershop.styles.scss"
const ServiceBarbershop= () => {
    return (
        <div className="servivesbarbershop">
            <div className='fade'>
                <div className='raw'>
                    <div className='col-md-4'>
                        <img src="images/services/mens.jpg" alt=""/>
                    </div>
                    <div className='col-md-4'>
                        <h4>A fade is how your barber cuts your hair on the sides and back with professional barber clippers.</h4>
                        <h4>Hair is cut at a shorter length near the bottom and is gradually blended into a longer length higher up towards the top of your head.</h4>
                    </div>
                    <div className='col-md-4'>
                        <a href="#" class="btn btn-pruple btn-lg active" role="button">SELECT</a>
                    </div>
                </div>
            </div>
            <div className='clean shave'>
                <div className='raw'>
                    <div className='col-md-4'>
                        <img src="images/services/cleanshave" alt=""/>
                    </div>
                    <div className='col-md-4'>
                       <h4>Clean shave is a style where you get ur hair and beard completely cut</h4>
                    </div> 
                    <div className='col-md-4'>
                        <a href="#" className="btn btn-purple btn-md active" clarole="button" id='button'>Select</a>
                    </div>
                </div>
            </div>
            <div className='Lineup'>
                <div className='raw'>
                    <div className='col-md-4'>
                        <img src="images/services/Line-Up-Afro.png" alt=""/>
                    </div>
                    <div className='col-md-4'>
                        <h4>hairstyle that involves cutting along the ... In the 1980s, feeling that the afro looked dated, people began to cut their afros off in search of something more clean and neat</h4>
                    </div>
                    <div className='col-md-4'>
                        <a href="#" class="btn btn-pruple btn-lg active" role="button">SELECT</a>
                    </div>
                </div>
            </div>
            <div className='wave'>
                <div className='raw'>
                    <div className='col-md-4'>
                        <img src="images/services/wave.png" alt=""/>
                    </div>
                    <div className='col-md-4'>
                        <h4>Modern and bold, a bald fade with waves is great if you want a very short haircut.</h4>
                        <h4>Also known as a skin fade, the bald fade haircut can start high, low or in the middle and will gradually taper down to shaved sides.</h4>
                    </div>
                    <div className='col-md-4'>
                        <a href="#" class="btn btn-pruple btn-lg active" role="button">SELECT</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ServiceBarbershop
