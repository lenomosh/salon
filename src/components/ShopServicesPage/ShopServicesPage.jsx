import React from 'react';
import './ShopServicesPage.styles.scss'
import hairImg from '../../imgs/services/hair.jpg'
import nailImg from '../../imgs/services/nails.jpg'
import massageImg from '../../imgs/services/massage.jpg'
import spaImg from '../../imgs/services/spa.jpg'
import barberImg from '../../imgs/services/barber.jpg'
import browImg from '../../imgs/services/brows.jpg'
import waxingImg from '../../imgs/services/waxing.jpg'

const HairService=(props)=>{
  return(
  <div className="card card-blog hair-service col-md-6">
    <div className="card-header card-header-image">
      <a href="#">
        <img className="img" src={hairImg} rel="nofollow" />
        <div className="card-title">
          Hair
        </div>
      </a>
    </div>
    <div className="card-body">
      <h6 className="card-category text-info">$10.00</h6>
      <p className="card-description">
        Hair service description
      </p>
      <p className="duration">
        5hrs
      </p>
      <div className="stats ml-auto">
        <i className="material-icons">edit</i>
        <i className="material-icons">delete</i>
      </div>
    </div>
  </div>
    )
  }
  const NairService=(props)=>{
    return(
      <div className="card card-blog nail-service col-md-6">
        <div className="card-header card-header-image">
          <a href="#">
            <img className="img" src={nailImg} rel="nofollow" />
            <div className="card-title">
              Nails
            </div>
          </a>
        </div>
        <div className="card-body">
          <h6 className="card-category text-info">$5.00</h6>
          <p className="card-description">
            Nails service description
          </p>
          <p className="duration">
            30mins
          </p>
          <div className="stats ml-auto">
            <i className="material-icons">edit</i>
            <i className="material-icons">delete</i>
          </div>
        </div>
      </div>

    )
  }
  const MassageService=(props)=>{
    return(
    <div className="card card-blog massage-service col-md-6">
      <div className="card-header card-header-image">
        <a href="#">
          <img className="img" src={massageImg} rel="nofollow" />
          <div className="card-title">
            Massage
          </div>
        </a>
      </div>
      <div className="card-body">
        <h6 className="card-category text-info">$12.00</h6>
        <p className="card-description">
          Massage service description
        </p>
        <p className="duration">
          1hrs
        </p>
        <div className="stats ml-auto">
          <i className="material-icons">edit</i>
          <i className="material-icons">delete</i>
        </div>
      </div>
    </div>

 
  )
}
const SpaService=(props)=>{
  return(
    <div className="card card-blog spa-service col-md-6">
      <div className="card-header card-header-image">
        <a href="#">
          <img className="img" src={spaImg} rel="nofollow" />
          <div className="card-title">
            Spa
          </div>
        </a>
      </div>
      <div className="card-body">
        <h6 className="card-category text-info">$20.00</h6>
        <p className="card-description">
          Spa  service description
        </p>
        <p className="duration">
          3hrs
        </p>
        <div className="stats ml-auto">
          <i className="material-icons">edit</i>
          <i className="material-icons">delete</i>
        </div>
      </div>
    </div>

  )
}
const BarberService=(props)=>{
  return(
    <div className="card card-blog barber-service col-md-6">
      <div className="card-header card-header-image">
        <a href="#">
          <img className="img" src={barberImg} rel="nofollow" />
          <div className="card-title">
            Barber
          </div>
        </a>
      </div>
      <div className="card-body">
        <h6 className="card-category text-info">$5.00</h6>
        <p className="card-description">
          Barber service description
        </p>
        <p className="duration">
          15mins
        </p>
        <div className="stats ml-auto">
          <i className="material-icons">edit</i>
          <i className="material-icons">delete</i>
        </div>
      </div>
    </div>

  
  )
}
const BrowsService=(props)=>{
  return(
    <div className="card card-blog brows-service col-md-6">
      <div className="card-header card-header-image">
        <a href="#">
          <img className="img" src={browImg} rel="nofollow" />
          <div className="card-title">
            Brows
          </div>
        </a>
      </div>
      <div className="card-body">
        <h6 className="card-category text-info">$2.00</h6>
        <p className="card-description">
          Brows service description
        </p>
        <p className="duration">
          30mins
        </p>
        <div className="stats ml-auto">
          <i className="material-icons">edit</i>
          <i className="material-icons">delete</i>
        </div>
      </div>
    </div>

        
  )
}
const WaxingService=(props)=>{
  return(
    <div className="card card-blog wazing-service col-md-6">
      <div className="card-header card-header-image">
        <a href="#">
          <img className="img" src={waxingImg} rel="nofollow" />
          <div className="card-title">
            Waxing
          </div>
        </a>
      </div>
      <div className="card-body">
        <h6 className="card-category text-info">$2.00</h6>
        <p className="card-description">
          Waxing service description
        </p>
        <p className="duration">
          30mins
        </p>
        <div className="stats ml-auto">
          <i className="material-icons">edit</i>
          <i className="material-icons">delete</i>
        </div>
      </div>
    </div>

  
  )
}



const ShopServices=(props)=> {
  return (
    <div className="shop-services-page pt-4">
      <div className="row"  id="services">
        <HairService/>
        <NairService/>
        <MassageService/>
        <SpaService/>
        <BarberService/>
        <BrowsService/>
        <WaxingService/>
       </div>
    </div>
  );
}

export default ShopServices;