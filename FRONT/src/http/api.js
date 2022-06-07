import { urls } from './uris'
const withForm = (datos)=>{
  return ({
    method: datos.method,
    body: datos.form
  })
}

const withMessage = (datos) =>{
  const datoaenvi = {
    "body":"prueba de otro comentario 2"
  }
  const headers = new Headers({ 'Content-Type': 'application/json' });
  const elbody = {
    body: datos.textarea
  }
  console.log('withMessage: ',datoaenvi,elbody,'JSON.stringify(elbody) :',JSON.stringify(elbody),'JSON.stringify(datoaenvi) ',JSON.stringify(datoaenvi))
  const envio = {
    headers,
    method: datos.method,
    body: JSON.stringify(elbody)
  }
  //console.log('...,withMessage: ',envio)
  return envio;
}
async function envioDatos(datasToSend,like){
  let datosAenviar = {};
  let url;

  like === 'form' ? datosAenviar = withForm(datasToSend) : datosAenviar = withMessage(datasToSend) ;

  if(datasToSend.id != undefined){
    console.log('id: ',datasToSend.id);
    url = `${urls.localhost}${datasToSend.endpoint}${datasToSend.id}`;
    console.log('`${urls.localhost}${datasToSend.endpoint}${datasToSend.id}`',url)
  }else{
    console.log('sin id')
    url = `${urls.localhost}${datasToSend.endpoint}`;
    console.log('${urls.localhost}${datasToSend.endpoint}',url)
  }

  //console.log('datosAenviar ',datosAenviar)
  /*const envio = {
    "body":"prueba de otro comentario 3"
}*/
  //const headers = new Headers({ 'Content-Type': 'application/json' });
  //const request = await fetch(`${urls.localhost}${datasToSend.endpoint}`, { headers , method: datasToSend.method , body: JSON.stringify(envio) });
  const request = await fetch(url, datosAenviar);
  const respuesta = await request;
  let rp = respuesta.statusText;
  return rp;
}

export { envioDatos }
