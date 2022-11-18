import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Friends = (props) => {
    const {name,username,id}=props.friends
const navigate=useNavigate();
    const ShowfriendDetails=()=>{
const path=`/friends/${id}`;
navigate(path);
    }
    return (
        <div>
            <h3>Friend name is {name}</h3>
            <Link to={'/friend/'+id}>Details</Link>
            <button onClick={ShowfriendDetails}>{username} id: {id}</button>
        </div>
    );
};

export default Friends;