import React from 'react';
import {useLocation, useNavigate} from 'react-router-dom';
import Record from '../Record.json';

const FetchData =() => {
    const navigate = useNavigate();
    const location = useLocation();
    // const open_doc = false;
    const open_doc = location.state.open_doc;

    const navigateToWrite = () =>{
        navigate("/writeData");
    }

    return (
        <div className='container-lg'>
            <h3 className='text-center m-3'>Medical Record</h3>
            {Record && Record.map(record => {
                return(<div className='rounded border border-white p-3 text-center m-2' key={record.id}>{record.date} 
                &nbsp;&nbsp;|&nbsp;&nbsp; Age :  {record.age}
                &nbsp;&nbsp;|&nbsp;&nbsp; Gender :  {record.gender}<br/>
                <strong>{record.disease} </strong> - {record.status} <br/>
                Diagnosis : {record.diagnosis}
                <div className='border border-danger rounded-right m-2 p-2'>Prescription : {record.prescription}</div>
                </div>)
            })}
            {open_doc ? <div className='text-center'>
            <p className='btn btn-outline-dark' onClick={navigateToWrite}>Add Record</p>
            </div> : ""}
        </div>
    );
}

export default FetchData;