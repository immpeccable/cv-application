import { render } from '@testing-library/react';
import React, { Component } from "react";
import '.././App.css'


class EducationItem extends Component {


    constructor(props) {

        super(props);
        

    }

    render() {

        const {uid, onChangee, universityName, city, degree, subject, from, to } = this.props;
        console.log("uid: "+uid);

        return <div className="education-form" id = {uid}>
            <input onChange={onChangee} className="first-name" type="text" id="universityName" placeholder="University Name" value={universityName} />
            <input onChange={onChangee} className="last-name" type="text" id="city" placeholder="City" value={city} />
            <input onChange={onChangee} className="title" type="text" id="degree" placeholder="Degree" value={degree} />
            <input onChange={onChangee} className="address" type="text" id="subject" placeholder="Subject" value={subject} />
            <input onChange={onChangee} className="phone-number" type="text" id="from" placeholder="From" value={from} />
            <input onChange={onChangee} className="email" type="email" id="to" placeholder="To" value={to} />
            </div> 

    }



}    
export default EducationItem;