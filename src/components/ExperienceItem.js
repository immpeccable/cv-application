import { render } from '@testing-library/react';
import React, { Component } from "react";
import '.././App.css'

class ExperienceItem extends Component {

    render() {
        const { onChange, position, company, city, from, to, onDeleteExperience, idx } = this.props;
        return <div className="experience-form" id = {idx}>
            <input onChange={onChange} className="first-name" type="text" id={"position" + idx} placeholder="Position" value={position} />
            <input onChange={onChange} className="last-name" type="text" id={"company" + idx} placeholder="Company" value={company} />
            <input onChange={onChange} className="title" type="text" id={"city" + idx} placeholder="City" value={city} />
            <input onChange={onChange} className="address" type="text" id={"from" + idx} placeholder="From" value={from} />
            <input onChange={onChange} className="phone-number" type="text" id={"to" + idx} placeholder="To" value={to} />
            <button onClick = {onDeleteExperience} className='education-button' id="experience-delete-button">Delete</button>
        </div>
    }
}
export default ExperienceItem