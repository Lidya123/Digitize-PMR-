import React from "react";
import "./Modal.css";

const Modal2 = ({ handleSubmit, modal, setModal }) => {
  return (
    <>
      {!modal ? (
        <div className="container-lg">
          <p className="threeD">Doctor Data</p>
          <div id="modal" className="row modal-box">
            <form className="column left" onSubmit={handleSubmit}>
              <div className="custom-file m-4">
                <input type="file" className="custom-file-input" name="profile"/>
                <label className="custom-file-label mr-5" for="customFile">
                  Choose profile image
                </label>
              </div>

              <div className="row m-3">
                <div className="col">
                  <input type="text" className="form-control" name="fname" placeholder="First name"/>
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
                  <input type="date" className="form-control" name="dob" />
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
                  <label className="mr-4" for="gender">
                    Gender?
                  </label>
                  <label className="radio-inline">{" "}
                    <input type="radio" value="female" name="gender" /> Female
                  </label>{" "}
                  &nbsp;
                  <label className="radio-inline">
                    <input type="radio" value="male" name="gender" /> Male
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
              <div className="text-right mr-1">
                <button className="btn btn-outline-danger" onClick={() => { setModal(false); }}> X </button>
              </div>
              <div className="title">
                <h3>Registeration Successfull!</h3>
              </div>
              <div className="body">
                <p>
                  Your Public key : public_key <br />
                  Your Private key : private_key <br />
                  Your nft ID : doc_nft_id
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal2;
