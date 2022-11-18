import React from 'react';
import { Link } from 'react-router-dom';
import CustomLink from '../CustomLink/CustomLink';


const Header = () => {
    return (
        <div>
             <h1>Welcome to my routing Website</h1> 
            
      
             {/* <CustomLink to="/">Home</CustomLink>
             <CustomLink to="/friend">Friend</CustomLink>
             <CustomLink to="/about">About</CustomLink> */}

             <Link to="/">Home</Link>
             <Link to="/friend">Friend</Link>
             <Link to="/post">Post</Link>
             <Link to="/country">Country</Link>
             <Link to="/about">About</Link>
             
            
        </div>
    );
};

export default Header;