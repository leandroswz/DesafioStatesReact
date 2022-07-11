import React,{ Component} from 'react';
import Goiaba from './img/goiaba.jpg'
import './App.css';

export default class App extends React.Component{
    
  state = {
      nome: "Leandro Costa",
      idade: 28,
      comida: "Lasanha",
      musicas: ["Paradise", "Viva la vida", "Oceano"]
  }
  render(){
      return(
          <div className='App'>
             <h1>Meu nome é {this.state.nome}</h1>
             <h2>Tenho {this.state.idade} anos</h2>
             <h3>Minha comida favorita é : {this.state.comida}!</h3>
             <ul>
              <li>{this.state.musicas[0]}</li>
              <li>{this.state.musicas[1]}</li>
              <li>{this.state.musicas[2]}</li>
             </ul>

              <img className='fruta' src={Goiaba} alt="tomate"/>
          </div>
      )
  }
}