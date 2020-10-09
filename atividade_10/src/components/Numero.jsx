import React, {Component} from 'react';
import './Numero.css';

export default class Numero extends Component{

    getColor(){
        if (this.props.blue===true) return 'bg-primary'
        if (this.props.green===true) return 'bg-success'
        if (this.props.red===true) return 'bg-danger'
        if (this.props.dark===true) return 'bg-dark'
        return 'bg-secundary'
    }

    render(){
        return(
            <div className={`card text-white bg-primary ${this.getColor()}`}>
                <div ClassName='card-header'>
                    {this.props.nome}
                </div>
                <div ClassName='card-body'>
                    {this.props.children}
                </div>
            </div>
        )
    }

}