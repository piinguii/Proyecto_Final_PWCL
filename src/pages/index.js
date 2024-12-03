import React from 'react';
import Header from '../components/Header';

const Index = () => (
  <>
    <Header />
    <main className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center">Bienvenido</h1>
      <p className="text-center text-gray-700">
        Navega por las secciones de clientes, proyectos y albaranes.
      </p>
    </main>
  </>
);

export default Index;