import React,{Component} from "react";
import IndexSlider from "../components/index-slider";
import StatsInfo from "../components/stats-info";
import Tiles from "../components/tiles";
import {homeCfg} from "../config";
import ContactData from "../components/contact-data";

class Home extends Component{
    render(){
        return(        
            <main className="minh-100vh">
                <IndexSlider/> 
                <StatsInfo backLink={homeCfg[0]}/>
                <Tiles backLink={homeCfg[1]}/>
                <ContactData backLink={homeCfg[2]}/>
            </main>
        );
    }
}

export default Home;