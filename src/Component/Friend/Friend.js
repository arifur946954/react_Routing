import React, { useEffect, useState } from 'react';
import Friends from '../Friends/Friends';

const Friend = () => {
  const [friend,setfriend] = useState([]);
  useEffect(()=>{
fetch('https://jsonplaceholder.typicode.com/users')
.then(res=>res.json())
.then(data=>setfriend(data));


  },[])
    return (
        <div>
           <h1>every man dont live without friend</h1> 
           <h3>Ttotal length of the friend: {friend.length}</h3>
{
    friend.map(friends=><Friends
    key={friends.id}
    friends={friends}

    
    ></Friends>)
}


        </div>
    );
};

export default Friend;