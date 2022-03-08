import { render } from '@testing-library/react';
import React, { Component } from "react";
import '.././App.css'

class Header extends Component {

  render() {
    return <div className = "header">
        CV CREATOR
    </div>;
  }
}

export default Header;
