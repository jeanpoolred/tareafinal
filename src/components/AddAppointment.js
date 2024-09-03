// src/components/AddAppointment.js
import React, { useState, useEffect } from 'react';

const AddAppointment = ({ onAdd, initialData }) => {
  const [paciente, setPaciente] = useState('');
  const [fecha, setFecha] = useState('');
  const [doctor, setDoctor] = useState('');

  useEffect(() => {
    if (initialData) {
      setPaciente(initialData.paciente);
      setFecha(initialData.fecha);
      setDoctor(initialData.doctor);
    }
  }, [initialData]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!paciente || !fecha || !doctor) {
      alert('Por favor completa todos los campos');
      return;
    }

    onAdd({ paciente, fecha, doctor, index: initialData?.index });

    // Limpiar el formulario después de agregar o editar
    setPaciente('');
    setFecha('');
    setDoctor('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Paciente:</label>
        <input
          type="text"
          value={paciente}
          onChange={(e) => setPaciente(e.target.value)}
        />
      </div>
      <div>
        <label>Fecha:</label>
        <input
          type="date"
          value={fecha}
          onChange={(e) => setFecha(e.target.value)}
        />
      </div>
      <div>
        <label>Doctor:</label>
        <input
          type="text"
          value={doctor}
          onChange={(e) => setDoctor(e.target.value)}
        />
      </div>
      <button type="submit">{initialData ? 'Actualizar Cita' : 'Agregar Cita'}</button>
    </form>
  );
};

export default AddAppointment;
