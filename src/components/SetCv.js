import { render } from '@testing-library/react';
import React, { Component } from "react";
import '.././App.css'
import EducationItem from './educationItem';
import ExperienceItem from './ExperienceItem';

class SetCv extends Component {

    constructor(props){
        super(props);

        
       this.renderEducation = this.renderEducation.bind(this)
       //console.log("educationArray: ")
       console.log(this.props.educationArray);
    }

    renderEducation(){
        
        return this.props.educationArray.map((el) =>{
            
            /*console.log("setcv el.uid: ")
            console.log(el);
            console.log(el.uid);
            console.log(el.universityName);
            console.log(el.city);
            console.log(el.degree)*/
            return <EducationItem onDeleteEducation = {this.props.onDeleteEducation} idx = {el.uid} clickFunc = {this.props.onAddEducation} onChangee = {this.props.onChangeEducation}  universityName = {el.universityName} city = {el.city} degree = {el.degree} subject = {el.subject} from = {el.from} to = {el.to}/>

        })

    }
    renderExperience(){
        const {onChangeExperience, onDeleteExperience, onAddExperience } = this.props;
        return this.props.experienceArray.map((el) =>{
            return <ExperienceItem idx = {el.uid} onChange = {onChangeExperience} onDeleteExperience = {onDeleteExperience} position = {el.position} company = {el.company} city = {el.city} from = {el.from} to = {el.to}></ExperienceItem>
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
                    <button onClick={this.props.onAddEducation} className='education-button' id="education-add-button">Add</button>
                </div>
            </div>

            <div className="experience-div">
                <div className="pers-info-descr">
                    Experience
                </div>
                <div id = "experience-form-array">
                    {this.renderExperience()}
                </div>

                <div>
                    <button onClick = {this.props.onAddExperience} className = "education-button" >Add</button>
                </div>
            </div>

        </div>
  }
}

export default SetCv;