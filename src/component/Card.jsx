import React from 'react'
import '../style/component/card.css'
import { Container, Card, Col, Row, CardGroup, Button } from 'react-bootstrap'
import Backcard1 from "../asset/service-shape1.png"
import Backcard from "../asset/service-shape.png"
import { Link } from 'react-router-dom'

const CompCard = () => {
    return (
        <div className='service-area pb-70'>
            <div>
                <img>
                </img>
            </div>
            <Container>
                <div className='section-title'>
                    <span>
                        Offering Services
                    </span>
                    <h2 className='h2'>
                        Our Amazing Feature
                    </h2>
                </div>
            </Container>

            <Container bg="light">
            <Row className="justify-content-md-center">
                <Col md="auto">
                    <Card className='cards' style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="holder.js/100px180" />
                        <Card.Body>
                            <Card.Title>Translate</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <img className='img-two' src={Backcard}>
                            </img>
                            <img className='img-one' src={Backcard1}>
                            </img>
                            <Link to="/translate">
                           <Button variant="primary">Go somewhere</Button>
                           </Link> 
                        </Card.Body>
                    </Card>
                </Col>
                <Col md="auto">
                    <Card className='cards' style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="holder.js/100px180" />
                        <Card.Body>
                            <Card.Title>Motivate</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <img className='img-two' src={Backcard}>
                            </img>
                            <img className='img-one' src={Backcard1}>
                            </img>
                           <Link to="/motivate">
                           <Button variant="primary">Go somewhere</Button>
                           </Link> 
                        </Card.Body>
                    </Card>
                </Col>
                <Col md="auto">
                    <Card className='cards' style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="holder.js/100px180" />
                        <Card.Body>
                            <Card.Title>Comming Soon..</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <img className='img-two' src={Backcard}>
                            </img>
                            <img className='img-one' src={Backcard1}>
                            </img>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            </Container>
        </div>
    )
}

export default CompCard;