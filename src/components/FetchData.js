import React from 'react';
import {useNavigate} from 'react-router-dom';

const FetchData =() => {
    const navigate = useNavigate();

    const navigateToWrite = () =>{
        navigate("/writeData")
    }

    return (
        <div className='container-lg'>
            <h1>Fetched data !</h1>
            <p className='btn btn-outline-dark' onClick={navigateToWrite}>Add Record</p>
        </div>
    );
}

export default FetchData;