import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
             <p className="home-about-body">
              <h2>Infosec Professional for over 20 years</h2>
              <br />
              <br /><h2>Core Skills:
              <i>
                <b className="purple"> Threat Detection, Detection Engineering, Incident Response, Security Architecture, Senior Leadership </b>
              </i></h2>
              <br />
              <br />
                I enjoy helping organizations and individuals protect themselves from <b className="purple">computer security threats</b> and exploring technology, nature, and human society.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
          <br />
          <br />
          <br />
          <br />
          <br />
            <h1>FIND ME ON</h1>
            <ul className="home-about-social-links">
            <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/jeffb0llinger"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>              <li className="social-icons">
                <a
                  href="https://github.com/jkeychan"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
