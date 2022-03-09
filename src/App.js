
import React, { Component } from "react";
import './App.css'
import Header from './components/Header';
import Footer from './components/Footer';
import GeneralInfo from './components/GeneralInfo';

class App extends Component {

  render() {
     
    return <div className = "app-root">
      <Header></Header>
      <GeneralInfo></GeneralInfo>
      <Footer></Footer>
    </div>
    
  }
}

export default App;
