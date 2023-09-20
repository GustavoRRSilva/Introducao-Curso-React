import React from 'react'
import FirstComponent from "../FirstComponent/index.jsx";
function TemplateExpressions() {
  const name = "Gustavo";
  const data = {
    name:"Gustavo",
    job:"Front-End DEV"
  }
  return (
    <div>
      <h1>Olá {name}</h1>
      <h1>Seu trabalho é:{data.job}</h1>
      <FirstComponent/>
    </div>
  )
}

export default TemplateExpressions;