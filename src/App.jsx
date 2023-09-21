//Libs react
import { useState } from 'react';
import viteLogo from '/vite.svg';
//Componentes
import ManageDate from './Componentes/ManageDate/ManageDate.jsx'
//Css
//Imagens 
import ImagemReact from './assets/react.svg'
import './App.css';
function App() {
  return (
    <div className  = "app">
      <h1>Começo da seção 3</h1>
      <img src="./public/vite.svg" alt="Icon vite"/>
      <img src={ImagemReact} alt="Imagem React"/>
      <ManageDate/>
    </div>
  );
}

export default App;
