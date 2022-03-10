import { render } from '@testing-library/react';
import React, { Component } from "react";
import '.././App.css'
import EducationDisplay from './EducationDisplay';
import ExperienceDisplay from './ExperienceDisplay';


class CvDisplay extends Component {

    constructor(props) {
        super(props);
        this.renderEducationDisplay = this.renderEducationDisplay.bind(this);
        this.renderExperienceDisplay = this.renderExperienceDisplay.bind(this);
    }

    renderEducationDisplay() {

        const { educationArray } = this.props
        return educationArray.map((el) => {
            /*console.log("rendereducationdisplay")
            console.log(el);*/
            return <EducationDisplay from={el.from} to={el.to} degree={el.degree} subject={el.subject} universityName={el.universityName} city={el.city}></EducationDisplay>
        })

    }
    renderExperienceDisplay(){
        const { experienceArray } = this.props
        return experienceArray.map((el) => {
            /*console.log("rendereducationdisplay")
            console.log(el);*/
            return <ExperienceDisplay from={el.from} to={el.to} position = {el.position} company = {el.company} city={el.city} ></ExperienceDisplay>
        })
    }

    render() {

        const { persInfo } = this.props;
        return <div className="cv-display" id = "cv-display">
            <div className="display-pers-info">
                <div className="name-surname-display">
                    <div className="name-display">
                        {persInfo.firstName}
                    </div>
                    <div className="surname-display">
                        {persInfo.lastName}
                    </div>
                </div>
                <div className="title-display">
                    {persInfo.title}
                </div>
            </div>
            <div className="main-display">
                <div className='education-experience-display'>
                    <div className='description-display'>
                        <div className="desc-info" >
                            Description
                        </div>
                        <div className="description-text">
                            {persInfo.description}
                        </div>
                    </div>

                    <div>
                        <div className="desc-info" >
                            Education
                        </div>

                        <div className="education-array-info">

                            {this.renderEducationDisplay()}
                        </div>
                    </div>
                    <div>
                        <div className="desc-info" >
                            Experience
                        </div>
                        <div className="education-array-info">

                            {this.renderExperienceDisplay()}
                        </div>
                    </div>

                </div>
                <div className="phone-email-address-display">
                    <div className="pers-details-text">
                        Personal Details
                    </div>
                    <div className="feature-value">
                        <div>
                            Address:
                        </div>
                        <div className='value'>
                            {persInfo.address}
                        </div>
                    </div>
                    <div className="feature-value">
                        <div>
                            Phone Number:
                        </div>
                        <div className='value'>
                            {persInfo.phoneNumber}
                        </div>
                    </div>
                    <div className="feature-value">
                        <div>
                            Email:
                        </div>
                        <div className="value">
                            {persInfo.email}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    }

}
export default CvDisplay
