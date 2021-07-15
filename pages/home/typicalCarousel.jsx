import React from "react";
import { Card, CardColumns, Button } from "react-bootstrap";

function TypicalCarousel() {
  return (
    <div className="container typical-carousel">
      <h2 id="typicalCarousel-title">Khóa học Tiêu biểu</h2>
      <CardColumns className="typical-carousel-content">
        <Card>
          <Card.Img
            className="typical-course-img"
            variant="top"
            src="/images/home/teacher/teacher1.jpg"
          />
          <hr />
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              Card Text his card has supporting text below as a natural lead-in
              to additional content.{" "}
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <Button variant="primary" className="typical-carousel-readmore">Read More</Button>
            <Button variant="primary" className="typical-carousel-buynow">Buy Now</Button>
          </Card.Footer>
        </Card>

        <Card>
          <Card.Img
            className="typical-course-img"
            variant="top"
            src="/images/home/teacher/teacher2.jpg"
          />
          <hr />
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              Card Text his card has supporting text below as a natural lead-in
              to additional content.{" "}
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <Button variant="primary" className="typical-carousel-readmore">Read More</Button>
            <Button variant="primary" className="typical-carousel-buynow">Buy Now</Button>
          </Card.Footer>
        </Card>

        <Card>
          <Card.Img
            className="typical-course-img"
            variant="top"
            src="/images/home/teacher/teacher3.jpg"
          />
          <hr />
          <Card.Body>
            <Card.Title className="typical-carousel">Card title</Card.Title>
            <Card.Text>
              Card Text his card has supporting text below as a natural lead-in
              to additional content.{" "}
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <Button variant="primary" className="typical-carousel-readmore">Read More</Button>
            <Button variant="primary" className="typical-carousel-buynow">Buy Now</Button>
          </Card.Footer>
        </Card>
      </CardColumns>
    </div>
  );
}

export default TypicalCarousel;
