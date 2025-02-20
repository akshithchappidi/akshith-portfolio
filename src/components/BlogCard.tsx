// BlogCard.tsx
import React from 'react';
import { Link } from 'react-router-dom';

interface BlogCardProps {
  id: string;
  image: string;
  title: string;
  description: string;
}

const BlogCard: React.FC<BlogCardProps> = ({ id, image, title, description }) => {
  const shortDescription = description.split('\n').slice(0, 2).join(' ');

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg m-4">
      <img className="w-full" src={image} alt={title} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{shortDescription}</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <Link to={`/blogs/${id}`} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Read More
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
