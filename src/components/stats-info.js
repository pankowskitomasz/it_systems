import React,{Component} from "react";
import {Link} from "react-router-dom";
import Container from "../../node_modules/react-bootstrap/Container";
import Row from "../../node_modules/react-bootstrap/Row";
import Col from "../../node_modules/react-bootstrap/Col";
import Button from "../../node_modules/react-bootstrap/Button";

class StatsInfo extends Component{
    render(){
        let linking;
        if(this.props.backLink!==undefined){
            linking = <Link to={this.props.backLink.path}>
                <Button variant="outline-warning" className="rounded-pill">
                    {this.props.backLink.name}
                </Button>
            </Link>;
        }
        return(        
            <Container fluid className={"stats-info align-items-center px-0 py-5 bg-secondary minh-50vh d-flex "+this.props.classExt}>
                <div className="w-100">
                    <Row className="mx-auto text-center w-100 py-3">
                        <Col xs={12} className="mx-auto text-shadow text-white p-0">
                            <h1 className="display-4 font-weight-bold font-logo text-orange">
                                Our Achievements
                            </h1>
                        </Col>
                    </Row>
                    <Row className="mx-auto text-center w-100 py-3 text-center">
                        <Col xs={12} md={4} className="mx-auto text-shadow text-white p-0">
                            <span className="fa fa-pie-chart icon-big opacity-8 mb-3 text-orange"></span>
                            <p className="lead font-weight-bold text-uppercase">
                                <span className="text-orange">12 years</span><br/> 
                                on market
                            </p>
                        </Col>
                        <Col xs={12} md={4} className="mx-auto text-shadow text-white p-0">
                            <span className="fa fa-group icon-big opacity-8 mb-3 text-orange"></span>
                            <p className="lead font-weight-bold text-uppercase">
                                <span className="text-orange">472</span><br/>
                                Customers
                            </p>
                        </Col>
                        <Col xs={12} md={4} className="mx-auto text-shadow text-white p-0">
                            <span className="fa fa-gears icon-big opacity-8 mb-3 text-orange"></span>
                            <p className="lead font-weight-bold text-uppercase">
                                <span className="text-orange">1100+</span><br/> 
                                Realized projects
                            </p>
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

export default StatsInfo;