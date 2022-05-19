import React from "react";

function Component_ServicesId_ConversationsId(props){

let reverse = "colocacion-reverse";
let coloco = "colocacion";
let styleColocacion = `${coloco}`;
let left = "left";
let right = "right";
let styleName = `${left}`;

let $conversation$color$id = ""


let objArray = props.ConversationsId?.map(
      (item,index)=>{
        if(index >= 1){

         
          if(props.ConversationsId[index-1].usuario != item.usuario){
            styleName = `${right}`;
            styleColocacion = `${coloco} ` + `${reverse}`;
            
          }else{
            styleColocacion = `${coloco}`;
            styleName = `${left}`;
          }
        }
        return (
          <div className="conversations-id" name={styleName} key={index}>
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
        );//return
    }//(item,index)=>{
)//props.ConversationsId?.map(


    return ( <>{objArray}
    </> )
}


export default Component_ServicesId_ConversationsId;
