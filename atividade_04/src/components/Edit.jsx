import React, {Component} from 'react'
import Axios from 'axios';

export default class Edit extends Component{
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
    
    componentDidMount(){
        Axios.get('http://localhost:3001/disciplinas/'+this.props.match.params.id)
        .then(
            (res) =>{
                this.setState(
                    {
                        nome:res.data.nome,
                        curso:res.data.curso,
                        capacidade:res.data.capacidade
                    }
                )
            }
        )
        .catch(
            (error)=>{
                console.log(error)
            }
        )
    }

    onSubmit(e){
        e.preventDefault()
        const disciplinaAtt =   {
            nome:this.state.nome,
            curso:this.state.curso,
            capacidade:this.state.capacidade}

            Axios.put('http://localhost:3001/disciplinas/'+this.props.match.params.id,disciplinaAtt)
            .then(
                (res)=>{
                    this.props.history.push('/list');
                }
            )
            .catch(
                (error) => console.log(error)
            )
    }

   
    render() {
        return (
            <div style={{ marginTop: 10 }}>
                <h3> Editar Disciplina </h3>
               
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
                        <input type="submit" value="Salvar Edições" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}