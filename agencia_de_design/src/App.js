import React from 'react';

import Header from './componentes/Topo';
import Banner from './componentes/Banner';
import ExpDeTrabalho from './componentes/ExpDeTrabalho';
import Footer from './componentes/Footer';

function App(){
  return(
    <div className='App'>
      <Header/>
      <Banner/>
      <ExpDeTrabalho/>
      <Footer/>
    </div>
  )
}

export default App;