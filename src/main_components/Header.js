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
        <div>
        <nav className="navbar navbar-light bg-light">
            <div className='nav-flex'>
                <div>
                    <img src="https://www.digitalhealth.net/includes/features/2016/sr/intero/img/digitalhealth-logo.jpg" alt="BigCo Inc. logo" width="250" height="80"/>
                </div>
                <div className='btn-rgt mt-4'>
                    <Link to='/access' className='btn btn-dark'>Access</Link>
                    <Link to='/home' className="btn btn-dark float-right mx-5 row-6">Home</Link>
                </div>
            </div>
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
            </div>
        );
    }

export default Header;