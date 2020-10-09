import React, {Component} from 'react';
import Numero from './Numero.jsx';
import { connect  } from 'react-redux'

class CalcSoma extends Component{
    render(){
        return(
        <Numero nome='Soma' green>
            
           <strong> {this.props.numeroUm + this.props.numeroDois}</strong>
            
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
  
  export default connect(mapStateToProps)(CalcSoma)