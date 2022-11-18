import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const FriendDetail = () => {
    const {friendID}=useParams();
    const [details,setDetails]=useState({});
    useEffect(()=>{
        let url=`https://jsonplaceholder.typicode.com/users/${friendID}`;
       fetch(url)
        .then(res=>res.json())
        .then(data=>setDetails(data));
    },[])
    return (
        <div>

            <h1>Tnis is details of friend: {friendID}</h1>
            <h3>name is:{details.name}</h3>
            <h3>Email is:{details.email}</h3>
            <p>Address is: {details.address?.city}</p>
        </div>
    );
};

export default FriendDetail;