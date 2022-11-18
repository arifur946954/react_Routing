import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import CountryDetails from '../CountryDetails/CountryDetails';

const Country = () => {
    const [country,setcountry]=useState([]);
    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res=>res.json())
        .then(data=>setcountry(data))
    },[])
    return (
        <div>
            <h1>welcome to my country pages </h1>
            <h3>total country lenth is {country.length}</h3>

           <ul>
           {
                country.map(countries=>
                    <li>
                        <Link to={`countries/${countries.name.common}`}>{countries.name.common}</Link>
                    </li>
                )

              
                
              
                
            }
           </ul>
        </div>
    );
};

export default Country;