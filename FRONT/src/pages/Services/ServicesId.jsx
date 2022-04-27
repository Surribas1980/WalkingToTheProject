import React,{useState} from 'react';
import { useParams } from "react-router-dom";
function ServicesId(){
  let params = useParams();
  console.log(params.id)
  return (<div><h1>Estoy en servicios id: {params.id}</h1></div>)
}

export default ServicesId;
