import React from 'react';
import { Container, Col, Row } from 'reactstrap';
import Bounce from 'react-reveal/Bounce';
import Fade from 'react-reveal/Fade';
import './Contact.css';

const Contact = () => {
    return (
        <div id="contact">
            <Container className="text-center my-5">
                <Row>
                    <Col sm="12" md={{ size: 8, offset: 2 }}>
                        <Bounce left>
                            <h1 className="mb-5">Contact</h1>
                        </Bounce>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Fade>
                            <form className="text-center w-50 mx-auto" action="https://usebasin.com/f/07b2cf16babe" method="POST">
                                <div className="form-group">
                                    <input
                                        name="name"
                                        component="input"
                                        type="text"
                                        placeholder="Name"
                                        className="form-control"
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <input
                                        name="email"
                                        component="input"
                                        type="email"
                                        placeholder="Enter email"
                                        className="form-control"
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <input 
                                        name="message" 
                                        component="textarea" 
                                        type="text"
                                        placeholder="Your message" 
                                        className="form-control"
                                        required
                                    />
                                </div>
                                <div className="form-group text-xs-center">
                                    <div className="g-recaptcha" data-sitekey="6Lew3SMUAAAAAJ82QoS7gqOTkRI_dhYrFy1f7Sqy"></div>
                                </div>
                                <div>
                                    <button className="btn btn-primary" type="submit">
                                        Submit
                                    </button>
                                </div>
                            </form>
                        </Fade>
                    </Col>
                </Row>
            </Container>
            <hr />
        </div>
    )
}

export default Contact;