import React from "react";
import { Container, Row, Col } from "reactstrap";
import "../../styles/about-section.css";
import aboutImg from "../../assets/all-images/cars-img/bmw-offer.png";

const AboutSection = ({ aboutClass }) => {
  return (
    <section
      className="about__section"
      style={
        aboutClass === "aboutPage"
          ? { marginTop: "0px" }
          : { marginTop: "280px" }
      }
    >
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="about__section-content">
              <h4 className="section__subtitle">About Us</h4>
              <h2 className="section__title">Welcome to Hype Rentals</h2>
              <p className="section__description">
              Welcome to Hyperentals, your premier destination for exceptional car rental services! At Hyperentals,
               we are committed to providing a seamless and enjoyable rental experience,
                offering a diverse fleet of well-maintained vehicles to cater to all your transportation needs. 
               Whether you're planning a weekend getaway, a business trip, or need a temporary ride, 
               our extensive selection ensures you'll find the perfect vehicle. 
               Experience the difference with our outstanding customer service,
               competitive rates, and convenient locations. Choose Hyperentals and drive with confidence!
              </p>

              <div className="about__section-item d-flex align-items-center">
                <p className="section__description d-flex align-items-center gap-2">
                  <i class="ri-checkbox-circle-line"></i> Extensive Fleet Selection.
                </p>

                <p className="section__description d-flex align-items-center gap-2">
                  <i class="ri-checkbox-circle-line"></i> Competitive Pricing.
                </p>
              </div>

              <div className="about__section-item d-flex align-items-center">
                <p className="section__description d-flex align-items-center gap-2">
                  <i class="ri-checkbox-circle-line"></i> Exceptional Customer Service.
                </p>

                <p className="section__description d-flex align-items-center gap-2">
                  <i class="ri-checkbox-circle-line"></i> Convenient Locations and Easy Booking.
                </p>
              </div>
            </div>
          </Col>

          <Col lg="6" md="6">
            <div className="about__img">
              <img src={aboutImg} alt="" className="w-100" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutSection;
