import React from "react";
import { Card, CardColumns, Button } from "react-bootstrap";

function Teacher() {
  return (
    <div className="container home-teacher">
        <h2 className="home-teacher-title">Chúng tôi là ai?</h2>
      <CardColumns className="home-teacher-content">
        <Card className="home-teacher-card">
          <Card.Img
            className="home-teacher-img"
            variant="top"
            src="/images/home/teacher/teacher1.jpg"
          />
        
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              Card Text his card has supporting text below as a natural lead-in
              to additional content.{" "}
            </Card.Text>
          </Card.Body>
          
        </Card>

        <Card className="home-teacher-card">
          <Card.Img
             className="home-teacher-img"
            variant="top"
            src="/images/home/teacher/teacher2.jpg"
          />
         
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              Card Text his card has supporting text below as a natural lead-in
              to additional content.{" "}
            </Card.Text>
          </Card.Body>
          
        </Card>

        <Card className="home-teacher-card">
          <Card.Img
             className="home-teacher-img"
            variant="top"
            src="/images/home/teacher/teacher3.jpg"
          />
         
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              Card Text his card has supporting text below as a natural lead-in
              to additional content.{" "}
            </Card.Text>
          </Card.Body>
          
        </Card>
      </CardColumns>
    </div>
  );
}

export default Teacher;
