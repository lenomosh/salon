import React, { useState } from "react";
import "./LandingPage.styles.scss";
import NavbarComponent from "./Navbar/Navbar.component";
import CarouselComponent from "./Carousel/Carousel.component";
import FooterComponent from "./Footer/Footer.component";

const LandingPage = () => {
  const [serviceType, setServiceType] = useState("");
  const [index, setIndex] = useState(0);
  const [image, setImage] = useState(
    "http://" + window.location.host + "/images/gallery/gali.jpeg"
  );
  const handleContactForm = contactForm =>{
      const form = new FormData(contactForm);
      const email = form.get('email')
      const name = form.get('name')
      const message = form.get('message')
      const phone = form.get('phone')
      alert(email,name,message,phone)
      

  }
  return (
    <div className="LandingPage">
      <NavbarComponent />
      <CarouselComponent />
      <section
        id="search-section"
        className="section section-search purple accent-2 darken-1 white-text center scrollspy"
      >
        <div className="container">
          <div className="row">
            <div className="col text-center s12">
              <h3>Search for your needs..</h3>
              <div className="input-field">
                <input
                  type="text"
                  className="white grey-text autocomplete"
                  id="autocomplete-input"
                  placeholder="Quick shave, body massage, etc..."
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section section-icons grey lighten-4 center">
        <div className="container">
          <div className="row">
            <div className="col s12 m4">
              <div className="card-panel">
                <i className="material-icons large teal-text">room</i>
                <h4>Pick Where</h4>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Accusamus, tempore?
                </p>
              </div>
            </div>
            <div className="col s12 m4">
              <div className="card-panel">
                <i className="material-icons large teal-text">store</i>
                <h4>Come to us</h4>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Accusamus, tempore?
                </p>
              </div>
            </div>
            <div className="col s12 m4">
              <div className="card-panel">
                <i className="material-icons large teal-text">money</i>
                <h4>Cheap Services</h4>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Accusamus, tempore?
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Section: Popular Places --> */}
      <section id="popular" className="section section-popular scrollspy">
        <div className="container">
          <div className="col s12 m4">
            <h4 className="center">
              <span className="teal-text">Popular</span> Stores
            </h4>
          </div>
          <div className="row">
            <div className="col s12 m4">
              <div className="card">
                <div className="card-image">
                  <img src={image} alt />
                  <span className="card-title">Nairobi</span>
                </div>
                <div className="card-content"></div>
              </div>
            </div>
            <div className="col s12 m4">
              <div className="card">
                <div className="card-image">
                  <img src={image} alt />
                  <span className="card-title">Kisumu</span>
                </div>
                <div className="card-content"></div>
              </div>
            </div>
            <div className="col s12 m4">
              <div className="card">
                <div className="card-image">
                  <img src={image} alt />
                  <span className="card-title">Mombasa</span>
                </div>
                <div className="card-content"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section section-follow purple accent-1 darken-2 white-text center">
        <div className="container">
          <div className="row">
            <div className="col s12">
              <h4>Follow Urembo Spot</h4>
              <p>Follow us on social media for special offers</p>
              <a href="#" className="white-text">
                <i className="fab fa-facebook fa-4x" />
              </a>
              <a href="#" className="white-text">
                <i className="fab fa-twitter fa-4x" />
              </a>
              <a href="#" className="white-text">
                <i className="fab fa-linkedin fa-4x" />
              </a>
              <a href="#" className="white-text">
                <i className="fab fa-google-plus fa-4x" />
              </a>
              <a href="#" className="white-text">
                <i className="fab fa-pinterest fa-4x" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Section: Gallery */}
      <section id="gallery" className="section section-gallery scrollspy">
        <div className="container">
          <h4 className="center">
            <span className="teal-text">Photo</span> Gallery
          </h4>
          <div className="row">
            <div className="col s12 m3">
              <img src={image} alt className="materialboxed responsive-img" />
            </div>
            <div className="col s12 m3">
              <img src={image} alt className="materialboxed responsive-img" />
            </div>
            <div className="col s12 m3">
              <img src={image} alt className="materialboxed responsive-img" />
            </div>
            <div className="col s12 m3">
              <img src={image} alt className="materialboxed responsive-img" />
            </div>
          </div>
          <div className="row">
            <div className="col s12 m3">
              <img src={image} alt className="materialboxed responsive-img" />
            </div>
            <div className="col s12 m3">
              <img src={image} alt className="materialboxed responsive-img" />
            </div>
            <div className="col s12 m3">
              <img src={image} alt className="materialboxed responsive-img" />
            </div>
            <div className="col s12 m3">
              <img src={image} alt className="materialboxed responsive-img" />
            </div>
          </div>
          <div className="row">
            <div className="col s12 m3">
              <img src={image} alt className="materialboxed responsive-img" />
            </div>
            <div className="col s12 m3">
              <img src={image} alt className="materialboxed responsive-img" />
            </div>
            <div className="col s12 m3">
              <img src={image} alt className="materialboxed responsive-img" />
            </div>
            <div className="col s12 m3">
              <img src={image} alt className="materialboxed responsive-img" />
            </div>
          </div>
        </div>
      </section>

      {/* Section: Contact */}
      <section id="contact" className="section section-contact scrollspy">
        <div className="container">
          <div className="row">
            <div className="col s12 m6">
              <div className="card-panel purple white-text center">
                <i className="material-icons">email</i>
                <h5>Contact Us For Booking</h5>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo
                  praesentium fugit tempore hic enim possimus molestias quisquam
                  impedit corrupti eveniet.
                </p>
              </div>
              <ul className="collection with-header">
                <li className="collection-header">
                  <h4>Location</h4>
                </li>
                <li className="collection-item">Urembo Spot</li>
                <li className="collection-item">555 Ngong Rd, Suite 33</li>
                <li className="collection-item">Nairobi, FL 55555</li>
              </ul>
            </div>
            <div className="col s12 m6">
                <form onSubmit={event=>{event.preventDefault(); handleContactForm(event.target)}}>
                    <div className="card-panel pink lighten-3">
                <h5>Please fill out this form</h5>
                <div className="input-field">
                  <input name="name" type="text" placeholder="Name" />
                </div>
                <div className="input-field">
                  <input name="email" type="text" placeholder="Email" />
                </div>
                <div className="input-field">
                  <input name="phone" type="text" placeholder="Phone" />
                </div>
                <div className="input-field">
                  <textarea
                    name="message"
                    className="materialize-textarea"
                    placeholder="Enter Message"
                    defaultValue={""}
                  />
                </div>
                <input type="submit" defaultValue="Submit" className="btn" />
              </div>            
                </form>
              </div>
          </div>
        </div>
      </section>
    <FooterComponent/>
    </div>
  );
};

export default LandingPage;
