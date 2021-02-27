import React,{Component} from "react";
import Container from "../../node_modules/react-bootstrap/Container";
import Row from "../../node_modules/react-bootstrap/Row";
import Col from "../../node_modules/react-bootstrap/Col";
import Button from "../../node_modules/react-bootstrap/Button";
import Form from "../../node_modules/react-bootstrap/Form";
import update from "react-addons-update";
import {APP_LINKS} from "../config";

class LoginForm extends Component{
    constructor() {
        super();
        this.state = {
            userData: {
                name: "",
                pass: ""
            }
        };
    }

    componentDidMount(){
        if(this.getCookie("tkid").length>0){
            let formData = new FormData();
            let utk = this.getCookie("tkid");
            formData.append("tkid",utk);
            fetch(APP_LINKS.users,{
                method:"POST",
                body:formData
            })
            .then((response)=>{
                if(response.status===200){
                    this.props.backNav("dashboard");
                }
                else if(response.status===401){
                    this.setCookie("tkid","",-1);
                }
            })
            .catch((error)=>{
                this.props.backNav("form");
            });  
            this.clearForm();
        }
    }

    updateUserData(ev) {
        var updateData;
        if (ev.target.name === "userName") {
            updateData = update(this.state.userData, {
                name: { $set: ev.target.value }
            });
            this.setState({ userData: updateData });
        }
        else if (ev.target.name === "userPass") {
            updateData = update(this.state.userData, {
                pass: { $set: ev.target.value }
            });
            this.setState({ userData: updateData });
        }
    }

    getCookie(cname) {
        var name = cname + "=";
        var decodedCookie = decodeURIComponent(document.cookie);
        var ca = decodedCookie.split(';');
        for(var i = 0; i <ca.length; i++) {
          var c = ca[i];
          while (c.charAt(0) === ' ') {
            c = c.substring(1);
          }
          if (c.indexOf(name) === 0) {
            return c.substring(name.length, c.length);
          }
        }
        return "";
    }

    setCookie(cname, cvalue, exh) {
        var d = new Date();
        d.setTime(d.getTime() + (exh*60*60*1000));
        var expires = "expires="+ d.toUTCString();
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    }

    sendForm(){
        if(this.state.userData.name.length!==0
        && this.state.userData.pass.length!==0){
            let formData = new FormData();
            formData.append("userName",this.state.userData.name);
            formData.append("userPass",this.state.userData.pass);
            if(this.getCookie("tkid").length>0){
                let utk = this.getCookie("tkid");
                formData.append("tkid",utk);
            }
            fetch(APP_LINKS.users,{
                method:"POST",
                body:formData
            })
            .then((response)=>response.json())
            .then((data)=>{
                if(data["tkid"]!==undefined){                    
                    this.setCookie("tkid",data.tkid,2);
                    this.props.backNav("dashboard");
                }
            })
            .catch((error)=>{
                this.props.backNav("error");
            });  
            this.clearForm();
        }
    }

    clearForm(){
        let clearData = update(this.state.userData,{
            name: {$set: ""},
            pass: {$set:""}
        });
        this.setState({ userData: clearData });        
    }

    render(){
        return(        
            <Container fluid className={"login-form align-items-center p-0 py-5 bg-white d-flex minh-75vh "+this.props.classExt}>
                <Row className="mx-auto text-center w-100">
                    <Col xs={8} md={5} lg={4} className="mx-auto p-0 d-flex align-items-center">
                        <Form className="text-left w-100 border border-secondary p-4 rounded bg-white shadow text-secondary font-weight-bold"
                            autoComplete="off"
                            method="POST">
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
                                    maxLength="50"
                                    name="userName"
                                    onChange={this.updateUserData.bind(this)} 
                                    value={this.state.userData.name}
                                    required/>
                            </Form.Group>
                            <Form.Group controlId="formPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" 
                                    placeholder="Enter password" 
                                    className="rounded-pill"
                                    maxLength="40"
                                    name="userPass"
                                    onChange={this.updateUserData.bind(this)} 
                                    value={this.state.userData.pass}
                                    required/>
                            </Form.Group>
                            <div className="w-100 text-right">
                                <Button 
                                    variant="outline-dark" 
                                    type="reset" 
                                    className="mx-1 rounded-pill">
                                    Clear
                                </Button>
                                <Button variant="outline-dark" 
                                    className="mx-1 rounded-pill"
                                    onClick={this.sendForm.bind(this)}>
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