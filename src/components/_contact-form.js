import React, { Component } from "react";
import Container from "../../node_modules/react-bootstrap/Container";
import Row from "../../node_modules/react-bootstrap/Row";
import Col from "../../node_modules/react-bootstrap/Col";
import Button from "../../node_modules/react-bootstrap/Button";
import Form from "../../node_modules/react-bootstrap/Form";
import update from "react-addons-update";

class ContactForm extends Component {
    constructor() {
        super();
        this.state = {
            formData: {
                emailAddress: "",
                firstName: "",
                lastName: "",
                messageText: "",
                phoneNumber: ""
            }
        };
    }
    updateFormData(ev) {
        var updateData;
        if (ev.target.name === "firstName") {
            updateData = update(this.state.formData, {
                firstName: { $set: ev.target.value }
            });
            this.setState({ formData: updateData });
        }
        else if (ev.target.name === "lastName") {
            updateData = update(this.state.formData, {
                lastName: { $set: ev.target.value }
            });
            this.setState({ formData: updateData });
        }
        else if (ev.target.name === "emailAddress") {
            updateData = update(this.state.formData, {
                emailAddress: { $set: ev.target.value }
            });
            this.setState({ formData: updateData });
        }
        else if (ev.target.name === "phoneNumber") {
            updateData = update(this.state.formData, {
                phoneNumber: { $set: ev.target.value }
            });
            this.setState({ formData: updateData });
        }
        else if (ev.target.name === "messageText") {
            updateData = update(this.state.formData, {
                messageText: { $set: ev.target.value }
            });
            this.setState({ formData: updateData });
        }
    }

    sendForm(){
        if(this.state.formData.firstName.length!==0
        && this.state.formData.lastName.length!==0
        && this.state.formData.emailAddress.length!==0
        && this.state.formData.phoneNumber.length!==0
        && this.state.formData.messageText.length!==0){
            let formData = new FormData();
            formData.append("fname",this.state.formData.firstName);
            formData.append("lname",this.state.formData.lastName);
            formData.append("fmail",this.state.formData.emailAddress);
            formData.append("fphone",this.state.formData.phoneNumber);
            formData.append("fmsg",this.state.formData.messageText);
            fetch("message.php",{
                method:"POST",
                body:formData
            })
            .then((response)=>response.json())
            .then((data)=>console.log(data))
            .catch((error)=>console.log("Message not send"));  
        }
    }
    render() {
        return (
            <Container fluid className={"contact-form align-items-center p-0 py-5 bg-white d-flex minh-50vh " + this.props.classExt}>
                <Row className="mx-auto text-center w-100">
                    <Col xs={10} md={6} className="mx-auto p-0 d-flex align-items-center">
                        <Form className="text-left w-100 border border-secondary p-4 rounded bg-white shadow text-secondary font-weight-bold"
                            autoComplete="off"
                            method="POST">
                            <div className="border-bottom mb-4">
                                <p className="font-weight-bold mb-1">
                                    Contact online
                                </p>
                            </div>
                            <Form.Group controlId="formFirstName">
                                <Form.Label>First Name</Form.Label>
                                <Form.Control type="text"
                                    placeholder="Enter first name"
                                    className="rounded-pill"
                                    maxLength="50"
                                    name="firstName"
                                    onChange={this.updateFormData.bind(this)} 
                                    required/>
                            </Form.Group>
                            <Form.Group controlId="formLastName">
                                <Form.Label>Last Name</Form.Label>
                                <Form.Control type="text"
                                    placeholder="Enter last name"
                                    className="rounded-pill"
                                    maxLength="50"
                                    name="lastName"
                                    onChange={this.updateFormData.bind(this)} 
                                    required/>
                            </Form.Group>
                            <Form.Group controlId="formEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email"
                                    placeholder="Enter email"
                                    className="rounded-pill"
                                    maxLength="50"
                                    name="emailAddress"
                                    onChange={this.updateFormData.bind(this)} 
                                    required/>
                            </Form.Group>
                            <Form.Group controlId="formPhone">
                                <Form.Label>Phone</Form.Label>
                                <Form.Control type="tel"
                                    placeholder="Enter phone"
                                    className="rounded-pill"
                                    maxLength="15"
                                    name="phoneNumber"
                                    onChange={this.updateFormData.bind(this)} 
                                    required/>
                            </Form.Group>
                            <Form.Group controlId="formMessage">
                                <Form.Label>Message</Form.Label>
                                <Form.Control as="textarea"
                                    rows={4}
                                    maxLength="250"
                                    name="messageText"
                                    onChange={this.updateFormData.bind(this)} 
                                    required/>
                            </Form.Group>
                            <div className="w-100 text-center">
                                <Button variant="outline-dark"
                                    type="reset"
                                    className="mx-1 rounded-pill">
                                    Clear
                                </Button>
                                <Button
                                    variant="outline-dark"
                                    className="mx-1 rounded-pill"
                                    onClick={this.sendForm.bind(this)}>
                                    Send
                                </Button>
                            </div>
                        </Form>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default ContactForm;