import React from 'react';

function GenericImageOnClick(props){

  return (
    <div id={props.idDivImg}>
      <img src={props.srcImg} onClick={()=>{props.functionImg()}}/>
    </div>
  );

}

export default GenericImageOnClick;
