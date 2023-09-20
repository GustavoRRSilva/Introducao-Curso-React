import react from 'react';

const Events = ()=>{

  const handleMyEvent= (e)=> {
    alert(e)
    alert("evento acionado")
  }
  return(
    <div>
        <div>
          <button onClick = {handleMyEvent}>Clique aqui</button>
        </div>
    </div>
  )
}

export default Events;