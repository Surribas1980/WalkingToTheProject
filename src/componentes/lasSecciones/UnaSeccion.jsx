import React from 'react';

function UnaSeccion({ children }) {
  return (
    <div className="vh50 fondoVerde">
      Seccion UNA
      <div>{children}</div>
    </div>
  );
}

export default UnaSeccion;
