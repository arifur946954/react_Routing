import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const PostDetails = () => {
   
    // PostID nested path theke esese
    const {postId}=useParams();
 const [posts,setposts]=useState()
 useEffect(()=>{
const url=`https://jsonplaceholder.typicode.com/posts/${postId}`;
fetch(url)
.then(res=>res.json())
.then(data=>setposts(data))


 },[postId])

    return (
   
        <div>
            <h3>This is the details of post</h3>
            <h1>id is: {postId}</h1>
            <h3>{posts?.title}</h3>
            <p>{posts?.body}</p>

           
        </div>
    );
};

export default PostDetails;