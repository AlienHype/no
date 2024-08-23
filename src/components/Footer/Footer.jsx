import React from "react";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import { Link } from "react-router-dom";
import "../../styles/footer.css";

const quickLinks = [
  {
    path: "/about",
    display: "About",
  },
  {
    path: "/CarRentalPolicy",
    display: "Car Rental Policy",
  },
  {
    path: "/cars",
    display: "Car Listing",
  },

  {
    path: "/contact",
    display: "Contact",
  },
];

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="4" md="4" sm="12">
            <div className="logo footer__logo">
              <h1>
                <Link to="/home" className="d-flex align-items-center gap-2">
                  <i className="ri-car-line"></i>
                  <span>
                    Hype <br /> Rentals
                  </span>
                </Link>
              </h1>
            </div>
            <p className="footer__logo-content">
              Welcome to Hyperentals, your top choice for exceptional car rentals. We offer a diverse fleet of well-maintained vehicles for
              all your transportation needs, whether for a weekend getaway, business trip, or temporary ride. Enjoy seamless rentals
              with outstanding customer service, competitive rates, and convenient locations. Choose Hyperentals and drive with confidence!
            </p>
          </Col>

          <Col lg="2" md="4" sm="6">
            <div className="mb-4">
              <h5 className="footer__link-title">Quick Links</h5>
              <ListGroup>
                {quickLinks.map((item, index) => (
                  <ListGroupItem key={index} className="p-0 mt-3 quick__link">
                    <Link to={item.path}>{item.display}</Link>
                  </ListGroupItem>
                ))}
              </ListGroup>
            </div>
          </Col>

          <Col lg="3" md="4" sm="6">
            <div className="mb-4">
              <h5 className="footer__link-title mb-4">Head Office</h5>
              <p className="office__info">123 moka, eben, Mauritius</p>
              <p className="office__info">Phone: +230 57543530</p>
              <p className="office__info">Email: hyperentals01@gmail.com</p>
              <p className="office__info">Office Time: 10am - 7pm</p>
            </div>
          </Col>

          <Col lg="3" md="4" sm="12">
            <div className="mb-4">
              <h5 className="footer__link-title">Find Us</h5>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d24199.519458423838!2d57.506615342019444!3d-20.218421179393964!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2smu!4v1723142867910!5m2!1sen!2smu"
                width="100%"
                height="200"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                title="Google Map"
              ></iframe>
            </div>
          </Col>

          <Col lg="12">
            <div className="footer__bottom">
              <p className="section__description d-flex align-items-center justify-content-center gap-1 pt-4">
                <i className="ri-copyright-line"></i>Copyright {year} All rights reserved.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
