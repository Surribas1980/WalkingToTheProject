import React,{useState} from 'react';

function GenericFormTextArea(props){
  const [textarea, setTextarea] = useState(
     "Escribe el mensaje que deseas mandar"
   );

   const handleChange = (event) => {
     setTextarea(event.target.value)
   }

   const handleSubmit = (event) => {
       event.preventDefault();

     }

  return(
    <div id={props.idDivForm}>
      <form onSubmit={handleSubmit}>
        <textarea rows="20" onChange={handleChange}/>
        <input type="submit" value="Enviar" />
      </form>
    </div>
  )
}

export default GenericFormTextArea;
