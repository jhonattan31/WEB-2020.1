import React, {Component} from 'react';
import './App.css';
import CalcSoma from './components/CalcSoma.jsx';
import CalcMulti from './components/CalcMulti.jsx';
import CalcMaior from './components/CalcMaior.jsx';
import Navigate from './components/Navigate.jsx';

export default class App extends Component{
 
  render(){
    return(
      <div>
        <h1 className='container'>
          Redux Calc
        </h1>
          <div className='line'>
         <Navigate/>
          </div>
            <div className='line'>
            <CalcSoma/> 
            <CalcMulti/>
            <CalcMaior/>
            </div>
      </div>
    )
  }
}