import React, { useRef, useState, useEffect } from "react";
import {
  Container,
  Row,
  Col,
  Modal,
  ModalHeader,
  ModalBody,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Alert,
} from "reactstrap";
import { Link, NavLink, useNavigate } from "react-router-dom";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from "./firebase-config";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "../../styles/header.css";

const navLinks = [
  { path: "/home", display: "Home" },
  { path: "/about", display: "About" },
  { path: "/cars", display: "Cars" },
  { path: "/contact", display: "Contact" },
  { path: "/CarRentalPolicy", display: "Car Rental Policy" },
];

const Header = () => {
  const menuRef = useRef(null);
  const [loginModal, setLoginModal] = useState(false);
  const [registerModal, setRegisterModal] = useState(false);
  const [loginError, setLoginError] = useState("");
  const [registerError, setRegisterError] = useState("");
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(setUser);
    return () => unsubscribe();
  }, []);

  const toggleMenu = () => menuRef.current.classList.toggle("menu__active");
  const toggleLoginModal = () => setLoginModal(!loginModal);
  const toggleRegisterModal = () => setRegisterModal(!registerModal);

  const handleRegister = async (event) => {
    event.preventDefault();
    const firstName = event.target.firstName.value;
    const lastName = event.target.lastName.value;
    const phoneNumber = event.target.phoneNumber.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      setRegisterModal(false);
      toast.success("Registration successful!");
    } catch (error) {
      setRegisterError(error.message);
    }
  };

  const handleLogin = async (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      if (user.email === "hyperentals01@gmail.com") {
        navigate("/AdminDashboard");
      } else {
        navigate("/Cars");
      }
      setLoginModal(false);
      toast.success(`Welcome back, ${user.email}`);
    } catch (error) {
      setLoginError(error.message);
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      localStorage.removeItem("user");
      document.cookie.split(";").forEach((c) => {
        document.cookie = c.trim().replace(/=.*/, "=;expires=Thu, 01 Jan 1970 00:00:00 GMT");
      });
      navigate("/home");
      toast.info("You have been logged out");
    } catch (error) {
      toast.error("Failed to log out");
    }
  };

  return (
    <header className="header">
      <div className="header__top">
        <Container>
          <Row>
            <Col lg="6" md="6" sm="6">
              <div className="header__top__left">
                <span>Need Help?</span>
                <span className="header__top__help">
                  <i className="ri-phone-fill"></i> +230 57543730
                </span>
              </div>
            </Col>

            <Col lg="6" md="6" sm="6">
              <div className="header__top__right d-flex align-items-center justify-content-end gap-3">
                {!user ? (
                  <>
                    <Link to="#" onClick={toggleLoginModal} className="d-flex align-items-center gap-1">
                      <i className="ri-login-circle-line"></i> Login
                    </Link>
                    <Link to="#" onClick={toggleRegisterModal} className="d-flex align-items-center gap-1">
                      <i className="ri-user-line"></i> Register
                    </Link>
                  </>
                ) : (
                  <>
                    <span className="d-flex align-items-center gap-1">Welcome, {user.email}</span>
                    <Button color="danger" onClick={handleLogout}>Logout</Button>
                  </>
                )}
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="header__middle">
        <Container>
          <Row className="align-items-start header__middle-row">
            <Col xs="6" className="d-flex flex-column align-items-start">
              <div className="logo mb-2">
                <h1>
                  <Link to="/home" className="d-flex align-items-center gap-2">
                    <i className="ri-car-line"></i>
                    <span>
                      Hype <br /> Rentals
                    </span>
                  </Link>
                </h1>
              </div>

              {/* <Button className="header__btn btn">
                <a
                  href="https://wa.me/+23057543530?text=Hi%20I%20would%20like%20to%20request%20a%20call%20from%20Hype%20Rentals."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="d-flex align-items-center gap-2"
                >
                  <i className="ri-phone-line"></i> Request a call
                </a>
              </Button> */}
            </Col>

            <Col xs="6" className="d-flex flex-column align-items-end">
              <div className="header__location d-flex align-items-center gap-2 mb-2">
                <span>
                  <i className="ri-earth-line"></i>
                </span>
                <div className="header__location-content text-end">
                  <h4>Mauritius</h4>
                  <h6>Eben, Mauritius</h6>
                  
                </div>
              </div>

              <Button className="header__btn btn" style={{ backgroundColor: "red" }}>
                <a
                  href="https://wa.me/+23057543530?text=Emergency%20report%20from%20Hype%20Rentals%20user."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="d-flex align-items-center gap-2"
                >
                  <i className="ri-alert-line"></i> Report Emergency
                </a>
              </Button>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="main__navbar">
        <Container>
          <div className="navigation__wrapper d-flex align-items-center justify-content-between">
            <span className="mobile__menu">
              <i className="ri-menu-line" onClick={toggleMenu}></i>
            </span>

            <div className="navigation" ref={menuRef} onClick={toggleMenu}>
              <div className="menu">
                {navLinks.map((item, index) => (
                  <NavLink
                    to={item.path}
                    className={(navClass) =>
                      navClass.isActive ? "nav__active nav__item" : "nav__item"
                    }
                    key={index}
                  >
                    {item.display}
                  </NavLink>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* Login Modal */}
      <Modal isOpen={loginModal} toggle={toggleLoginModal}>
        <ModalHeader toggle={toggleLoginModal}>Login</ModalHeader>
        <ModalBody>
          {loginError && <Alert color="danger">{loginError}</Alert>}
          <Form onSubmit={handleLogin}>
            <FormGroup>
              <Label for="email">Email</Label>
              <Input type="email" name="email" id="email" placeholder="Enter your email" required />
            </FormGroup>
            <FormGroup>
              <Label for="password">Password</Label>
              <Input type="password" name="password" id="password" placeholder="Enter your password" required />
            </FormGroup>
            <Button color="danger" type="submit">Login</Button>
          </Form>
        </ModalBody>
      </Modal>

      {/* Register Modal */}
      <Modal isOpen={registerModal} toggle={toggleRegisterModal}>
        <ModalHeader toggle={toggleRegisterModal}>Register</ModalHeader>
        <ModalBody>
          {registerError && <Alert color="danger">{registerError}</Alert>}
          <Form onSubmit={handleRegister}>
            <FormGroup>
              <Label for="firstName">First Name</Label>
              <Input type="text" name="firstName" id="firstName" placeholder="Enter your first name" required />
            </FormGroup>
            <FormGroup>
              <Label for="lastName">Last Name</Label>
              <Input type="text" name="lastName" id="lastName" placeholder="Enter your last name" required />
            </FormGroup>
            <FormGroup>
              <Label for="phoneNumber">Phone Number</Label>
              <Input type="tel" name="phoneNumber" id="phoneNumber" placeholder="Enter your phone number" required />
            </FormGroup>
            <FormGroup>
              <Label for="email">Email</Label>
              <Input type="email" name="email" id="email" placeholder="Enter your email" required />
            </FormGroup>
            <FormGroup>
              <Label for="password">Password</Label>
              <Input type="password" name="password" id="password" placeholder="Enter your password" required />
            </FormGroup>
            <Button color="danger" type="submit">Register</Button>
          </Form>
        </ModalBody>
      </Modal>
      <ToastContainer />
    </header>
  );
};

export default Header;