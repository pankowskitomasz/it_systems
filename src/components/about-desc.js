import React,{Component} from "react";
import Container from "../../node_modules/react-bootstrap/Container";
import Row from "../../node_modules/react-bootstrap/Row";
import Col from "../../node_modules/react-bootstrap/Col";

class AboutDesc extends Component{
    render(){
        return(        
            <Container fluid className={"about-desc p-0 "+this.props.classExt}>
                <Row className="mx-auto text-center w-100 bg-secondary">
                    <Col xs={12} md={6} className="mx-auto text-shadow text-white p-5 d-flex align-items-center">
                        <div className="text-left">
                            <h3 className="mb-3">
                                Who we are
                            </h3>
                            <p className="initialism">
                                Our company operates on market since 2006. Whole programming team was created
                                basing on experienced programmers, itegrators and customer support specialists.
                                Together we create dynamic and profesional team providing our customers best
                                quality services, adjusted to individual customer needs, what allows for 
                                simple and effective management with delivered solutions. 
                            </p>
                        </div>
                    </Col>
                    <Col xs={12} md={6} className="mx-auto text-shadow text-white p-0">
                        <img alt="about"
                            className="img-fluid minh-50vh h-100 fit-cover w-100"
                            src="img/about/about-desc.jpg"/>
                    </Col>
                </Row>
                <Row className="mx-auto text-center w-100 bg-white">
                    <Col xs={12} md={6} className="mx-auto text-shadow text-white p-0">
                        <img alt="about"
                            className="img-fluid minh-50vh h-100 fit-cover w-100"
                            src="img/about/about-desc-2.jpg"/>
                    </Col>
                    <Col xs={12} md={6} className="mx-auto text-secondary p-5 d-flex align-items-center">
                        <div className="text-left">
                            <h3 className="mb-3">
                                What we do
                            </h3>
                            <p className="initialism">
                                We believe that main aim of software is serve user's purposes and provide user
                                friendly interface and positive user experience. We are open on custmer's 
                                needs and we always do our best in order to adjust each product in most suitable 
                                way to individual needs. In our offer you will find ready-to-use solutions, as 
                                well as software prepared especially for individual customers. Due to many
                                years of experience, our employees are able to help in any case related to
                                our business profile.
                            </p>
                        </div>
                    </Col>
                </Row>
                <Row className="mx-auto text-center w-100 bg-secondary">
                    <Col xs={12} md={6} className="mx-auto text-shadow text-white p-5 d-flex align-items-center">
                        <div className="text-left">
                            <h3 className="mb-3">
                                Partnerships
                            </h3>
                            <p className="initialism">
                                Many years of presence on market allowed our company to build strong relations,
                                that allows us to get wide access to new technologies and IT solutions. Cooperation
                                with renowned software developers allows us to provide wide range of software
                                integration with most popular applications on market.                                 
                            </p>
                        </div>
                    </Col>
                    <Col xs={12} md={6} className="mx-auto text-shadow text-white p-0">
                        <img alt="about"
                            className="img-fluid minh-50vh h-100 fit-cover w-100"
                            src="img/about/about-desc-3.jpg"/>
                    </Col>
                </Row>
            </Container>    
        );
    }
}

export default AboutDesc;