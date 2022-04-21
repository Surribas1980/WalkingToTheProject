import React from 'react';

function UnaSeccion({ children }) {
  return (
    <div className="divFlex alignCenter justifyContentSpaceAround posicionRelativa padding10">

      {children}
    </div>
  );
}

export default UnaSeccion;
