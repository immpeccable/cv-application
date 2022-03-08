import React, { Component } from "react";
import '.././App.css'
import uniqid from "uniqid";
import SetCv from './SetCv';
import ReactDOM from 'react-dom';


class GeneralInfo extends Component {

    constructor() {

        super()
        this.prevStateEducation = [];
        this.prevStateExperience = [];


        this.onChangePersonalInfo = this.onChangePersonalInfo.bind(this);
        this.addEducationInfo = this.addEducationInfo.bind(this);
        this.onChangeEducationInfo = this.onChangeEducationInfo.bind(this);
        this.onDeleteEducationInfo = this.onDeleteEducationInfo.bind(this);
        this.onAddExperienceInfo = this.onAddExperienceInfo.bind(this);
        this.onChangeExperienceInfo = this.onChangeExperienceInfo.bind(this);
        this.onDeleteExperienceInfo = this.onDeleteExperienceInfo.bind(this);

        this.addEducationInfo();
        this.onAddExperienceInfo();



        this.state = {
            personalInfo: {
                firstName: "",
                lastName: "",
                title: "",
                address: "",
                phoneNumber: "",
                email: "",
                description: "",
            },
            experience: [
                /*{
                    //id: uuidv4(),
                    position: "",
                    company: "",
                    city: "",
                    from: "",
                    to: "",
                },*/
            ],
            education: [


            ]

        }
    }

    onChangeExperienceInfo(e) {
        let parid = document.getElementById(e.target.id).parentNode.id;
        //console.log("parid: " + parid);

        this.prevStateExperience = this.prevStateExperience.map((obj) => {

            if (obj.uid === parid) {
                let pure = e.target.id.replace(parid, "");
                console.log("pure: " + pure);
                return { ...obj, [pure]: e.target.value };
            } else {
                return { ...obj }
            }
        });


        this.setState({
            experience: [
                this.state.experience.map((el) => {
                    if (el.uid === parid) {
                        let pure = e.target.id.replace(parid, "");
                        console.log("pure: " + pure);
                        return { ...el, [pure]: e.target.value }
                    } else {
                        return { ...el }
                    }
                })
            ]

        })
    }

    onAddExperienceInfo() {
        let unid = uniqid();
        this.setState({
            experience: [
                ...this.prevStateExperience, {
                    uid: unid,
                    position: "",
                    company: "",
                    city: "",
                    from: "",
                    to: "",
                }
            ]
        })

        this.prevStateExperience.push({
            uid: unid,
            position: "",
            company: "",
            city: "",
            from: "",
            to: "",
        })
    }

    onDeleteExperienceInfo(e) {
        console.log("on delete experience")
        let parid = document.getElementById(e.target.id).parentNode.id;

        this.prevStateExperience = this.prevStateExperience.filter((el) => {
            return el.uid !== parid
        })
        //console.log("ondeleteExperience")
        this.setState({
            experience: [
                this.state.experience.filter((el) => {
                    return el.uid !== parid;
                })
            ]
        })
    }

    onChangePersonalInfo(event) {

        try {
            console.log(event.target.id + " " + event.target.value);
            this.setState({
                personalInfo: {
                    [event.target.id]: event.target.value
                }
            })
        } catch (e) {
            console.log(e);
        }

    }

    addEducationInfo() {

        //console.log("add education info");
        let unid = uniqid();
        this.setState({
            education: [
                ...this.prevStateEducation, {
                    uid: unid,
                    universityName: '',
                    city: '',
                    degree: '',
                    subject: '',
                    from: '',
                    to: '',
                }
            ]
        })

        this.prevStateEducation.push({
            uid: unid,
            universityName: '',
            city: '',
            degree: '',
            subject: '',
            from: '',
            to: '',
        })
    }


    onChangeEducationInfo(e) {


        /*console.log(e.target.id + " " + e.target.value);
        console.log(document.getElementById(e.target.id).parentNode);
        console.log(this.prevStateEducation);*/
        console.log("change called");
        let parid = document.getElementById(e.target.id).parentNode.id;
        //console.log("parid: " + parid);

        this.prevStateEducation = this.prevStateEducation.map((obj) => {

            if (obj.uid === parid) {
                let pure = e.target.id.replace(parid, "");
                console.log("pure: " + pure);
                return { ...obj, [pure]: e.target.value };
            } else {
                return { ...obj }
            }
        });


        this.setState({
            education: [
                this.state.education.map((el) => {
                    if (el.uid === parid) {
                        let pure = e.target.id.replace(parid, "");
                        console.log("pure: " + pure);
                        return { ...el, [pure]: e.target.value }
                    } else {
                        return { ...el }
                    }
                })
            ]

        })
    }

    onDeleteEducationInfo(e) {

        console.log("why tf are u calling")
        let parid = document.getElementById(e.target.id).parentNode.id;

        this.prevStateEducation = this.prevStateEducation.filter((el) => {
            return el.uid !== parid
        })
        console.log("ondeleteducaiton")
        this.setState({
            education: [
                this.state.education.filter((el) => {
                    return el.uid !== parid;
                })
            ]
        })


        console.log(e.target.id);
        console.log(document.getElementById(e.target.id).parentNode)

    }




    render() {
        return <SetCv onChangeExperience = {this.onChangeExperienceInfo} onDeleteExperience = {this.onDeleteExperienceInfo} onAddExperience = {this.onAddExperienceInfo} onDeleteEducation={this.onDeleteEducationInfo} onAddEducation={this.addEducationInfo} onChangePersonal={this.onChangePersonalInfo} onChangeEducation={this.onChangeEducationInfo} persInfo={this.state.personalInfo} educationArray={this.prevStateEducation} experienceArray={this.prevStateExperience}></SetCv>
    }

}
export default GeneralInfo