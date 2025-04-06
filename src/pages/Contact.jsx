import React from "react";
import ContactImage from "../assets/charizard.png";

function Contact() {
  return (
    <div className="contact-container fade-in-up" style={{ padding: "60px 0" }}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6">
            <h1>Contact Me</h1>
            <p className="lead">
              Feel free to reach out to me via any of the methods below. I'm
              always open to new opportunities and collaborations!
            </p>
            <div className="contact-info">
              <ul style={{ listStyle: "none", padding: 0 }}>
                <li>
                  <strong>Email: </strong>
                  <a href="mailto:pintar.domagoj@gmail.com">
                    pintar.domagoj@gmail.com
                  </a>
                </li>
                <li>
                  <strong>Phone: </strong>
                  <a href="tel:+385 95 582 3529">+385 95 582 3529</a>
                </li>
                <li>
                  <strong>GitHub: </strong>
                  <a
                    href="https://github.com/Pic2500"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub Profile
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-md-6">
            <img src={ContactImage} alt="Contact" className="img-fluid" />
          </div>
        </div>

        <footer className="mt-5 pt-5">
          <h4>Contact Information</h4>
          <p>
            I'm available via the contact methods listed above. Don't hesitate
            to reach out! Gotta learn it all!
          </p>
        </footer>
      </div>
    </div>
  );
}

export default Contact;
