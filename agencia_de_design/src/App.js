import React,{useState} from 'react';

import Header from './componentes/Topo';
import Banner from './componentes/Banner';
import ExpDeTrabalho from './componentes/ExpDeTrabalho';
import Footer from './componentes/Footer';

import moon from './assets/moon.png';
import sun from './assets/sun.png'

import './App.css';

function App(){

  const [fundo, SetFundo] = useState("fundo-branco");
  const [corDiferente, SetCorDiferente] = useState("corFundoBranco");
  const [iconeBotao, SetIconeBotao] = useState(moon);

    const mudarFundo = () =>{
        if (fundo === "fundo-branco") {
            SetFundo("fundo-preto");
            SetCorDiferente("corFundoPreto");
            SetIconeBotao(sun);
        } else {
            SetFundo("fundo-branco");
            SetCorDiferente("corFundoBranco");
            SetIconeBotao(moon);
        }          
    }

  return(
    <div className='App'>
      <Header botao={mudarFundo} fundo={fundo} imgButton={iconeBotao}/>
      <Banner fundo={fundo}/>
      <ExpDeTrabalho fundo={fundo} corDiferente={corDiferente}/>
      <Footer fundo={fundo}/>
    </div>
  )
}

export default App;