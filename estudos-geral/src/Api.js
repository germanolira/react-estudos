import React, { useEffect, useState } from 'react';

import PostItem from './PostItem';

export default function Api() {
  const [post, setPost] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts').then(response => {
      response.json().then(data => {
        setPost(data);
      })
    })
  })

  return (
    <div>
      <ul>
        {post.map(post => (
          <PostItem key={post.id} post={post} />
        ))}
      </ul>
    </div>
  )
}