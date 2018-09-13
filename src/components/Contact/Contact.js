import React from 'react';
import { Container, Col } from 'reactstrap';
import { Animated } from "react-animated-css";

const Contact = () => {
    return (
        <div id="contact">
            <Container className="text-center my-5">
                <Col sm="12" md={{ size: 8, offset: 2 }}>
                    <Animated animationIn="bounceInLeft" animationOut="fadeOut" animationOutDelay="4" isVisible={true}>
                        <h1 className="mb-4">Contact</h1>
                    </Animated>
                        <p>Under Construction</p>
                </Col>
            </Container>
            <hr />
        </div>
    )
}

export default Contact;