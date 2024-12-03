import React, { useState } from 'react';

const Formulario = ({ fields, onSubmit }) => {
  const [formData, setFormData] = useState(
    fields.reduce((acc, field) => ({ ...acc, [field.name]: '' }), {})
  );

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      {fields.map((field) => (
        <div key={field.name} className="form-group">
          <label>{field.label}</label>
          <input
            type={field.type || 'text'}
            name={field.name}
            value={formData[field.name]}
            onChange={handleChange}
            required={field.required}
            className="form-control"
          />
        </div>
      ))}
      <button type="submit" className="btn btn-success">Enviar</button>
    </form>
  );
};

export default Formulario;
