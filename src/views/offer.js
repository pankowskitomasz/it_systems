import React,{Component} from "react";
import ServicesDesc from "../components/services-desc";
import ServicesTop from "../components/services-top";


class Offer extends Component{
    render(){
        return(        
            <main className="minh-100vh p-header bg-white">
                <ServicesTop/>
                <ServicesDesc/>
            </main>
        );
    }
}

export default Offer;