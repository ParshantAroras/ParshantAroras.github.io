/*!

=========================================================
* Argon Design System React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-design-system-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-design-system-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

// reactstrap components
import { Button, Container, Row, Col, UncontrolledCarousel } from "reactstrap";

const items = [
  {
    src: require("assets/img/Parshant/34983583_1843478769288814_5354803802601947136_n.jpg"),
    altText: "",
    caption: "",
    header: ""
  },
  {
    src: require("assets/img/Parshant/32744655_1741134199266171_6675808775028342784_n.jpg"),
    altText: "",
    caption: "",
    header: ""
  },
  {
    src: require("assets/img/Parshant/23498835_612150585842616_2070412233694773248_n.jpg"),
    altText: "",
    caption: "",
    header: ""
  }

  
];

class Carousel extends React.Component {
  render() {
    return (
      <>
        <section className="section section-shaped">
          <div className="shape shape-style-1 shape-default">
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
          </div>
          <Container className="py-md">
            <Row className="justify-content-between align-items-center">
              <Col className="mb-5 mb-lg-0" lg="5">
                <h1 className="display-3 text-white">
                  Contact Details
                </h1>
                <p className="text-white mt-2">
                Parshant Nagpal  </p>
                <p className="text-white mt-2">
                #2440</p>
                <p className="text-white mt-2">
                Sector 71</p>
                <p className="text-white mt-2">
                SAS Nagar, Mohali, 160071</p>
                <p className="text-white mt-2">
                Punjab</p>
                <p className="text-white mt-2">
                +919041908802, +917707904794</p>
                <p className="text-white mt-2">
                nagpal.parshant8@gmail.com
                </p>
                {/* <Button
                  className="btn-white mt-4"
                  color="default"
                  href="https://demos.creative-tim.com/argon-design-system-react/#/documentation/alerts?ref=adsr-landing-page"
                >
                  See all components
                </Button> */}
              </Col>
              <Col className="mb-lg-auto" lg="6">
                <div className="rounded shadow-lg overflow-hidden transform-perspective-right">
                  <UncontrolledCarousel items={items} />
                </div>
              </Col>
            </Row>
          </Container>
          {/* SVG separator */}
          <div className="separator separator-bottom separator-skew">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon className="fill-white" points="2560 0 2560 100 0 100" />
            </svg>
          </div>
        </section>
      </>
    );
  }
}

export default Carousel;
