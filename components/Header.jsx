import React from "react";
import { useState } from "react";
import { useEffect, useRef } from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Form, FormControl } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Image } from "react-bootstrap";
import Cart from "../pages/cart";
import cookie from "js-cookie";
import { useRouter } from "next/router";

function Header(props) {
  const token = cookie.get("token");
  const Router = useRouter();

  const logout = () =>{
    cookie.remove("token")
    Router.replace("/");
  }

  return (
    <div className="Header">
      <Navbar bg="light" expand="lg">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/course">Course</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="contact-us">Contact us</Nav.Link>
            <Form inline className="header-form">
              <FormControl
                type="text"
                placeholder="Search"
                className="mr-sm-2"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
            
          </Nav>
          {!token ? (
              <Nav.Link href="/login">Login</Nav.Link>
            ) : (
              <NavDropdown
                title="User"
                id="basic-nav-dropdown"
                className="header-user"
              >
                <NavDropdown.Item href="/profiles">Profiles</NavDropdown.Item>
                <NavDropdown.Item onClick={logout}>Logout</NavDropdown.Item>
              </NavDropdown>
            )}
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default Header;
