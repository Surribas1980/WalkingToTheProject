const apiUrl = 'http://localhost:4000';
/*
const requestMethods = { post: 'POST', get: 'GET', delete: 'DELETE' , put: 'PUT'};
const endpoints = {
  login: '/users/login/',
  userInsert : '/users/insert/' ,
  services: '/services/',
  deleteServices: '/services/delete/',
  insertComentario:'/users/insert/comentario/',
  readComentarios: '/users/read/allcomments/'
};
*/

/*--- Datos FormData ---*/

export default function envioForm(){
  return SendDatas();
}

/*--- Datos sin FormData ---*/

export default function envioDatas(){
  return SendDatas();
}

/*--- El fetch ---*/

function SendDatas(endpoint,metodo,datos){

}
