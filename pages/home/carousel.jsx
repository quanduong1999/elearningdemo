import React from "react";
import { Carousel } from "react-bootstrap";
import { Image } from "react-bootstrap";

const mystyle = {
  width: "100%",
};

function Carousels() {
  return (
    <Carousel fade={true}>
      <Carousel.Item interval={2000}>
        <Image
          className="d-block w-100 img-carousel"
          src="/images/home/carousel/image1.jpg"
          alt="First slide"
          style={mystyle}
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <Image
          className="d-block w-100 img-carousel"
          src="/images/home/carousel/image2.jpg"
          alt="First slide"
          style={mystyle}
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <Image
          className="d-block w-100 img-carousel"
          src="/images/home/carousel/image3.jpg"
          alt="First slide"
          style={mystyle}
        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Carousels;
