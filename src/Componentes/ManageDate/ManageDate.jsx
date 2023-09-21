import react from 'react';
import useState from 'react';
const ManageDate = ()=>{

  const trocanome = () =>{
    setNome("Gustavo");
  }
  const [nome,SetNome] = useState("")
  return(
    <div> 
      <p>{nome}</p>
      <button onClick = {trocanome()}></button>
    </div>
  )
}

export default ManageDate;