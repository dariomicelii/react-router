import { useState, useEffect } from "react";

export default function Posts() {
  const [posts, setPosts] = useState([]);

  const fetchPosts = () => {
    fetch("http://localhost:3000/posts")
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
      });
  };
  useEffect(() => {
    fetchPosts();
  }, []);
  return (
    <div className="container my-5">
      <ul>
        {posts.map((post, id) => (
          <li key={id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}
