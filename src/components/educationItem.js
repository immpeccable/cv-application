import { render } from '@testing-library/react';
import React, { Component } from "react";
import '.././App.css'


class EducationItem extends Component {


    

    render() {

        const { onChangee, universityName, city, degree, subject, from, to, idx, onDeleteEducation } = this.props;
        //console.log("uid: "+idx);

        return <div className="education-form" id = {idx}>
            <input onChange={onChangee} className="first-name" type="text" id={"universityName" + idx} placeholder="University Name" value={universityName} />
            <input onChange={onChangee} className="last-name" type="text" id={"city" + idx} placeholder="City" value={city} />
            <input onChange={onChangee} className="title" type="text" id={"degree" + idx} placeholder="Degree" value={degree} />
            <input onChange={onChangee} className="address" type="text" id={"subject" + idx} placeholder="Subject" value={subject} />
            <input onChange={onChangee} className="phone-number" type="text" id={"from" + idx} placeholder="From" value={from} />
            <input onChange={onChangee} className="email" type="email" id={"to" + idx} placeholder="To" value={to} />
            <button onClick={onDeleteEducation} id = {"delete-button-"+idx} className = "education-button">Delete</button>
            </div> 

    }



}    
export default EducationItem;