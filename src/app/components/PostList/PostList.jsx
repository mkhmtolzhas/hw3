"use client"

import PostItem from "../PostItem/PostItem"
import React from "react";
import { useEffect, useState } from "react";
import axios from 'axios';
import Loading from "../Loading/Loading"

export default function PostList() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get('https://dummyjson.com/posts')
        let posts = response.data.posts;
        for (let post of posts) {
          const userResponse = await axios.get(`https://dummyjson.com/users/${post.userId}`);
          const username = userResponse.data.username;
          post.username = username
        }
        setPosts(posts); 
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }
  return (
    <div className="w-full min-h-screen px-[8%] py-[30px]">
      {posts.map(post => (<PostItem key={post.id} title={post.title} body={post.body} views={post.views} tags={post.tags[0]} reactions={post.reactions.likes} username={post.username} id={post.id}/>))}
    </div>
  )
}