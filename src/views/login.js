import React,{Component} from "react";
import LoginForm from "../components/login-form";
import ServicesTop from "../components/services-top";

class Login extends Component{
    render(){
        return(        
            <main className="minh-100vh p-header bg-white">
                <ServicesTop/>
                <LoginForm/>
            </main>
        );
    }
}

export default Login;