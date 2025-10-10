import React from 'react';
import { useQuery }from '@tanstack/react-query'

const fetchPosts = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};

function PostsComponent() {
 
    const { data, error, isLoading, isError, refetch } = useQuery({
    queryKey: ['posts'],
    queryFn: fetchPosts
  })
    

  if (isLoading) {
    return <p>Loading posts...</p>;
  }

  if (isError) {
    return <p style={{ color: 'red' }}>Error: {error.message}</p>;
  }

  return (
    <div>
      <button onClick={() => refetch()} style={{ marginBottom: '15px' }}>
        Refresh Posts 🔁
      </button>

      <ul>
        {data.slice(0, 10).map((post) => (
          <li key={post.id}>
            <strong>{post.title}</strong>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PostsComponent