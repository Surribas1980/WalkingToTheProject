import React,{useState} from "react";

function Component_ServicesId_ConversationsId(props){

let reverse = "colocacion-reverse";
let coloco = "colocacion";
let styleColocacion = `${coloco}`;
let left = "left";
let right = "right";
let styleName = `${left}`;
let losObjets = Object.values(props.ConversationsId);


let objArray = props.ConversationsId.map(
  (item,index)=>{

  return Object.values(item);}
)
let otro = objArray?.map((item,index)=>{
  let elemento;
  if(index > 0){
    if(item[3] !== item[index-1]){
      elemento = item[3]
    }else{
      elemento = 'no es el usuario'
    }
  }
  return elemento
})
console.log('objArray',objArray,'las props: Component_ServicesId_ConversationsId: ', props.ConversationsId[0],'otro: ',otro)
/*let salida = props.ConversationsId.map((item,index)=>{

    if(index > 0){
      if(item[index].usuario != item[index-1].usuario){
        styleName = `${right}`;
        styleColocacion = `${coloco}` + `${reverse}`;
      }else{
        styleColocacion = `${coloco}`;
        styleName = `${left}`;
      }
    }

      return (
        <div className="conversations-id" key={index}>
          <div className="conversation-id-wrapper" name={styleName}>
              <div className={styleColocacion}>
                  <div>
                      imagen
                  </div>
                  <div>
                      {item.respuesta}
                  </div>
              </div>

          </div>
        </div>
      )

    })*/

    return ( <>hola</> )
}


export default Component_ServicesId_ConversationsId;
