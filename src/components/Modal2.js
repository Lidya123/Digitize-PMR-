import React,{useState} from "react";
import { useNavigate } from "react-router-dom";
import "./Modal.css";

const Modal2 = ({handleSubmit, modal}) => {

  const navigate = useNavigate();
  const [formfields, setFormfields] = useState({
    'profile' : '',
    'fname': '',
    'dob' : '', 
    'gender': ''
  });

  return (
    <>
      {!modal ? (
        <div className="container-lg">
          <h4 style={{"textAlign":"left"}} >Doctor Data</h4>
          <div id="modal" className="row modal-box">
            <form className="column left" onSubmit={handleSubmit} enctype="multipart/form-data">
              <div className="m-4">
                <label>Profile Image : </label><br/>
                <input type="file" name="profile" value={formfields.profile} onChange={(e)=>setFormfields({...formfields, profile : e.target.value})}/>
              </div>

              <div className="row m-3">
                <div className="col">
                  <input type="text" className="form-control" name="fname" value={formfields.fname} onChange={(e)=>setFormfields({...formfields, fname : e.target.value})} placeholder="First name"/>
                </div>
                <div className="col">
                  <input type="text" className="form-control" name="mname" placeholder="Middle name" />
                </div>
                <div className="col">
                  <input type="text" className="form-control" name="lname" placeholder="Last name" />
                </div>
              </div>

              <div className="row m-3">
                <div className="col">
                  <label for="dob">Date of birth :</label>
                  <input type="date" className="form-control" name="dob" value={formfields.dob} onChange={(e)=>setFormfields({...formfields, dob : e.target.value})}/>
                </div>
                <div className="col">
                  <label for="inlineFormCustomSelectPref">Blood Group :</label>
                  <select className="custom-select" id="inlineFormCustomSelectPref" >
                    <option selected>Select</option>
                    <option value="1">A+</option>
                    <option value="2">B-</option>
                    <option value="3">B+</option>
                    <option value="4">B-</option>
                    <option value="5">O+</option>
                    <option value="6">O-</option>
                    <option value="7">AB+</option>
                    <option value="8">AB-</option>
                  </select>
                </div>

                <div>
                  <label className="mt-3" for="inputAddress2">
                    Address :
                  </label>
                  <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" />
                  <div className="row mt-3">
                    <div className="col">
                      <input type="text" className="form-control" id="inputCity" placeholder="City" />
                    </div>
                    <div className="col">
                      <input type="text" className="form-control" id="inputState" placeholder="State" />
                    </div>
                    <div className="col">
                      <input type="text" className="form-control" id="pincode" placeholder="Pin Code" />
                    </div>
                    <div className="col">
                      <input type="text" className="form-control" id="contactNo" placeholder="Contact No" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="row m-3">
                <div className="col">
                  <label className="mr-4" for="gender" value={formfields.gender} onChange={(e)=>setFormfields({...formfields, gender : e.target.value})}>
                    Gender?
                  </label>
                  <label className="radio-inline">{" "}
                    <input type="radio" value="female" name="gender" /> Female
                  </label>{" "}
                  &nbsp;
                  <label className="radio-inline">
                    <input type="radio" value="male" name="gender" /> Male
                  </label>{" "}
                  &nbsp;
                  <label className="radio-inline">
                    <input type="radio" value="transgender" name="gender" /> Transgender
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
                    <input type="radio" name="married" value="no" /> No
                  </label>
                </div>
                <div className="mt-3">
                  <input type="number" className="form-control" placeholder="Emergency contact number" />
                </div>

                <div className="row mt-3">
                  <div className="col">
                    <label>Registeration Date :</label>
                    <input type="date" className="form-control" id="date" />
                  </div>
                  <div className="col">
                    <label>Registeration Time :</label>
                    <input type="time" className="form-control" id="time" />
                  </div>
                </div>

                <div className="row mt-3">
                  <div className="col">
                    <input type="text" className="form-control" placeholder="Specialization" />
                  </div>
                  <div className="col">
                    <input type="text" className="form-control" placeholder="Degree" />
                  </div>
                  <div className="mt-3">
                    <input type="text" className="form-control" placeholder="Hospital Name" />
                  </div>
                </div>
                <button
                  style={{ color: "white" }}
                  className="btn btn-outline-dark mt-4 mb-2"
                >
                  Submit
                </button>
              </div>
            </form>
            <div className="column right"></div>
          </div>
        </div>
      ) : (
        <div className="modalBackground">
          <div className="modalContainer">
            <div className="title">
              <h4 className="text-center">Registeration Successfull!&nbsp;</h4>
              <p className="btn btn-outline-danger titleCloseBtn"
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
      )}
    </>
  );
};

export default Modal2;
