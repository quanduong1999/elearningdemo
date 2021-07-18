import React from "react";

function ContactUs() {
  return (
    <div className="contact-us">
      <div className="container d-flex justify-content-center text-center">
        <div className="card px-5 py-5">
          <h1>Contact Us</h1>{" "}
          <span>
            Got a question? We would love to hear from you. Send us a message and
            we will respond as soon as possible
          </span>{" "}
          <input type="text" className="form-control" placeholder="name" />{" "}
          <input type="text" className="form-control" placeholder="phone" />{" "}
          <input type="text" className="form-control" placeholder="email" />{" "}
          <input
            id="date"
            type="text"
            className="form-control"
            placeholder="When can we call you?"
          />{" "}
          <button className="btn btn-success mt-5">
            Send Message <i className="fa fa-long-arrow-right ml-2 mt-1"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
