import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom'

function Header () {
    const [usrModal, setUsrModal] = useState(false);
    const [docModal, setDocModal] = useState(false);

    const navigate = useNavigate();

    const toggleUsrEntry =()=>{
        setUsrModal(!usrModal)
    }

    const toggleDocEntry =()=>{
        setDocModal(!docModal);
    }

    const navigateToRead = () => {
        navigate("/fetchData");
    }

    return (
        <>
        <nav className="navbar navbar-light bg-nav">

        <nav className="navbar navbar-light">
        <img className='mt-2' src="https://cpha.com/wp-content/uploads/2017/10/Digital-Health-Logo.png" alt="BigCo Inc. logo" width="200" height="60"/>
            <form className="form-inline float-right mx-">
            <p className="nav-item dropdown">

            <button className='btn btn-secondary' data-toggle="dropdown" >Access</button>
            <div className="dropdown-menu dropdown-menu-right bg-warning" aria-labelledby="navbarDropdown">
                <Link to='/pop' className='dropdown-item fw-bold' onClick={toggleUsrEntry}> Patient</Link>
                <Link to='/pop' className='dropdown-item fw-bold' onClick={toggleDocEntry}>Doctor</Link>    
            </div>
            <Link to='/home' className="btn btn-secondary float-right mx-5 row-6
            ">Home</Link>
            </p>
        </form>
        </nav>
        </nav>

        {usrModal && (
            <div className='modalBackground'>
                <form onSubmit={navigateToRead} >
                    <div className='modalContainer'>
                    <div className='title'>
                        <div className='text-right'>
                            <button className='btn btn-outline-danger' onClick={toggleUsrEntry}>
                                X
                            </button>
                        </div>
                        <div className="title">
                            <h5>Enter Patient Credentials</h5>
                        </div>
                        <div className="inputs">
                            <label>Patient's nft id: &nbsp; </label>
                            <input type="text" className='rounded' /><br/>
                            <label>Patient's private key: &nbsp; </label>
                            <input type="text" className='rounded' /><br/>                              
                            <button className='btn btn-outline-dark rounded-pill pl-4 pr-4 mt-4'>Verify</button>
                        </div>
                    </div>
                    </div>
                </form>
            </div>
        )}
            {docModal && (
                <div className='modalBackground'>
                <form onSubmit={navigateToRead} >
                <div className='modalContainer'>
                    <div className='title'>
                    <div className='text-right'>
                        <button className='btn btn-outline-danger' onClick={toggleDocEntry}>
                            X
                        </button>
                    </div>
                        <div className="title">
                        <h5>Enter credentials</h5>
                            </div>
                            <div className="inputs">
                                <label>Patient's nft id: &nbsp; </label>
                                <input type="text" className='rounded' /><br/>
                                <label>Doctor's nft id: &nbsp; </label>
                                <input type="text" className='rounded' /><br/>
                                <label>Patient's private key: &nbsp; </label>
                                <input type="text" className='rounded' /><br/>                              
                                <button className='btn btn-outline-dark rounded-pill pl-4 pr-4 mt-4' type="submit">Verify</button>
                            </div>
                            </div>
                            </div>
                            </form >
                        </div>
                )}
                {/* </nav> */}
            </>
        );
    }

export default Header;