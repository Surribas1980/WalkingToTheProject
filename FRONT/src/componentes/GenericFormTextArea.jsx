import React,{useState} from 'react';

function GenericFormTextArea(props){
  const [textarea, setTextarea] = useState(
     "Escribe el mensaje que deseas mandar"
   );
   console.log('props en GenericFormTextArea : ',props);
   const handleChange = (event) => {
     setTextarea(event.target.value)
   }

   const handleSubmit = async (event) => {
       event.preventDefault();

       const datos = {
         endpoint: props.endpoint,
         method: props.method,
         textarea,
         id:props.id
       }
       console.log('datos en el handleSubmit ',datos)
       const valor = await props.settingsSendFunction(datos,'message');
       console.log('valor  en handleSubmit ', valor)
     }

  return(
    <div id={props.idDivForm}>
      <form onSubmit={handleSubmit}>
        <textarea rows="5" onChange={handleChange}/>
        <input type="submit" value="Enviar" />
      </form>
    </div>
  )
}

export default GenericFormTextArea;
