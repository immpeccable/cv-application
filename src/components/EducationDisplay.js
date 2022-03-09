import { render } from '@testing-library/react';
import React, { Component } from "react";
import '.././App.css'

class EducationDisplay extends Component{

    constructor(props){
        super(props);
    }

    render(){
        const {from, to, universityName, degree, subject, city} = this.props
        console.log("eddisplay")
       
        return <div className="education-display-item">
        <div>
            <div className="from-to"><span>{from}</span> - <span>{to}</span> </div>
        </div>
        <div className='university-city-info'>
            <div className="uni">
                <span>{universityName}</span>, <span>{city}</span>
            </div>
            <div>
                Degree: <span>{degree}</span>
            </div>
            <div>
                Subject: <span>{subject}</span>
            </div>
        </div>
    </div>
    }

}
export default EducationDisplay



