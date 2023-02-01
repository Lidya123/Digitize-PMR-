import React from 'react';
<<<<<<< HEAD

const FetchData =() => {
    return (
        <div className='container-lg'>
            <h1>Fetched data !</h1>
=======
import {useNavigate} from 'react-router-dom';

const FetchData =() => {
    const navigate = useNavigate();

    const navigateToWrite = () =>{
        navigate("/writeData")
    }

    return (
        <div className='container-lg'>
            <h1>Fetched data !</h1>
            <p className='btn btn-outline-secondary' onClick={navigateToWrite}>Add Record</p>
>>>>>>> 470f629 (change 1)
        </div>
    );
}

export default FetchData;