import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import api from '../services/api';

const BlogList = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(()=>{
        const fetchBlogs = async()=>{
            const {data} = await api.get('/posts');
            setBlogs(data);
        };
        fetchBlogs();
    },[]);

  return (
    <div className='p-4'>
        <h2 className='text-2xl font-bold mb-4'>Blogs</h2>
        <div>
            {blogs.map((blog)=>{
                <div key={blog._id} className='border-b p-2'>
                    <Link to ={`/blogs/${blog._id}`}>
                    <h3 className='text-xl font-semibold'>{blog.title}</h3>
                    
                    </Link>
                    <p>{blog.content.substring(0, 100)}...</p>
                </div>
            })}
        </div>

    </div>
  )
}

export default BlogList