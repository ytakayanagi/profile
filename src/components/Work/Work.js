import React from 'react';
import { Container, Col, Row, Card, Button, CardImg, CardTitle, CardText, CardDeck,CardSubtitle, CardBody } from 'reactstrap';
import { Animated } from "react-animated-css";
import workPortfolio from './portfolio.png';
import workAtHouse from './athouse.png';
import workStudioCity from './studiocitykendodojo.png';

const Work = () => {
    return (
        <section id="work" className="bg-light">
            <Container className="text-center my-5">
                <Row className="text-center mb-5">
                    <Col sm="12" md={{ size: 8, offset: 2 }}>
                        <Animated animationIn="bounceInLeft" animationOut="fadeOut" animationOutDelay="4" isVisible={true}>
                            <h1 className="mb-4">Work</h1>
                        </Animated>
                    </Col>
                </Row>
                <CardDeck>
                    <Card>
                        <CardImg top width="100%" src={workPortfolio} alt="Portfolio" />
                        <hr className="my-0" />
                        <CardBody>
                        <CardTitle>Portfolio</CardTitle>
                        <hr />
                        <CardSubtitle>HTML/CSS, JS, Bootstrap, React, Webpack</CardSubtitle>
                        <hr />
                        <CardText>This is my portfolio website designed to present my work and skills as a Front-End Developer.</CardText>
                        <Button href="https://github.com/ytakayanagi/profile" target="_blank">GitHub</Button>
                        </CardBody>
                    </Card>
                    <Card>
                        <CardImg top width="100%" src={workAtHouse} alt="At House" />
                        <hr className="my-0" />
                        <CardBody>
                        <CardTitle>At House</CardTitle>
                        <hr />
                        <CardSubtitle>HTML/CSS, JS, jQuery, WordPress, WooCommerce</CardSubtitle>
                        <hr />
                        <CardText>At House is a plumbing/hardware retailer that also provides services in Lake Forest.</CardText>
                        <Button href="http://at-house.com/" target="_blank">Visit Website</Button>
                        </CardBody>
                    </Card>
                    <Card>
                        <CardImg top width="100%" src={workStudioCity} alt="Studio City Kendo Dojo" />
                        <hr className="my-0" />
                        <CardBody>
                        <CardTitle>Studio City Kendo</CardTitle>
                        <hr />
                        <CardSubtitle>HTML/CSS, JS, jQuery, WordPress</CardSubtitle>
                        <hr />
                        <CardText>Studio City Kendo Dojo is a martial arts dojo teaching Japanese swordsmanship.</CardText>
                        <Button href="http://studiocitykendo.org/" target="_blank">Visit Website</Button>
                        </CardBody>
                    </Card>
                </CardDeck>
            </Container>
        </section>
    )
}

export default Work;