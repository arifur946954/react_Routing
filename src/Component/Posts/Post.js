import React, { useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import PostDetails from '../PostDetails/PostDetails';

const Post = () => {
    const [post,setpost]=useState([])
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res=>res.json())
        .then(data=>setpost(data))
    },[])
    return (
        <div>
           
            <h2>Welcome to my post page </h2>
            <h3>total length of the data: {post.length}</h3>

            {
                post.map(posts=><Link
                key={posts.id}
                //tst
                post={post}
                    to={`/post/${posts.id}`}
                >{posts.id}</Link>)
            }
           
            <Outlet></Outlet>
        </div>
    );
};

export default Post;