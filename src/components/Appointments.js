// src/components/Appointments.js
import React, { useEffect, useState } from 'react';
import AddAppointment from './AddAppointment';

const Appointments = () => {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentAppointment, setCurrentAppointment] = useState(null);

  useEffect(() => {
    const mockData = [
      { paciente: 'Juan Pérez', fecha: '2024-09-05', doctor: 'Dr. López' },
      { paciente: 'Ana García', fecha: '2024-09-06', doctor: 'Dra. Martínez' },
      { paciente: 'Carlos Ruiz', fecha: '2024-09-07', doctor: 'Dr. Rodríguez' },
      { paciente: 'María Fernández', fecha: '2024-09-08', doctor: 'Dra. Gómez' },
      { paciente: 'Luis González', fecha: '2024-09-09', doctor: 'Dr. Hernández' },
    ];

    setAppointments(mockData);
    setLoading(false);
  }, []);

  const addAppointment = (appointment) => {
    setAppointments([...appointments, appointment]);
  };

  const editAppointment = (index) => {
    setCurrentAppointment({ ...appointments[index], index });
  };

  const updateAppointment = (updatedAppointment) => {
    const updatedAppointments = appointments.map((appointment, index) =>
      index === updatedAppointment.index ? updatedAppointment : appointment
    );
    setAppointments(updatedAppointments);
    setCurrentAppointment(null);
  };

  const deleteAppointment = (indexToDelete) => {
    setAppointments(appointments.filter((_, index) => index !== indexToDelete));
  };

  if (loading) {
    return <p>Cargando citas...</p>;
  }

  return (
    <div>
      <h2>Listado de Citas Médicas</h2>
      {currentAppointment ? (
        <AddAppointment
          onAdd={updateAppointment}
          initialData={currentAppointment}
        />
      ) : (
        <AddAppointment onAdd={addAppointment} />
      )}
      {appointments.length === 0 ? (
        <p>No hay citas disponibles.</p>
      ) : (
        <ul>
          {appointments.map((appointment, index) => (
            <li key={index}>
              <p>Paciente: {appointment.paciente}</p>
              <p>Fecha: {appointment.fecha}</p>
              <p>Doctor: {appointment.doctor}</p>
              <button onClick={() => editAppointment(index)}>Editar</button>
              <button onClick={() => deleteAppointment(index)}>Eliminar</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Appointments;
