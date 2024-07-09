// BlogDetails.tsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import client from '../contentfulClient';

interface Blog {
  title: string;
  content: string;
}

const BlogDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [blog, setBlog] = useState<Blog | null>(null);

  useEffect(() => {
    if (id) {
      client.getEntry(id)
        .then((entry) => {
          const title = typeof entry.fields.title === 'string' ? entry.fields.title : 'No Title';
          const content = typeof entry.fields.description === 'string' ? entry.fields.description : 'No Content';
          setBlog({ title, content });
        })
        .catch(console.error);
    }
  }, [id]);

  if (!blog) {
    return (
      <div className="container mx-auto p-8">
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
