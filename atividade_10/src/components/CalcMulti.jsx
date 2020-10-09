import React, {Component} from 'react';
import Numero from './Numero';
import { connect  } from 'react-redux'

class CalcMulti extends Component{
    render(){
        return(
        <Numero nome='Multiplicacao' red>
            
          <strong>  {this.props.numeroUm * this.props.numeroDois}  </strong>
            
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

export default connect(mapStateToProps)(CalcMulti)