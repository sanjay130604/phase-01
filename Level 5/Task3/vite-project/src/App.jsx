import React from "react";
import { BrowserRouter as Router, Route, Routes, Link, useParams, Navigate } from "react-router-dom";
import './App.css';

const blogPosts = [
  { id: "1", title: "Introduction to React", shortDescription: "Learn the basics of React.js.", content: "React is a JavaScript library for building user interfaces..." },
  { id: "2", title: "Understanding React Hooks", shortDescription: "A deep dive into React Hooks.", content: "Hooks are functions that let you use state and lifecycle features in function components..." },
  { id: "3", title: "React Router Explained", shortDescription: "Navigating in React with React Router.", content: "React Router is a standard library for routing in React..." }
];

const Home = () => (
  <div>
    <h1>Simple Blog</h1>
    {blogPosts.map(post => (
      <div key={post.id}>
        <h2><Link to={`/post/${post.id}`}>{post.title}</Link></h2>
        <p>{post.shortDescription}</p>
      </div>
    ))}
  </div>
);

const BlogPost = () => {
  const { id } = useParams();
  const post = blogPosts.find(post => post.id === id);

  if (!post) return <Navigate to="/404" replace />;

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
      <Link to="/">Back to Home</Link>
    </div>
  );
};

const NotFound = () => (
  <div>
    <h1>404 - Page Not Found</h1>
    <Link to="/">Go to Home</Link>
  </div>
);

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/post/:id" element={<BlogPost />} />
      <Route path="/404" element={<NotFound />} />
      <Route path="*" element={<Navigate to="/404" replace />} />
    </Routes>
  </Router>
);

export default App;
