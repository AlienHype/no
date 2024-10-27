import React from "react";
import CommonSection from "../components/UI/CommonSection";
import Helmet from "../components/Helmet/Helmet";
import AboutSection from "../components/UI/AboutSection";
import { Container, Row, Col } from "reactstrap";
import BecomeDriverSection from "../components/UI/BecomeDriverSection";
import driveImg from "../assets/all-images/drive.jpg";
import "../styles/about.css";

const About = () => {
  return (
    <Helmet title="About">
      <CommonSection title="About Us" />
      <AboutSection aboutClass="aboutPage" />

      <section className="about__page-section">
        <Container>
          <Row>
            <Col lg="6" md="6" sm="12">
              <div className="about__page-img">
                <img src={driveImg} alt="" className="w-100 rounded-3" />
              </div>
            </Col>

            <Col lg="6" md="6" sm="12">
              <div className="about__page-content">
                <h2 className="section__title">
                  We Are Committed To Provide Safe Ride Solutions
                </h2>

                <p className="section__description">
                Thorough Vehicle Maintenance: Our fleet undergoes regular and rigorous maintenance checks to ensure each vehicle meets the highest safety standards.

                Sanitization Protocols: We implement strict sanitization protocols, thoroughly cleaning and disinfecting each vehicle before and after every rental to provide a clean and safe environment for our customers.
                </p>

                <p className="section__description">
                24/7 Roadside Assistance: In case of any unexpected situations, our 24/7 roadside assistance is available to provide immediate support and ensure your journey continues smoothly.

                Safety Features: Our vehicles are equipped with modern safety features, including airbags, ABS brakes, and advanced driver-assistance systems to enhance your safety on the road.
                </p>

                <div className=" d-flex align-items-center gap-3 mt-4">
                  <span className="fs-4">
                    <i class="ri-phone-line"></i>
                  </span>

                  <div>
                    <h6 className="section__subtitle">Need Any Help?</h6>
                    <h4>+230 57543730</h4>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <BecomeDriverSection />

    </Helmet>
  );
};

export default About;
