import React from 'react';
import { useParams } from 'react-router-dom';

interface Blog {
  title: string;
  content: string;
}

const sampleBlogs: Record<string, Blog> = {
  '1': {
    title: 'Blog Post 1',
    content: 'This is the full content of blog post 1.',
  },
  '2': {
    title: 'Blog Post 2',
    content: 'This is the full content of blog post 2.',
  },
  '3': {
    title: 'Blog Post 3',
    content: 'This is the full content of blog post 3.',
  },
};

const BlogDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  if (!id) {
    return (
      <div className="container mx-auto p-4">
        <h1>Blog not found</h1>
      </div>
    );
  }

  const blog = sampleBlogs[id];

  if (!blog) {
    return (
      <div className="container mx-auto p-4">
        <h1>Blog not found</h1>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">{blog.title}</h1>
      <p>{blog.content}</p>
    </div>
  );
};

export default BlogDetails;
