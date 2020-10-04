import React, {Component} from 'react'

import FirebaseContext from '../utils/FirebaseContext';
import FirebaseService from '../service/FirebaseService';
const EditPage = (props) => (
    <FirebaseContext.Consumer>
        { context => <Edit firebase={context} id={props.match.params.id} />}
    </FirebaseContext.Consumer>
)

class Edit extends Component{
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
       FirebaseService.retrieve(
           this.props.firebase.getFirestore(),
           (disciplina) => {
                if(disciplina){
                    this.setState({
                        nome:disciplina.nome,
                        curso:disciplina.curso,
                        capacidade:disciplina.capacidade 
                    })
                }
            },
            this.props.id
       )


    }

    onSubmit(e){
        e.preventDefault()
        const disciplina = {
            nome:this.state.nome,
            curso:this.state.curso,
            capacidade:this.state.capacidade
        }
        FirebaseService.edit(
            this.props.firebase.getFirestore(),
            (mensagem) => {
                if(mensagem==='ok') console.log('Disciplina atualizada com sucesso')
            },
            disciplina,
            this.props.id
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

export default EditPage