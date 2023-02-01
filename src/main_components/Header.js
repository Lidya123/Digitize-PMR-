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
        <nav className="navbar navbar-light bg-light">
    
        <form className="form-inline ml-auto">
            <p className="nav-item dropdown btn btn-secondary m-2">
            <a className="nav-link dropdown-toggle " href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Access
            </a>
            
            <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                <Link to='/pop' className='dropdown-item' onClick={toggleUsrEntry}> Patient</Link>
                {/* <p className='dropdown-item' onClick={()=> <Pop toggleEntry = {toggleUsrEntry} />}> Patient</p> */}
                <Link to='/pop' className='dropdown-item' onClick={toggleDocEntry}>Doctor</Link>
            </div>
            </p>
            <Link to='/home' className="btn btn-secondary mr-sm-2 m-2">Home</Link>
        </form>
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
            </>
    );
}

export default Header;