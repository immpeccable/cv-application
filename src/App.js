
import { render } from '@testing-library/react';
import React, { Component } from "react";
import './App.css'
import Header from './components/Header';
import Footer from './components/Footer';
import GeneralInfo from './components/GeneralInfo';
import Education from './components/Education';
import WorkingExp from './components/WorkingExp';

class App extends Component {

  render() {
     
    return <div className = "app-root">
      <Header></Header>
      <div className = "main-content">
          <div className = "input-field">
            <GeneralInfo></GeneralInfo>
          </div>
          <div className = "cv-display">

          </div>
      </div>
      <Footer></Footer>
    </div>
    
  }
}

export default App;
