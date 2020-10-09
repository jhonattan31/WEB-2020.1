import React, { Component } from "react";
import './Numero.css';

import Numero from "./Numero.jsx";

import { connect } from 'react-redux'

class Navigate extends Component {
  render() {
    return (
        <div className="line">
            <Numero nome="Número 1" blue>
                {this.props.numeroUm}
            </Numero>

            <Numero nome="Número 2" blue>
                {this.props.numeroDois}
            </Numero>
        </div>
      
    );
  }
}

function mapStateToProps(state) {
  return {

    numeroUm: state.number.numeroUm,
    numeroDois: state.number.numeroDois
  
    }
}

export default connect(mapStateToProps)(Navigate)