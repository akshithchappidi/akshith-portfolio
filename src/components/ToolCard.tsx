import React from 'react';
import { useNavigate } from 'react-router-dom';

interface ToolCardProps {
  id: string;
  image: string;
  title: string;
  description: string;
  link: string;
}

const ToolCard: React.FC<ToolCardProps> = ({ id, image, title, description, link }) => {
  const navigate = useNavigate();

  const handleLaunch = () => {
    navigate(link);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-4 m-4 flex flex-col items-center">
      <img src={image} alt={title} className="w-full h-48 object-cover rounded-t-lg" />
      <div className="p-4">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-700 mb-4">{description}</p>
        <button
          onClick={handleLaunch}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
        >
          Launch
        </button>
      </div>
    </div>
  );
};

export default ToolCard;
