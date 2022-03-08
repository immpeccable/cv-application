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

        this.addEducationInfo();



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

    onChangePersonalInfo(event) {

        try {
            console.log(event.target.id + " " +event.target.value);
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

        let unid = uniqid();
        this.setState({
            education: [
                this.prevStateEducation,
                {
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


        console.log(e.target.id + " "+e.target.value);
        console.log(document.getElementById(e.target.id).parentNode);
        console.log(this.prevStateEducation);
        let parid = document.getElementById(e.target.id).parentNode.id;
        console.log("parid: "+parid);

        let x = e.target.id;
        console.log(x);

        this.prevStateEducation = this.prevStateEducation.map(obj => {
            if (obj.uid === parid) {
              return {...this.prevStateEducation, [e.target.id]: e.target.value};
            }
          });
        

          this.setState({
            education: [
                this.prevStateEducation.map((el) => {
                    if(el.uid == parid){
                        return 
                    }
                })
            ]
        })
    }




    render() {
        return <SetCv onChangePersonal={this.onChangePersonalInfo} onChangeEducation={this.onChangeEducationInfo} persInfo={this.state.personalInfo} educationArray={this.prevStateEducation} experienceArray={this.prevStateExperience}></SetCv>
    }

}
export default GeneralInfo