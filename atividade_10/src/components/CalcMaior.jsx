import React, { Component } from 'react';
import Numero from './Numero';
import { connect } from 'react-redux';

class CalcMaior extends Component {

    maiorValor() {

        if (this.props.numeroUm === this.props.numeroDois) {
            return <h1>Os valores inseridos são iguais</h1>
        }
        else if (this.props.numeroUm > this.props.numeroDois) {
            return this.props.numeroUm
        }
        else return this.props.numeroDois
    }


    render() {
        return (
            <Numero nome='Maior' dark>
               <strong> {this.maiorValor()}</strong>
            </Numero>
        )
    }
}

function mapStateToProps(state) {
    return {

        numeroUm: state.number.numeroUm,
        numeroDois: state.number.numeroDois

    }
}

export default connect(mapStateToProps)(CalcMaior)