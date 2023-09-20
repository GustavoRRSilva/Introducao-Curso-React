import React from 'react'

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
    </div>
  )
}

export default TemplateExpressions;