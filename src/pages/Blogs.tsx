import React from 'react';
import BlogCard from '../components/BlogCard';

const blogPosts = [
  {
    id: '1',
    image: 'https://via.placeholder.com/150',
    title: 'Blog Post 1',
    description: 'This is a brief description of blog post 1.',
  },
  {
    id: '2',
    image: 'https://via.placeholder.com/150',
    title: 'Blog Post 2',
    description: 'This is a brief description of blog post 2.',
  },
  {
    id: '3',
    image: 'https://via.placeholder.com/150',
    title: 'Blog Post 3',
    description: 'This is a brief description of blog post 3.',
  },
];

const Blogs: React.FC = () => (
  <div className="container mx-auto p-4">
    <h1 className="text-3xl font-bold mb-4">Blogs</h1>
    <div className="flex flex-wrap -mx-4">
      {blogPosts.map(post => (
        <BlogCard key={post.id} id={post.id} image={post.image} title={post.title} description={post.description} />
      ))}
    </div>
  </div>
);

export default Blogs;
