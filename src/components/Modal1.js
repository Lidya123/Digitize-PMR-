import React, {useState} from 'react';
import './Modal.css'

const Modal1 =() => {

    const [modal, setModal] = useState(false);

    const handleSubmit = (e) =>{
        e.preventDefault();
        const profileImage = e.target.profile.value;
        const firstName = e.target.fname.value;
        const dateOfBirth = e.target.dob.value;
        const gender = e.target.gender.value;
        console.log("Profile Image: "+profileImage,"\nFirst Name: "+firstName, "\nDOB: "+dateOfBirth, "\nGender: "+gender);
        setModal(true);
    }
// crypto-js crypto-es
    const keyGen= ()=>{
        const NodeRSA = require("node-rsa");
        const key = new NodeRSA({b : 512});

        var public_key = key.exportKey("public");
        var private_key = key.exportKey("private");

        console.log(public_key+":\n"+private_key+"\n");
        let key_public = new NodeRSA(public_key);
        let key_private = new NodeRSA(private_key);

        return key_public;
    } 

    return (
        <>
         {!modal ? (
            <div className="container-lg">
            <p>Patient Data</p>
            <form id="modal" onSubmit={handleSubmit}>
                {/* Profile photo */}
                <div className="custom-file m-4">
                <input type="file" className="custom-file-input" name='profile' />
                <label className="custom-file-label mr-5" for="customFile">Choose profile image</label>
                </div> 
            	{/* Name */}
                <div className="row m-3">
                    <div className="col">
                    <input type="text" className="form-control" name='fname' placeholder="First name" />
                    </div>
                    <div className="col">
                    <input type="text" className="form-control" name='mname' placeholder="Middle name" />
                    </div>
                    <div className="col">
                    <input type="text" className="form-control" name='lname' placeholder="Last name" />
                    </div>
                </div>
                
                <div className="row m-3">

                    {/* Date of Birth */}
                    <div className="col">
                    <label for="dob">Date of birth :</label>
                    <input type="date" className="form-control" name='dob' />
                    </div>
                    {/* Blood group */}
                    <div className="col">
                        <label for="inlineFormCustomSelectPref">Blood Group :</label>
                        <select className="custom-select" id="inlineFormCustomSelectPref">
                            <option selected>Select</option>
                            <option name='bloodgrp' value="1">A+</option>
                            <option name='bloodgrp' value="2">B-</option>
                            <option name='bloodgrp' value="3">B+</option>
                            <option name='bloodgrp' value="4">B-</option>
                            <option name='bloodgrp' value="5">O+</option>
                            <option name='bloodgrp' value="6">O-</option>
                            <option name='bloodgrp' value="7">AB+</option>
                            <option name='bloodgrp' value="8">AB-</option>
                        </select>
                    </div>
                    {/* Address */}
                    <div>
                    <label className="mt-3" for="inputAddress2">Address :</label>
                    <input type="text" className="form-control" name='address' placeholder="Apartment, studio, or floor"/>

                    <div className="row mt-3">
                        <div className="col">
                            <input type="text" className="form-control" name='city' placeholder="City"/>
                        </div>
                        <div className="col">
                            <input type="text" className="form-control" name='state' placeholder="State"/>
                        </div>
                        <div className="col">
                            <input type="text" className="form-control" name='pincode' placeholder="Pin Code"/>
                        </div>
                    </div>
                </div>
                </div>

            <div className="row m-3">
                <div className="col">
                    <label className="mr-4" for = "gender" >Gender?</label>
                    <label className="radio-inline"> <input type="radio"  name="gender" value="female"/> Female</label> &nbsp;
                    <label className="radio-inline"><input type="radio" name="gender" value="male"/> Male</label>
                </div>
                <div className="col">
                    <label className="mr-4" for= "maritalStatus" >Married?</label>
                    <label className="radio-inline"> <input type="radio"  name="married" value="yes"/> Yes</label> &nbsp;
                    <label className="radio-inline"> <input type="radio" name="married" value="no"/> No</label>
                </div> 
                <div className = "mt-3">
                <input type="number" className="form-control" placeholder="Emergency contact number" />
                </div>
                    <button className="btn btn-outline-secondary mt-4 mb-4">Submit</button>
                </div>
            </form>
                </div>
         ) : 
         (
            <div className='modalBackground'>
            <div className='modalContainer'>
                <div className='title'>
                    <div className='text-right mr-1'>
                        <button className='btn btn-outline-danger' onClick={()=>{setModal(false)}}>
                            X
                        </button>
                    </div>
                    <div className="title">
                    <h3>Registeration Successfull!</h3>
                        </div>
                        <p className='body'>
                            Your Public key : {keyGen} <br/>
                            Your Private key : private_key <br/>
                            Your nft ID : patient_nft_id
                        </p>
                            </div>
                        </div>
                    </div>
         )}
        </>
    );
}

export default Modal1;