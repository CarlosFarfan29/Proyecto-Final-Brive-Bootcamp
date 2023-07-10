import React from "react";
import { Row, Col, Button, Container } from "reactstrap";
import { LoginForm } from "../components/Auth/LoginForm";

export function Login() {
  return (
    <>
      <div className="container-page">

        <div className="background-shapes">
          <div className="rectangle1 bottom-left"></div>
          <div className="rectangle2 bottom-left"></div>
          <div className="rectangle3 bottom-left"></div>


          <div className="rectangle1 top-right"></div>
          <div className="rectangle2 top-right"></div>
          <div className="rectangle3 top-right"></div>

        </div>

        <div className="card-container-login card-container">
          <Container>
            <Row className="">
              <div className="screen__background">
                <span className="screen__background__shape screen__background__shape4"></span>
                <span className="screen__background__shape screen__background__shape3"></span>
                <span className="screen__background__shape screen__background__shape2"></span>
                <span className="screen__background__shape screen__background__shape1"></span>
              </div>
              <Col
                xs="12"
                sm={{ size: 12, offset: 0 }}
                md={{ size: 12, offset: 0 }}
                lg={{ size: 12, offset: 0 }}
              >
                {/*
                    <Row className="logo-aux">
                <Col xs="12" className="flex justify-center items-center mt-8">
                  <img src="" alt="" />
                </Col>
              </Row>
                    
                    */}

                {<LoginForm />}
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </>
  );
}
