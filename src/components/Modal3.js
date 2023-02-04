import React, {useState} from 'react';
import './Modal.css'

const Modal3 = ({handleSubmit, modal, setModal}) => {

    const [formfields, setFormfields] = useState({
        'profile' : '',
        'fname': '',
        'dob' : '', 
        'gender': ''
      });    

    return (
<div>
    {!modal ? (
    <div className="container-lg">
        <p className='threeD'>Researcher Data</p>
        <form id="modal" className='modal-box' onSubmit={handleSubmit} enctype="multipart/form-data">
        <div className='row'>
            <div className='column left'>
            <div className="m-4">
            <label className="mr-5">Profile Image : </label><br/>
            <input type="file" name='profile' value={formfields.profile} onChange={(e)=>setFormfields({...formfields, profile : e.target.value})}/>
            </div> 

            <div className="row m-3">
                <div className="col">
                <input type="text" className="form-control" name='fname' value={formfields.fname} onChange={(e)=>setFormfields({...formfields, fname : e.target.value})} placeholder="First name" />
                </div>
                <div className="col">
                <input type="text" className="form-control" name='mname' placeholder="Middle name" />
                </div>
                <div className="col">
                <input type="text" className="form-control" name='lname' placeholder="Last name" />
                </div>
            </div>

            <div className="row m-3">
                <div className="col">
                <label for="dob">Date of birth :</label>
                <input type="date" className="form-control" name='dob' value={formfields.dob} onChange={(e)=>setFormfields({...formfields, dob : e.target.value})}/>
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
                    <label className="mr-4" value={formfields.gender} onChange={(e)=>setFormfields({...formfields, gender : e.target.value})}>Gender?</label>
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
                        <button style={{"color": "white"}} className="btn btn-outline-dark mt-4 mb-2">Submit</button>
                    </div>
                </div>
            <div className='column right'></div> </div>
        </form>
    </div>
    ) : (
        <div className='modalBackground'>
            <div className='modalContainer'>
                <div className='title'>
                    <div className='text-right mr-1'>
                         <button className='btn btn-outline-danger' onClick={() => {setModal(false)}}> X </button>
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