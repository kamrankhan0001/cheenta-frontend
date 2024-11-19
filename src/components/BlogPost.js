import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from '../services/api';

function BlogPost() {
    const { id } = useParams();
    const [post, setPost] = useState(null);

    useEffect(() => {
        const fetchPost = async () => {
            const { data } = await api.get(`/posts/${id}`);
            setPost(data);
        };

        fetchPost();
    }, [id]);

    if (!post) return <p>Loading...</p>;

    return (
        <div className="p-4">
            <h1 className="text-3xl font-bold">{post.title}</h1>
            <p className="mt-4">{post.content}</p>
            <div className="mt-4">
                <h3 className="text-xl font-semibold">Comments</h3>
                {post.comments.map((comment, index) => (
                    <p key={index} className="border-t mt-2 pt-2">{comment.content}</p>
                ))}
            </div>
        </div>
    );
}

export default BlogPost;
