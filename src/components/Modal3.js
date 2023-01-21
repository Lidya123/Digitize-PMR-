import React, { useState } from 'react';
import './Modal.css'

const Modal3 = () => {

    const [modal, setModal] = useState(false);

    return (
        <div>
        {!modal ? (
            <div className="container-lg">
        <p>Researcher Data</p>
        <form id="modal">
            <div className="custom-file m-4">
            <input type="file" className="custom-file-input" id="customFile" />
            <label className="custom-file-label mr-5" for="customFile">Choose profile image</label>
            </div> 

            <div className="row m-3">
                <div className="col">
                <input type="text" className="form-control" placeholder="First name" />
                </div>
                <div className="col">
                <input type="text" className="form-control" placeholder="Middle name" />
                </div>
                <div className="col">
                <input type="text" className="form-control" placeholder="Last name" />
                </div>
            </div>

            <div className="row m-3">
                <div className="col">
                <label for="dob">Date of birth :</label>
                <input type="date" className="form-control" id="inputDate" />
                </div>
                <div>

                <label className="mt-3">Address :</label>
                <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor"/>
                <div className="row mt-3">
                    <div className="col">
                    <input type="text" className="form-control" id="inputCity" placeholder="City"/>
                    </div>
                    <div className="col">
                    <input type="text" className="form-control" id="inputState" placeholder="State"/>
                    </div>
                    <div className="col">
                    <input type="text" className="form-control" id="pincode" placeholder="Pin Code"/>
                    </div>
                    <div className='col'>
                    <input type="text" className="form-control" id="contactNo" placeholder='Contact No'/>
                    </div>
                </div>
            </div>

            <div className='row mt-3'>
                    <div className='col'>
                        <label>Registeration Date :</label>
                        <input type="date" className='form-control' id='date'/>
                    </div>
                    <div className='col'>
                        <label>Registeration Time :</label>
                        <input type="time" className='form-control' id='time'/>
                    </div>
                </div>
            </div>

        <div className="row m-3">
            <div className="col">
                <label className="mr-4" >Gender?</label>
                <label className="radio-inline"> <input type="radio" name="gender" value="female" /> Female</label> &nbsp;
                <label className="radio-inline"><input type="radio" name="gender" value="male" /> Male</label>
            </div>
            <div className="col">
                <label className="mr-4">Married?</label>
                <label className="radio-inline"> <input type="radio" name="married" value="yes" /> Yes</label> &nbsp;
                <label className="radio-inline"><input type="radio" name="married" value="no" /> No</label>
            </div> 
            <div className = "mt-3">
            <input type="number" className="form-control" placeholder="Emergency contact number" />
            </div>
                <button type="submit" onClick={()=> {setModal(true)}} className="btn btn-outline-secondary mt-4 mb-4">Submit</button>
            </div>
        </form>
    </div>

        ) : (
                    <div className='modalBackground'>
                    <div className='modalContainer'>
                        <div className='title'>
                                <div className='text-right mr-1'>
                                    <button className='btn btn-outline-danger' onClick={() => {setModal(false)}}>
                                        X
                                    </button>
                                </div>
                            <div className="title">
                            <h3>Registeration Successfull!</h3>
                                </div>
                                <p className='body'>
                                    Your Public key : public_key <br/>
                                    Your Private key : private_key <br/>
                                    Your nft ID : res_nft_id
                                </p>
                                    </div>
                                </div>
                            </div>
        )}
        </div>
        
    );
}

export default Modal3;