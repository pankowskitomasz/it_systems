import React,{Component} from "react";
import AboutDesc from "../components/about-desc";
import StatsInfo from "../components/stats-info";


class About extends Component{
    render(){
        return(         
            <main className="minh-100vh p-header bg-white">                
                <StatsInfo/>
                <AboutDesc/>
            </main>
        );
    }
}

export default About;