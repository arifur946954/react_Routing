import React from 'react';
import { useParams } from 'react-router-dom';

const CountryDetails = () => {
    const {countrydetails}=useParams();
    console.log(countrydetails);
    return (
        <div>
      <h1>this is about {countrydetails}</h1>
        </div>
    );
};

export default CountryDetails;