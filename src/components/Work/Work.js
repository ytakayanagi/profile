import React from 'react';
import { Container, Col, Row, Card, CardImg, CardTitle, CardText, CardDeck,CardSubtitle, CardBody } from 'reactstrap';
import workPortfolio from './portfolio.png';
import workAtHouse from './athouse.png';
import workStudioCity from './studiocitykendodojo.png';
import Bounce from 'react-reveal/Bounce';
import Fade from 'react-reveal/Fade';

const Work = () => {
    return (
        <section id="work" className="bg-light">
            <Container className="text-center my-5">
                <Row className="text-center mb-4">
                    <Col sm="12" md={{ size: 8, offset: 2 }}>
                        <Bounce left>
                            <h1 className="mb-4">Work</h1>
                        </Bounce>
                    </Col>
                </Row>
                <Fade>
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
                            <a href="https://github.com/ytakayanagi/profile" target="_blank" rel="noopener noreferrer">GitHub</a>
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
                            <a href="http://at-house.com/" target="_blank" rel="noopener noreferrer">Visit Website</a>
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
                            <a href="http://studiocitykendo.org/" target="_blank" rel="noopener noreferrer">Visit Website</a>
                            </CardBody>
                        </Card>
                    </CardDeck>
                </Fade>
            </Container>
        </section>
    )
}

export default Work;