/* eslint-disable no-unused-vars */
import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Phone = () => {
    const phone = useLoaderData();

    return (
        <div>
            <h3>{phone.name}</h3>
            <img src={phone.image} alt="" />
        </div>
    );
};

export default Phone;