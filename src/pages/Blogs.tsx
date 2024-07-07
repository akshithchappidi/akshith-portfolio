// Blogs.tsx
import React, { useEffect, useState } from 'react';
import BlogCard from '../components/BlogCard';
import client from '../contentfulClient';

interface Blog {
  id: string;
  title: string;
  description: string;
  image: string; // Change to string for image URL
}

const Blogs: React.FC = () => {
  const [blogPosts, setBlogPosts] = useState<Blog[]>([]);

  useEffect(() => {
    client.getEntries()
      .then((response: any) => {
        const items = response.items;
        
        const blogs: Blog[] = items.map((item: any) => {
          const {id}    = item.sys;
          const { title, description, images } = item.fields;
          const image = images && images.length > 0 ? images[0].fields.file.url : 'https://via.placeholder.com/150'; // Placeholder URL if no image
          console.log(id,title);
          return {
            id,
            title,
            description,
            image,
          };
        });
        setBlogPosts(blogs);
      })
      .catch(console.error);
  }, []);

  const sliceDescription = (description: string, maxLength: number): string => {
    const lines = description.split('\n');
    const slicedText = lines.slice(0, 2).join('\n');
    return slicedText.length > maxLength ? slicedText.substring(0, maxLength).trimEnd() + '...' : slicedText;
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Blogs</h1>
      <div className="flex flex-wrap -mx-4">
        {blogPosts.map(post => (
          <BlogCard key={post.id} id={post.id} image={post.image} title={post.title} description={sliceDescription(post.description,100)} />
        ))}
      </div>
    </div>
  );
};

export default Blogs;
