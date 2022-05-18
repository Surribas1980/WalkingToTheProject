import React , {useRef} from 'react';

function SeveralInputButtonRef({funcion}){
const elText = useRef(null);
const elCheck = useRef(null);

const salida = <>
<input ref={elCheck} type="checkbox" />
<input ref={elText} name="puntuacion" type="text"/>
<button name="solution" onClick={(e)=>{funcion(elCheck.current.checked,elText.current.value)}}>Enviar eleccion</button>
</>;
  return (<>{salida}</>)
}

export default SeveralInputButtonRef;
