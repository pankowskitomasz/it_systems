import React,{Component} from "react";
import Container from "../../node_modules/react-bootstrap/Container";
import Row from "../../node_modules/react-bootstrap/Row";
import Col from "../../node_modules/react-bootstrap/Col";
import Button from "../../node_modules/react-bootstrap/Button";
import Form from "../../node_modules/react-bootstrap/Form";

class LoginForm extends Component{
    render(){
        return(        
            <Container fluid className={"login-form align-items-center p-0 py-5 bg-white d-flex minh-75vh "+this.props.classExt}>
                <Row className="mx-auto text-center w-100">
                    <Col xs={10} md={5} lg={4} className="mx-auto p-0 d-flex align-items-center">
                        <Form className="text-left w-100 border border-secondary p-4 rounded bg-white shadow text-secondary font-weight-bold">
                            <div className="border-bottom mb-4">
                                <p className="font-weight-bold mb-1">
                                    User Login
                                </p>
                            </div>
                            <Form.Group controlId="formLogin">
                                <Form.Label>Login</Form.Label>
                                 <Form.Control type="text" 
                                    placeholder="Enter login" 
                                    className="rounded-pill"
                                    maxLength="50"/>
                            </Form.Group>
                            <Form.Group controlId="formPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" 
                                    placeholder="Enter password" 
                                    className="rounded-pill"
                                    maxLength="40"/>
                            </Form.Group>
                            <div className="w-100 text-right">
                                <Button variant="outline-dark" type="reset" className="mx-1 rounded-pill">
                                    Clear
                                </Button>
                                <Button variant="outline-dark" type="submit" className="mx-1 rounded-pill">
                                    Login
                                </Button>
                            </div>
                        </Form>
                    </Col>
                </Row>
            </Container>    
        );
    }
}

export default LoginForm;