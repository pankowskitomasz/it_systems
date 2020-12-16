import React,{Component} from "react";
import Container from "../../node_modules/react-bootstrap/Container";

class ServicesTop extends Component{
    render(){
        return(        
            <Container fluid className={"services-top align-items-center p-0 bg-secondary shadow d-flex minh-25vh "+this.props.classExt}>
            </Container>    
        );
    }
}

export default ServicesTop;