import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import FirstComponent from './componentes/FirstComponent/index.jsx';
import TemplateExpressions from './componentes/TemplateExpressions/index.jsx';
import './App.css';
function App() {
  return (
    <div>
      <p>Hello world </p>
      <p>Troca pelo vscode online</p>
      <FirstComponent />
      <TemplateExpressions />
    </div>
  );
}

export default App;
