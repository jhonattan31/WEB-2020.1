import React, {Component} from 'react';

export default class Questao4 extends Component{
    render(){
        return (
            <div>
                Oi, eu sou o {this.props.nome}
                 faco o curso de {this.props.curso}
                 moro na cidade de {this.props.cidade}
            </div>
        )
    }
}