import { render } from '@testing-library/react';
import React, { Component } from "react";
import '.././App.css'

class ExperienceDisplay extends Component{

    constructor(props){
        super(props);
    }

    render(){
        const {from, to, company, position, city} = this.props
        console.log("eddisplay")
       
        return <div className="education-display-item">
        <div>
            <div className="from-to"><span>{from}</span> - <span>{to}</span> </div>
        </div>
        <div className='university-city-info'>
            <div className="uni">
                <span>{position}</span>
            </div>
            <div>
                <span>{company}</span>, <span>{city}</span> 
            </div>
        </div>
    </div>
    }

}
export default ExperienceDisplay
