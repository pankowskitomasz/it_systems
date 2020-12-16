import React,{Component} from "react";
import Container from "../../node_modules/react-bootstrap/Container";
import Row from "../../node_modules/react-bootstrap/Row";
import Col from "../../node_modules/react-bootstrap/Col";

class ServicesDesc extends Component{
    render(){
        return(        
            <Container fluid className={"about-desc p-0 "+this.props.classExt}>
                <Row className="mx-auto text-center w-100 bg-white text-secondary py-5">
                    <Col xs={10} md={8} lg={6} className="text-center mx-auto">
                        <h3 className="mb-3">
                            Our Offer
                        </h3>
                        <p className="initialism">
                            Since 2006 our company offers reliable software for sales management. 
                            Try easy and functional software for management of: small shops, markets,
                            shop networks, gas stations or restaurant. Application's built-in 
                            functionality allows for: increasing sales, real-time analysis of sales
                            reports and provides greater control over your company's condition. 
                        </p>
                        <p className="initialism">
                            In order to acquire new customers it is worth to introduce customer's 
                            loyalty program: regular customer's cards or points for purchase. 
                            In your offer you will find also products dedicated for this purposes.
                        </p>
                    </Col>
                </Row>
                <Row className="mx-auto text-center w-100 bg-secondary" id="sales">
                    <Col xs={12} md={6} className="mx-auto text-white p-5 d-flex align-items-center">
                        <div className="text-left">
                            <h3 className="mb-3">
                                Small Shop
                            </h3>
                            <p className="initialism">
                                Small Shop is an application dedicated for small sales points with maximally
                                four cash registers. Software was created in 2006 and since then was modified
                                in order to fulfill requirements of current regulations. Application provides
                                simple interface and education mode, which allows you to decrease the cost
                                of new emplyee training.
                            </p>
                        </div>
                    </Col>
                    <Col xs={12} md={6} className="mx-auto text-shadow text-white p-0">
                        <img alt="about"
                            className="img-fluid minh-50vh h-100 fit-cover w-100"
                            src="img/services/small-shop.jpg"/>
                    </Col>
                </Row>
                <Row className="mx-auto text-center w-100 bg-white" id="integrations">
                    <Col xs={12} md={6} className="mx-auto text-shadow text-white p-0">
                        <img alt="about"
                            className="img-fluid minh-50vh h-100 fit-cover w-100"
                            src="img/services/market-qr.jpg"/>
                    </Col>
                    <Col xs={12} md={6} className="mx-auto text-secondary p-5 d-flex align-items-center">
                        <div className="text-left">
                            <h3 className="mb-3">
                                Market QR
                            </h3>
                            <p className="initialism">
                                Market QR software is an extension of small shop application. The greatest
                                differences in relation to Small Shop is related to integration with newest
                                code scanning systems. With Market QR you can introduce strict control of 
                                products in your shop and integrate it with your customer loyalty programs.                                
                            </p>
                        </div>
                    </Col>
                </Row>
                <Row className="mx-auto text-center w-100 bg-secondary" id="dedicated">
                    <Col xs={12} md={6} className="mx-auto text-shadow text-white p-5 d-flex align-items-center">
                        <div className="text-left">
                            <h3 className="mb-3">
                                IDS System
                            </h3>
                            <p className="initialism">
                                IDS System is an option for customers who need specialized individual solution
                                for their business. In fact it shouldn't be treated as software, but rather as
                                service built around some already existing modules. Basing on requirements 
                                provided by customer this set of modules is appropriatly modified and adjusted,
                                including creation of new parts of software and integration with existing
                                systems. This is the most expesnsive solution however also the the most efficient
                                one.
                            </p>
                        </div>
                    </Col>
                    <Col xs={12} md={6} className="mx-auto text-shadow text-white p-0">
                        <img alt="about"
                            className="img-fluid minh-50vh h-100 fit-cover w-100"
                            src="img/services/ids-system.jpg"/>
                    </Col>
                </Row>
            </Container>    
        );
    }
}

export default ServicesDesc;