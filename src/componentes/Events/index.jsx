import react from 'react';

const Events = ()=>{

  const handleMyEvent= (e)=> {
    alert(e)
    alert("evento acionado")
  }
  const handleSomething = (x)=>{
    if(x){
      return <h1>renderizando isso</h1>;
    }
    else{
      return <h1> não renderizado </h1>;
    }
  }
  return(
    <div>
        <div>
          <button onClick = {handleMyEvent}>Clique aqui</button>
        </div>
        <div>
          <button onClick = {() => {
            alert("fui clicado tbm")
          }}>Clique aqui também</button>
        </div>
        {handleSomething(false)}
    </div>
  )
}

export default Events;