import React,{ Component} from 'react';
import Goiaba from './img/goiaba.jpg'
import './App.css';

class App extends Component{

  state = {
    infor: [
      {
        nome: "Leandro",
        idade: 28,
      },
      {
        comida: "Lasanha",
      },
      {
        musica1: "A maior saudade - Henrique e Juliano",
        musica2: "Pra não dizer que eu não falei do odio - Projota",
        musica3: "Oceano - Djavan"
      }

    ]
  }

  render(){
    return(
      <section className='App'>
        <h1>Meu nome é : {this.state.infor[0].nome}</h1>
        <h2>Tenho : {this.state.infor[0].idade} anos</h2>
        <h3>Comida Preferida : {this.state.infor[1].comida}</h3>
        <ul>
          <p>Músicas preferidas:</p>
          <li>{this.state.infor[2].musica1}</li>
          <li>{this.state.infor[2].musica2}</li>
          <li>{this.state.infor[2].musica3}</li>
        </ul>
        <p>Fruta Preferida :  Goiaba</p>
        <img className='fruta' src={Goiaba}/>
      </section>
    )
  }
}
export default App;
