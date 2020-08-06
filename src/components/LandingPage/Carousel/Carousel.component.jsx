import React,{useState} from 'react'
import { Carousel } from 'react-bootstrap';

const CarouselComponent = () => {
    const [index, setIndex] = useState(0);
    const [image, setImage] = useState(
      "http://" + window.location.host + "/images/gallery/gali.jpeg"
    );
    const arr = [1, 2, 3, 4, 5, 5];
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
  
    return (
      <Carousel
        activeIndex={index}
        onSelect={handleSelect}
        style={{ height: "100vh" }}
      >
        {arr.map((element) => (
          <Carousel.Item>
            <img className="img w-100" src={image} />
            {/* random image */}
            <Carousel.Caption className="caption center-align">
              <h1>Get the best services in our spot</h1>
              <h5 className="light grey-text text-lighten-3 hide-on-small-only">
                Treat Yourself for Rejuvenating Your Body &amp; Soul
              </h5>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    );
  };


export default CarouselComponent
