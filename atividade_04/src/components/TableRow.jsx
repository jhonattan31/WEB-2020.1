import React, { Component } from "react";
import { Link } from 'react-router-dom';
import Axios from "axios";

export default class TableRow extends Component {

    constructor(props) {
        super(props)
        this.apagar = this.apagar.bind(this)
        
    }

    apagar(){
        Axios.delete('http://localhost:3001/disciplinas/'+this.props.disciplinas.id)
        .then(
            (res)=>{
                console.log('Registro apagado')
                this.props.apagarElementoPorId(this.props.disciplinas.id)
            }
        )
        .catch(
            (error)=>{
                console.log(error)
            }
        )
    }

    render() {
        return (
            <tr>
                <td>
                    {this.props.disciplinas.id}
                </td>
                <td>
                    {this.props.disciplinas.nome}
                </td>
                <td>
                    {this.props.disciplinas.curso}
                </td>
                <td>
                    {this.props.disciplinas.capacidade}
                </td>
                <td style={{ textAlign: "center" }}>
                    <Link to={"/edit/" + this.props.disciplinas.id} className="btn btn-primary">Editar</Link>
                </td>
                <td style={{ textAlign: "center" }}>
                    <button onClick={this.apagar} className="btn btn-danger">Apagar</button>
                </td>
            </tr>
        )
    }
}