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
        <button className="btn btn-round" data-toggle="modal" data-target="#editservice">
          <i className="material-icons">edit</i>
        </button>
        <button className="btn btn-round"id="delete-service">
          <i className="material-icons">delete</i>
        </button>  
      </div>
    </div>
  </div>
    )
  }
  const NailService=(props)=>{
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

const EditService=(props)=>{
  return(
    <div className="modal fade" id="editservice" role="">
      <div className="modal-dialog modal-login" role="document">
        <div className="modal-content">
          <div className="card card-signup card-plain">
            <div className="modal-body">
              <button type="button" className="close" data-dismiss="modal" aria-hidden="true">
                <i className="material-icons">clear</i>
              </button>
              <form className="form" id="edit-service-form" method="" action="">
                <p className="description text-center">Service name</p>
                <div className="card-body">
                  <div className="form-group bmd-form-group">
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <div className="input-group-text"><i className="material-icons">money</i></div>
                      </div>
                      <input type="number" id="edit-service-price" className="form-control" placeholder="Price..."/>
                    </div>
                  </div>
    
                  <div className="form-group bmd-form-group">
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <div className="input-group-text"><i className="material-icons">date_range</i></div>
                      </div>
                      <input type="text" id="edit-service-dur" className="form-control" placeholder="Duration..."/>
                    </div>
                  </div>
    
                  <div className="form-group bmd-form-group">
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <div className="input-group-text"><i className="material-icons">description</i></div>
                      </div>
                      <textarea className="form-control" rows={5} defaultValue={""} id="edit-service-description" placeholder="Service description"/>
                    </div>
                    </div>
                </div>
                <div className="modal-footer justify-content-center">
                  <button className="btn btn-primary btn-link btn-wd btn-lg" type="submit" id="btn-edit-service">Update</button>
                </div>
              </form>
            </div>
            
          </div>
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
        <NailService/>
        <MassageService/>
        <SpaService/>
        <BarberService/>
        <BrowsService/>
        <WaxingService/>
        <EditService/>
       </div>
       
    </div>
  );
}

export default ShopServices;