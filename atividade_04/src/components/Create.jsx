import React, { Component } from 'react';
import axios from 'axios';

export default class Create extends Component {
    constructor(props){
        super(props)
        this.state = {nome: '', curso: '', capacidade: ''}
        this.setnome = this.setnome.bind(this)
        this.setcurso = this.setcurso.bind(this)
        this.setcapacidade = this.setcapacidade.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    setnome(e){
        this.setState({nome: e.target.value})
    }

    setcurso(e){
        this.setState({curso: e.target.value})
    }

    setcapacidade(e){
        this.setState({capacidade: e.target.value})
    }

    onSubmit(e){
        e.preventDefault() //impede que o browser faça o reload, perdendo assim a informação
        // {console.log('Nome: ' + this.state.nome)
        // console.log('Curso: ' + this.state.curso)
        // console.log('Capacidade: ' + this.state.capacidade)}
        const novoDisciplina = {nome:this.state.nome, curso:this.state.curso, capacidade:this.state.capacidade}

        axios.post('http://localhost:3001/disciplinas', novoDisciplina)
        .then(
            (res)=>{
                console.log('Disciplina cadastrada');
            }
        )
        .catch(
            (error)=>{
                console.log(error   );
            }
        )

        this.setState({nome: '', curso: '', capacidade: ''})
    }

    render() {
        return (
            <div style={{ marginTop: 10 }}>
                <h3> Criar Disciplina </h3>
               
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Nome: </label>
                        <input type="text" className="form-control" value={this.state.nome} onChange={this.setnome} />
                    </div>
                    <div className="form-group">
                        <label>Curso: </label>
                        <input type="text" className="form-control" value={this.state.curso} onChange={this.setcurso}/>
                    </div>
                    <div className="form-group">
                        <label>Capacidade: </label>
                        <input type="text" className="form-control" value={this.state.capacidade} onChange={this.setcapacidade}/>
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Inserir" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}