import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';

const ViewRecord = () => {

    const [usrModal, setUsrModal] = useState(false);
    const [docModal, setDocModal] = useState(false);

    const navigate = useNavigate();

    const toggleUsrEntry = ()=> {
        setUsrModal(!usrModal);
    }

    const toggleDocEntry =() =>{
        setDocModal(!docModal);
    }

    const navigateToRead = () => {
        navigate("/fetchData");
    }

    return (
        <>
            <div className='text-center'>
                <h3 className='text-secondary'>Access to View Record</h3>
                <button className='btn btn-outline-secondary mr-2' onClick={toggleUsrEntry}> Patient </button>
                <button className='btn btn-outline-secondary ml-2' onClick={toggleDocEntry}> Doctor </button>
            </div>
            {usrModal && (
                <div className='modalBackground'>
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
                                <button onClick={navigateToRead} className='btn btn-outline-dark rounded-pill pl-4 pr-4 mt-4' type="submit">Verify</button>
                            </div>
                                </div>
                            </div>
                        </div>
            )}
            {docModal && (
                <div className='modalBackground'>
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
                                <button onClick={navigateToRead} className='btn btn-outline-dark rounded-pill pl-4 pr-4 mt-4' type="submit">Verify</button>
                            </div>
                            </div>
                            </div>
                        </div>
            )}
        </>
    );
}

export default ViewRecord;