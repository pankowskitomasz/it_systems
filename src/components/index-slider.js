import React,{Component} from "react";
import {Link} from "react-router-dom";
import Container from "../../node_modules/react-bootstrap/Container";
import Row from "../../node_modules/react-bootstrap/Row";
import Col from "../../node_modules/react-bootstrap/Col";
import Carousel from "../../node_modules/react-bootstrap/Carousel";
import Button from "../../node_modules/react-bootstrap/Button";

class IndexSlider extends Component{
    render(){
        return(        
            <Container fluid className={"index-slider d-flex align-items-center p-0 bg-dark minh-100vh "+this.props.classExt}>
                <Row className="mx-auto text-center d-flex w-100">
                    <Col xs={12} className="mx-auto text-shadow text-white p-0">
                        <Carousel>
                            <Carousel.Item>
                                <img alt="slide" 
                                    className="d-block w-100 h-100vh fit-cover"
                                    src="img/index-slider/slide-1.jpg"/>
                                <Carousel.Caption className="mb-5">
                                    <h1 className="display-3 font-weight-bold font-logo text-orange">
                                        Sales and Integration
                                    </h1>
                                    <p className="initialism">
                                        Our company provides wide range of sales and comapany management
                                        software including ERP software. Check our offer now!
                                    </p>
                                    <Link to="/offer">
                                        <Button variant="warning" className="rounded-pill">
                                            See more
                                        </Button>
                                    </Link>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img alt="slide" 
                                    className="d-block w-100 h-100vh fit-cover"
                                    src="img/index-slider/slide-2.jpg"/>
                                <Carousel.Caption className="mb-5">
                                    <h1 className="display-3 font-weight-bold font-logo text-orange">
                                        Knowledge and experience
                                    </h1>
                                    <p className="initialism">
                                        Our team includes specialists from sales and intergration
                                        areas. See more information about us.
                                    </p>
                                    <Link to="/about">
                                        <Button variant="warning" className="rounded-pill">
                                            See more
                                        </Button>
                                    </Link>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img alt="slide" 
                                    className="d-block w-100 h-100vh fit-cover"
                                    src="img/index-slider/slide-3.jpg"/>
                                <Carousel.Caption className="mb-5">
                                    <h1 className="display-3 font-weight-bold font-logo text-orange">
                                        Contact now
                                    </h1>
                                    <p className="initialism">
                                        Our employees are for your disposal and answer all your questions.
                                        Contact us online, by phone or personally. 
                                    </p>
                                    <Link to="/contact">
                                        <Button variant="warning" className="rounded-pill">
                                            See more
                                        </Button>
                                    </Link>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                    </Col>
                </Row>
            </Container>    
        );
    }
}

export default IndexSlider;