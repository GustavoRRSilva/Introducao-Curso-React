//Libs react
import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
//Componentes
import FirstComponent from './componentes/FirstComponent/index.jsx';
import TemplateExpressions from './componentes/TemplateExpressions/index.jsx';
import Events from './componentes/Events/index.jsx';
//Css
import './App.css';
function App() {
  return (
    <div className  = "app">
      <p>Hello world </p>
      <p>Troca pelo vscode online</p>
      <FirstComponent />
      <TemplateExpressions />
      <Events />
    </div>
  );
}

export default App;
