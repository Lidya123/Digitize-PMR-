import React from 'react';
import { useNavigate } from 'react-router-dom';

const WriteData =() => {

    const navigate = useNavigate();
    const promptMsg = () => {
        if (window.confirm('Really go to another page?'))
        {
            navigate('/fetchData');
        }
    }

    return (
        <div className='container-lg'>
            <h1>Write data !</h1>
            <button className='btn btn-outline-dark ' onClick={promptMsg}>Add</button>
        </div>
    );
}

export default WriteData;