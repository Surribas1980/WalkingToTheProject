import React from 'react';

function UnaSeccion({ children }) {
  return (
    <div className="fondoVerde vh50-Sin-Grid divFlex alignCenter justifyContentCenter">
      
      {children}
    </div>
  );
}

export default UnaSeccion;
