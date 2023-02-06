import React from 'react'
import {useNavigate} from 'react-router-dom';

const Home = () => {

    const navigate = useNavigate();

  return (
    <div className='text-center'>
      <h3 className='text-center m-3'>Digitization of Patient Medical Health Record using Non Fungible Tokens</h3>
        <p className='btn btn-outline-dark m-3' onClick={()=>navigate("/register")}>Registeration</p>
        <p className='btn btn-outline-dark m-3' onClick={()=>navigate("/access")}>Access Data</p>
    </div>
  )
}

export default Home