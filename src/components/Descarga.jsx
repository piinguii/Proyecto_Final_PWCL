import React from 'react';

const Descarga = ({ onDownload }) => (
  <button onClick={onDownload} className="btn btn-primary">
    Descargar Albarán
  </button>
);

export default Descarga;
