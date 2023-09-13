import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={5} className="home-header">
              <h1 className="heading-name">
                Hello I'm
                <strong className="main-name"> Jeff Bollinger</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "right" }}>
                <Type />
              </div>
            </Col>

            <Col md={7} style={{ paddingBottom: 90 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid w-100"
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
