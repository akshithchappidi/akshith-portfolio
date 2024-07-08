import React from 'react';
import ToolCard from '../components/ToolCard';

const tools = [
  {
    id: '1',
    image: 'path_to_your_image.jpg', // Add the path to your tool image
    title: 'Fluid Simulation',
    description: 'A fluid simulation tool for visualizing fluid dynamics.',
    link: '/tools/fluid-simulation', // The route for your Fluid Simulation tool
  },
  // Add more tools here
];

const ToolList: React.FC = () => {
  return (
    <div className="container mx-auto my-8">
      <h2 className="text-3xl font-bold text-center mb-8">Tools</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {tools.map(tool => (
          <ToolCard
            key={tool.id}
            id={tool.id}
            image={tool.image}
            title={tool.title}
            description={tool.description}
            link={tool.link}
          />
        ))}
      </div>
    </div>
  );
};

export default ToolList;
