import React, {useState} from "react";
import "./Modal.css";

const Modal1 = ({ handleSubmit, modal, setModal }) => {

  const [formfields, setFormfields] = useState({
      'profile' : '',
      'fname': '',
      'dob' : '', 
      'gender': ''
    });

  // crypto-js crypto-es
  // function keyGen(){
  //     const NodeRSA = require("node-rsa");
  //     const key = new NodeRSA({b : 1024});

  //     var public_key = key.exportKey("public");
  //     var private_key = key.exportKey("private");
        // let key_public = new NodeRSA(public_key);
        // let key_private = new NodeRSA(private_key);
  // function keyGen(){
  //     const publicKey = 123456789;
  //     return publicKey;
  // }

    return (
        <>
         {!modal ? (
            <div className="container-lg">
              <p className="threeD">Patient Data</p>
              <div id="modal" className="row modal-box">
            <form className="column left" onSubmit={handleSubmit} enctype="multipart/form-data">
                  {/* Profile photo */}
                  <div className="m-4">
                  <label>Profile Image : </label><br/>
                  <input type="file" name='profile' value={formfields.profile} onChange={(e)=> setFormfields({...formfields, profile : e.target.value})}/>
                  </div> 
                  {/* Name */}
                  <div className="row m-3">
                      <div className="col">
                      <input type="text" className="form-control" name='fname' value={formfields.fname} onChange={(e)=> setFormfields({...formfields, fname : e.target.value})} placeholder="First name" />
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
                    <label for="dob">Date of birth : </label>
                    <input type="date" className="form-control" name="dob" value={formfields.dob} onChange={(e)=> setFormfields({...formfields, dob : e.target.value})}/>
                  </div>
                  {/* Blood group */}
                  <div className="col">
                    <label for="inlineFormCustomSelectPref">Blood Group :</label>
                    <select className="custom-select" id="inlineFormCustomSelectPref">
                      <option selected>Select</option>
                      <option name="bloodgrp" value="1"> A+ </option>
                      <option name="bloodgrp" value="2"> B- </option>
                      <option name="bloodgrp" value="3"> B+ </option>
                      <option name="bloodgrp" value="4"> B- </option>
                      <option name="bloodgrp" value="5"> O+ </option>
                      <option name="bloodgrp" value="6"> O- </option>
                      <option name="bloodgrp" value="7"> AB+ </option>
                      <option name="bloodgrp" value="8"> AB- </option>
                    </select>
                  </div>
                 
                  {/* Address */}
                  <div>
                    <label className="mt-3" for="inputAddress2"> Address : </label>
                    <input type="text" className="form-control" name="address" placeholder="Apartment, studio, or floor" />

                    <div className="row mt-3">
                      <div className="col">
                        <input type="text" className="form-control" name="city" placeholder="City" />
                      </div>
                      <div className="col">
                        <input type="text" className="form-control" name="state" placeholder="State" />
                      </div>
                      <div className="col">
                        <input type="text" className="form-control" name="pincode" placeholder="Pin Code" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row m-3">
                  <div className="col">
                    <label className="mr-4" for="gender">
                      Gender?
                    </label>
                    <label className="radio-inline">{" "}
                      <input type="radio" name="gender" value="female" onChange={(e)=> setFormfields({...formfields, gender : e.target.value})}/> Female 
                    </label>{" "}
                    &nbsp;
                    <label className="radio-inline">
                      <input type="radio" name="gender" value="male" onChange={(e)=> setFormfields({...formfields, gender : e.target.value})}/> Male 
                    </label>
                  </div>
                  <div className="col">
                    <label className="mr-4" for="maritalStatus">
                      Married?
                    </label>
                    <label className="radio-inline">
                      {" "}
                      <input type="radio" name="married" value="yes" /> Yes
                    </label>{" "}
                    &nbsp;
                    <label className="radio-inline">
                      {" "}
                      <input type="radio" name="married" value="no" /> No
                    </label>
                  </div>
                  <div className="mt-3">
                    <input type="number" className="form-control" placeholder="Emergency contact number" />
                  </div>
                  <button style={{ color: "white" }} className="btn btn-outline-dark mt-4 mb-2" > Submit </button>
                </div>
              </form>
              <div className="column right"></div>
          </div>
          </div>
      ) : (
        <div className="modalBackground">
          <div className="modalContainer">
            <div className="title">
              <div className="text-right mr-1">
                <button className="btn btn-outline-danger" onClick={() => { setModal(false); }}> X </button>
              </div>
              <div className="title">
                <h3>Registeration Successfull!</h3>
              </div>
              <p className="body">
                {/* Your Public key : {keyGen()} <br/> */}
                Your Pubic key : public_key <br />
                Your Private key : private_key <br />
                Your nft ID : patient_nft_id
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal1;
