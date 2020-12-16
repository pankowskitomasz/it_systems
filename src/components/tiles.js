import React,{Component} from "react";
import {Link} from "react-router-dom";
import Container from "../../node_modules/react-bootstrap/Container";
import Row from "../../node_modules/react-bootstrap/Row";
import Col from "../../node_modules/react-bootstrap/Col";
import Button from "../../node_modules/react-bootstrap/Button";
import Card from "../../node_modules/react-bootstrap/Card";

class Tiles extends Component{
    render(){
        let linking;
        if(this.props.backLink!==undefined){
            linking = <Link to={this.props.backLink.path}>
                <Button variant="warning" className="rounded-pill">
                    See now
                </Button>
            </Link>;
        }
        return(        
            <Container fluid className={"tiles align-items-center px-0 py-5 bg-white minh-50vh d-flex "+this.props.classExt}>
                <div className="mx-auto px-5">
                    <Row className="mx-auto text-center w-100 py-3">
                        <Col xs={12} className="mx-auto text-white p-0">
                            <h1 className="display-4 font-weight-bold font-logo text-orange">
                                Our Services
                            </h1>
                        </Col>
                    </Row>
                    <Row className="mx-auto text-center w-100 py-3 text-center">
                        <Col xs={12} sm={6} md={4} className="mx-auto text-white p-2">
                            <Link to="/offer#sales" className="text-decoration-none mb-3 hover-orange">
                                <Card className="shadow h-100">
                                    <Card.Img src="img/services/tile-1.jpg" className="h-35vh fit-cover"/>
                                    <Card.Footer className="text-orange font-weight-bold px-2">
                                        Sales Software
                                    </Card.Footer>
                                </Card>
                            </Link>
                        </Col>
                        <Col xs={12} sm={6} md={4} className="mx-auto text-white p-2">
                            <Link to="/offer#integrations" className="text-decoration-none mb-3 hover-orange">
                                <Card className="shadow h-100">
                                    <Card.Img src="img/services/tile-2.jpg" className="h-35vh fit-cover"/>
                                    <Card.Footer className="text-orange font-weight-bold px-2">
                                        Software Integrations
                                    </Card.Footer>
                                </Card>
                            </Link>
                        </Col>
                        <Col xs={12} sm={6} md={4} className="mx-auto text-white p-2">
                            <Link to="/offer#dedicated" className="text-decoration-none mb-3 hover-orange">
                                <Card className="shadow h-100">
                                    <Card.Img src="img/services/tile-3.jpg" className="h-35vh fit-cover"/>
                                    <Card.Footer className="text-orange font-weight-bold px-2">
                                        Dedicated Solutions                                        
                                    </Card.Footer>
                                </Card>
                            </Link>
                        </Col>
                    </Row>
                    <Row className="mx-auto text-center w-100 py-3">
                        <Col xs={12} className="mx-auto text-shadow text-white p-0">
                            {linking}
                        </Col>
                    </Row>
                </div>
            </Container>    
        );
    }
}

export default Tiles;