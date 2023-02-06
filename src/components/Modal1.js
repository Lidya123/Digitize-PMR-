import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import "./Modal.css";

const Modal1 = ({handleSubmit, modal}) => {

  const navigate = useNavigate();
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
              <h4 style={{"textAlign":"left"}} >Patient Data</h4>
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
                    </label>{"  "}
                    &nbsp;
                    <label className="radio-inline">
                      <input type="radio" name="gender" value="transgender" onChange={(e)=> setFormfields({...formfields, gender : e.target.value})}/> Transgender 
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
                  <button style={{ color: "white" }} className="btn btn-outline-dark mt-4 mb-2 m-3" > Submit </button>
                </div>
              </form>
              <div className="column right"></div>
          </div>
          </div>
      ) : (
        <div className="modalBackground">
          <div className="modalContainer">
            <div className="regis-success">
            <div className="title">
              <h4 className="text-center">Registeration Successfull!&nbsp;</h4>
              <p className="btn btn-outline-danger"
                 onClick={() => navigate('/home')}> 
                 X 
              </p>
            </div>
             <div className="box">
                <p className="border border-secondary rounded p-2 mb-1">
                  Your Public key : <small>MIIBCgKCAQEA+xGZ/wcz9ugFpP07Nspo6U17l0YhFiFpxxU4pTk3Lifz9R3zsIsuERwta7+fWIfxOo208ett/jhskiVodSEt3QBGh4XBipyWopKwZ93HHaDVZAALi/2A+xTBtWdEo7XGUujKDvC2/aZKukfjpOiUI8AhLAfjmlcD/UZ1QPh0mHsglRNCmpCwmwSXA9VNmhz+PiB+Dml4WWnKW/VHo2ujTXxq7+efMU4H2fny3Se3KYOsFPFGZ1TNQSYlFuShWrHPtiLmUdPoP6CV2mML1tk+l7DIIqXrQhLUKDACeM5roMx0kLhUWB8P+0uj1CNlNN4JRZlC7xFfqiMbFRU9Z4N6YwIDAQAB</small>
                </p>
                <p className="border border-secondary rounded p-2 mb-1">
                  Your Private key : <small>MIIBCgKCAQEA+xGZ/wcz9ugFpP07Nspo6U17l0YhFiFpxxU4pTk3Lifz9R3zsIsuERwta7+fWIfxOo208ett/jhskiVodSEt3QBGh4XBipyWopKwZ93HHaDVZAALi/2A+xTBtWdEo7XGUujKDvC2/aZKukfjpOiUI8AhLAfjmlcD/UZ1QPh0mHsglRNCmpCwmwSXA9VNmhz+PiB+Dml4WWnKW/VHo2ujTXxq7+efMU4H2fny3Se3KYOsFPFGZ1TNQSYlFuShWrHPtiLmUdPoP6CV2mML1tk+l7DIIqXrQhLUKDACeM5roMx0kLhUWB8P+0uj1CNlNN4JRZlC7xFfqiMbFRU9Z4N6YwIDAQAB</small>
                </p>
                <p className="border border-secondary rounded p-2 mb-1">
                  Your Nft ID : <small>MIIBCgKCAQEA+xGZ/+//2A+/aZKukfjpOiUI8AhLAfjmlcD/UZ1QPh0mHsglRNCmpCwmwSXA9VNmhz+PiB+Dml4WWnKW/VHo2ujTXxq7+efMU4H2fny3Se3KYOsFPFGZ1TNQSYlFuShWrHPtiLmUdPoP6CV2mML1tk+l7DIIqXrQhLUKDACeM5roMx0kLhUWB8P+0uj1CNlNN4JRZlC7xFfqiMbFRU9Z4N6YwIDAQAB</small>
                </p>
                <p className="btn btn-outline-dark m-1" 
                onClick={() => navigate('/access')}>
                  Proceed
              </p>
              </div>
              </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal1;
