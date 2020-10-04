import React, { Component } from 'react';
import TableRow from './TableRow';
import FirebaseContext from '../utils/FirebaseContext';
import FirebaseService from '../service/FirebaseService';

const ListPage = () => (
    <FirebaseContext.Consumer>
        { context => <List firebase={context}/>}
    </FirebaseContext.Consumer>
)

class List extends Component {

    constructor(props){
        super(props)
        this.state = {disciplinas: []}
        this.apagarElementoPorId = this.apagarElementoPorId.bind(this)
        this._isMounted = false
    }

    componentDidMount(){
        this._isMounted = true
        FirebaseService.list(
            this.props.firebase.getFirestore(),
            (disciplinas) =>  {
                if(disciplinas){
                    if(this._isMounted){
                        this.setState({disciplinas:disciplinas})
                    }
                }
            }
        )
    }

    componentWillUnmount(){
        this._isMounted = false
    }

  montarTabela(){
       if(!this.state.disciplinas) return
        return this.state.disciplinas.map(
            (disc ,i) =>{
                return <TableRow disciplinas={disc}
                key={i}
                apagarElementoPorId={this.apagarElementoPorId}
                firebase={this.props.firebase}/>
            }
        )
    }

    apagarElementoPorId(id){
        let discTemp = this.state.disciplinas
        for(let i=0;i<discTemp.length;i++){
            if(discTemp[i]._id === id){
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

export default ListPage