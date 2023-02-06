import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import "./writeData.css";

const WriteData =() => {

    const navigate = useNavigate();
    const [writeDataFields, setWriteDataFields] = useState(
        {
         "date":"",
         "age":"",
         "gender":"", 
         "disease":"", 
         "status":"", 
         "diagnosis":"", 
         "prescription":""
        });

    const promptMsg = () => {
        if (window.confirm('Are you sure to update?'))
        {
            const open_doc = true;
            navigate('/fetchData', {state : { open_doc : open_doc }});
        }
    }

    return (
    <div className='container-lg'>      
        <div className="form-body">
        <div className="row">
            <div className="form-holder">
                <div className="form-content">
                    <div className="form-items">
                        <h3>Prescription</h3>
                        <p>Fill in the data below.</p>
                        <form className="requires-validation" novalidate onSubmit={promptMsg}>

                            <div className="col-md-12">
                               <input className="form-control" type="date" name="data" placeholder="Currrent date" value={writeDataFields.date} required onChange={(e)=>{setWriteDataFields({...writeDataFields, date : e.target.value })}} />
                                <div className="valid-feedback">Date</div>
                               <div className="invalid-feedback">Date field cannot be blank!</div>
                               {/* {writeDataFields.date} */}
                            </div> 

                            <div className="col-md-12 mt-3">
                               <input className="form-control" type="number" name="age" placeholder="Age" value={writeDataFields.age} required onChange={(e)=>{setWriteDataFields({...writeDataFields, age : e.target.value })}} />
                                <div className="valid-feedback">Age</div>
                               <div className="invalid-feedback">Age field cannot be blank!</div>
                               {/* {writeDataFields.age} */}
                            </div> 
                            <div className="col-md-12 mt-3">
                            <label className="mb-3 mr-1" for="gender">Gender: </label>
                            {/* {writeDataFields.gender} */}
                            <input type="radio" className="btn-check" name="gender" id="male" value="male" autocomplete="off" required onChange={(e)=>{setWriteDataFields({...writeDataFields, gender : e.target.value})}}/>
                            <label className="btn btn-sm btn-outline-secondary" for="male">Male</label>

                            <input type="radio" className="btn-check" name="gender" id="female" value="female" autocomplete="off" required onChange={(e)=>{setWriteDataFields({...writeDataFields, gender : e.target.value})}}/>
                            <label className="btn btn-sm btn-outline-secondary" for="female">Female</label>

                            <input type="radio" className="btn-check" name="gender" id="transgender" value="transgender" autocomplete="off" required onChange={(e)=>{setWriteDataFields({...writeDataFields, gender : e.target.value})}}/>
                            <label className="btn btn-sm btn-outline-secondary" for="transgender">Transgender</label>
                               <div className="valid-feedback mv-up">You selected a gender!</div>
                                <div className="invalid-feedback mv-up">Please select a gender!</div>
                            </div>
                              
                            <div className="col-md-12">
                                <input className="form-control" type="text" name="disease" value={writeDataFields.disease} placeholder="Enter disease" required onChange={(e)=>{setWriteDataFields({...writeDataFields, disease : e.target.value})}}/>
                                 <div className="invalid-feedback">field cannot be blank!</div>
                                 {/* {writeDataFields.disease} */}
                            </div>

                            <div className="col-md-12 mt-3">
                            <label className="mb-3 mr-1" for="status">Curable: </label>
                            {/* {writeDataFields.status} */}
                            <input type="radio" className="btn-check" name="status" value="curable" id="yes" autocomplete="off" required onChange={(e)=>{setWriteDataFields({...writeDataFields, status : e.target.value})}}/>
                            <label className="btn btn-sm btn-outline-secondary" for="yes">Yes</label>

                            <input type="radio" className="btn-check" name="status" value="non-curable" id="no" autocomplete="off" required onChange={(e)=>{setWriteDataFields({...writeDataFields, status : e.target.value})}}/>
                            <label className="btn btn-sm btn-outline-secondary" for="no">No</label>
                            </div>

                           <div className="col-md-12">
                              <input className="form-control" type="text" name="disgnosis" value={writeDataFields.diagnosis} placeholder="Diagnosis (if required)" onChange={(e)=>{setWriteDataFields({...writeDataFields, diagnosis : e.target.value})}}/>
                              <small className='fw-light'>[ enter ',' data with a '|' ]</small>
                              {/* {writeDataFields.diagnosis} */}
                           </div>    

                            <div className="col-md-12">
                              <input className="form-control" type="text" name="prescription" value={writeDataFields.prescription} placeholder="Prescription" required onChange={(e)=>{setWriteDataFields({...writeDataFields, prescription : e.target.value})}}/>
                              <small className='fw-light'>[ enter ',' data with a '|' ]</small> 
                              {/* {writeDataFields.prescription} */}
                            </div>    
                            <br/>
                            <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="invalidCheck" required />
                            <label className="form-check-label">I confirm that all data are correct</label>
                            <div className="invalid-feedback">Please confirm that the entered data are all correct!</div>
                            </div>
                  

                            <div className="form-button mt-3">
                                <button id="submit" type="submit" className="btn btn-outline-dark">Register</button>
                            </div>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
    );
}

export default WriteData;