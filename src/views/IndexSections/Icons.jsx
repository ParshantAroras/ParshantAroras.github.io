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
import { Button, Container, Row, Col } from "reactstrap";

class Icons extends React.Component {
  render() {
    return (
      <>
        <section className="section section-lg section-nucleo-icons pb-250">
          <Container>
            <Row className="justify-content-center">
              <Col className="text-center" lg="8">
                <h2 className="display-3">About Me</h2>
                <p className="lead">
                I am a Full Stack JavaScript Developer. My Skill set includes working in React Native , Redux,  React , Ecma Script ( ES6 and ES5, Ionic 1, Angular 1, Angular 2, Angular 5 and Angular 6, Node Js, Meteor , Hapi , Express , Mongodb , MySql.
. As a developer, I have rich experience about mobile , web " front end " of development with over 4+ years of experience in development.Understanding Problems/Ideas and provide the best solutions to it . My experience in Web and mobile apps development stands from user - friendly consumer apps to game changing enterprise B2B2C apps. I am capable of assisting my clients with entire development cycle starting from requirements gathering, application GUI, application front-end and back-end development. I have developed simple to complex mobile and web  application using React-native , React Js and MEAN development stacks. 
               </p>
                <div className="btn-wrapper">
                <Button
                        className="btn-white btn-icon mb-3 mb-sm-0"
                        color="default"
                        // href="https://www.creative-tim.com/product/argon-design-system-react?ref=adsr-landing-page"
                        size="lg"
                      >
                      <a
                          // className="btn-white btn-icon mb-3 mb-sm-0"
                        href="https://www.creative-tim.com/product/vue-argon-design-system?ref=adsr-landing-page"
                        id="tooltip265846671"
                        target="_blank"
                      >
                     <span className="btn-inner--icon mr-1">
                          <i className="ni ni-cloud-download-95" />
                        </span>
                        <span className="btn-inner--text">Download CV</span>

                      </a>
                      
                      </Button>{" "}
                </div>
              </Col>
            </Row>
           
          </Container>
        </section>
      </>
    );
  }
}

export default Icons;
