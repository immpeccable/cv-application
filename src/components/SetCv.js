import { render } from '@testing-library/react';
import React, { Component } from "react";
import '.././App.css'
import EducationItem from './educationItem';

class SetCv extends Component {

    constructor(props){
        super(props);

        
       this.renderEducation = this.renderEducation.bind(this)
       console.log(this.props.educationArray);
    }

    renderEducation(){
        console.log(this.props.educationArray);
        
        return this.props.educationArray.map((el) =>{
            console.log("merhaba");
            console.log(el)
            return <EducationItem uid = {el.uid} onChangee = {this.props.onChangeEducation} key = {el.uid} universityName = {el.universityName} city = {el.city} degree = {el.degree} subject = {el.subject} from = {el.from} to = {el.to}/>

        })

    }

  render() {
    const {persInfo, onChangePersonal} = this.props;
    return <div className='input-main'>
            <div className="personal-info">
                <div className="pers-info-descr">
                    Personal Information
                </div>
                <input onChange={onChangePersonal} className="first-name" type="text" id="firstName" placeholder="First Name" value={persInfo.firstName} />
                <input onChange={onChangePersonal} className="last-name" type="text" id="lastName" placeholder="Last Name" value={persInfo.lastName} />
                <input onChange={onChangePersonal} className="title" type="text" id="title" placeholder="Title" value={persInfo.title} />
                <input onChange={onChangePersonal} className="address" type="text" id="address" placeholder="Address" value={persInfo.address} />
                <input onChange={onChangePersonal} className="phone-number" type="text" id="phoneNumber" placeholder="Phone Number" value={persInfo.phoneNumer} />
                <input onChange={onChangePersonal} className="email" type="email" id="email" placeholder="E-mail" value={persInfo.email} />
                <input onChange={onChangePersonal} className="description" type="text" id="description" placeholder="Description" value={persInfo.description} />

            </div>

            <div className="education-div">
                <div className="pers-info-descr">
                    Education
                </div>
                <div id="education-form-array">
                    
                    {this.renderEducation()}

                </div>
                <div>
                    <button className='education-button' id="education-add-button">Add</button>
                </div>
            </div>

            <div className="experience-div">
                <div className="pers-info-descr">
                    Experience
                </div>
                {/*<input onChange={this.handleFirstName} className="first-name" type="text" id="position" placeholder="Position" value={this.state.position} />
                <input onChange={this.handleFirstName} className="last-name" type="text" id="company" placeholder="Company" value={this.state.company} />
                <input onChange={this.handleFirstName} className="title" type="text" id="cityExp" placeholder="City" value={this.state.cityExp} />
                <input onChange={this.handleFirstName} className="address" type="text" id="fromExp" placeholder="From" value={this.state.fromExp} />
                <input onChange={this.handleFirstName} className="phone-number" type="text" id="toExp" placeholder="To" value={this.state.toExp} />
                <button className='education-button' id="experience-delete-button">Delete</button>
  <button className='education-button' id="experience-add-button">Add</button>*/}
            </div>

        </div>
  }
}

export default SetCv;