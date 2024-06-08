"use client";
import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import axios from 'axios';
import Loading from '@/app/components/Loading/Loading';
import Link from 'next/link';
import Error from '../../components/Error/Error'

const Page = () => {
    const { slug } = useParams();
    const [post, setPost] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPost = async () => {
            try {
                const response = await axios.get(`https://dummyjson.com/posts/${slug}`);
                let finalData = response.data;
                const userResponse = await axios.get(`https://dummyjson.com/users/${finalData.userId}`);
                const username = userResponse.data.username;
                finalData['username'] = username;
                setPost(finalData);
                setLoading(false);
            } catch (error) {
                setError(error);
                setLoading(false);
            }
        };

        if (slug) {
            fetchPost();
        }
    }, [slug]); 

    if (loading) {
        return <Loading />;
    }

    if (error) {
        return <Error />;
    }

    return (
      <div className="">
        <div className="w-full h-[4vh]"></div>
        <div className="flex flex-col min-h-[1dvh]">
        <div className="bg-white text-black py-12 md:py-20">
          <div className="container mx-auto px-4 md:px-6 lg:px-8 text-center">
            <div className="max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold mb-2">{post.title}</h1>
              <div className="flex items-center justify-center space-x-4 mb-6">
                <div className="flex items-center">
                  <div className="w-8 h-8 mr-2 rounded-full bg-gray-800 text-white flex items-center justify-center">
                    {post.username.substring(0, 2).toUpperCase()}
                  </div>
                  <span className="text-sm">{post.username}</span>
                </div>
                <span className="text-gray-400 text-sm">{post.reactions.likes} likes, {post.views} views</span>
              </div>
            </div>
          </div>
        </div>
        <div className="container mx-auto px-4 md:px-6 lg:px-8 py-12 md:py-20 flex flex-col items-center justify-center">
          <div className="prose prose-lg dark:prose-invert max-w-3xl">
            <h2 className="text-2xl font-bold mb-4">{post.title}</h2>
            <p>
              {post.body}
            </p>
          </div>
        </div>
      </div>
      <hr />
    </div>
    );
};

export default Page;
