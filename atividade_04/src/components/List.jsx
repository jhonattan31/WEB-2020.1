import React, { Component } from 'react';
import axios from 'axios';
import TableRow from './TableRow';

export default class List extends Component {

    constructor(props){
        super(props)
        this.state = {disciplinas: []}
        this.apagarElementoPorId = this.apagarElementoPorId.bind(this)
    }

    componentDidMount(){
        axios.get('http://localhost:3001/disciplinas')
        .then(
            (res) =>{
                this.setState({disciplinas: res.data})
            }
        )
        .catch(
            (error)=>{
                console.log(error)
            }
        )

    }

    montarTabela(){
        if(!this.state.disciplinas) return
        return this.state.disciplinas.map(
            (disciplina ,i) =>{
                return <TableRow disciplinas={disciplina} key={i} apagarElementoPorId={this.apagarElementoPorId}/>
            }
        )
    }

    apagarElementoPorId(id){
        let discTemp = this.state.disciplinas
        for(let i=0;i<discTemp.length;i++){
            if(discTemp[i].id === id){
                discTemp.splice(i, 1)
            }
        }
        this.setState({disciplinas:discTemp})
    }

    render() {
        return (
            <div style={{ marginTop: 10 }}>
                <table className="table table-striped" style={{ marginTop: 20 }}>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nome</th>
                            <th>Curso</th>
                            <th>Capacidade</th>
                            <th ColSpan="2" style={{textAlign:"center"}}>Ação</th>
                        </tr>
                    </thead>
                    <tbody>
                       {this.montarTabela()}
                    </tbody>
                </table>

            </div>
        )
    }
}