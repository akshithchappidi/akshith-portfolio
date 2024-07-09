import React from 'react';

const FluidSimulation: React.FC = () => {
  return (
    <div className="container mx-auto p-8 my-8">
      <h2 className="text-3xl font-bold text-center mb-8">Fluid Simulation</h2>
      <div className="flex justify-center items-center">
        <iframe
          src="/Eulerian.html"
          width="800"
          height="600"
          title="Fluid Simulation"
          style={{ border: 'none' }}
        ></iframe>
      </div>
    </div>
  );
};

export default FluidSimulation;
