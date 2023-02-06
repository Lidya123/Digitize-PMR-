import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import "./writeData.css";

const WriteData =() => {

    const navigate = useNavigate();
    const [writeDataFields, setWriteDataFields] = useState(
        {
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
            navigate('/fetchData');
        }
    }

    return (
    <div className='container-lg'>      
        <div class="form-body">
        <div class="row">
            <div class="form-holder">
                <div class="form-content">
                    <div class="form-items">
                        <h3>Prescription</h3>
                        <p>Fill in the data below.</p>
                        <form class="requires-validation" novalidate onSubmit={promptMsg}>

                            <div class="col-md-12">
                               <input class="form-control" type="number" name="age" placeholder="Age" value={writeDataFields.age} required onChange={(e)=>{setWriteDataFields({...writeDataFields, age : e.target.value })}} />
                                <div class="valid-feedback">Age</div>
                               <div class="invalid-feedback">Username field cannot be blank!</div>
                               {/* {writeDataFields.age} */}
                            </div> 
                            <div class="col-md-12 mt-3">
                            <label class="mb-3 mr-1" for="gender">Gender: </label>
                            {/* {writeDataFields.gender} */}
                            <input type="radio" class="btn-check" name="gender" id="male" value="male" autocomplete="off" required onChange={(e)=>{setWriteDataFields({...writeDataFields, gender : e.target.value})}}/>
                            <label class="btn btn-sm btn-outline-secondary" for="male">Male</label>

                            <input type="radio" class="btn-check" name="gender" id="female" value="female" autocomplete="off" required onChange={(e)=>{setWriteDataFields({...writeDataFields, gender : e.target.value})}}/>
                            <label class="btn btn-sm btn-outline-secondary" for="female">Female</label>

                            <input type="radio" class="btn-check" name="gender" id="transgender" value="transgender" autocomplete="off" required onChange={(e)=>{setWriteDataFields({...writeDataFields, gender : e.target.value})}}/>
                            <label class="btn btn-sm btn-outline-secondary" for="transgender">Transgender</label>
                               <div class="valid-feedback mv-up">You selected a gender!</div>
                                <div class="invalid-feedback mv-up">Please select a gender!</div>
                            </div>
                              
                            <div class="col-md-12">
                                <input class="form-control" type="text" name="disease" value={writeDataFields.disease} placeholder="Enter disease" required onChange={(e)=>{setWriteDataFields({...writeDataFields, disease : e.target.value})}}/>
                                 <div class="invalid-feedback">field cannot be blank!</div>
                                 {/* {writeDataFields.disease} */}
                            </div>

                            <div class="col-md-12 mt-3">
                            <label class="mb-3 mr-1" for="status">Curable: </label>
                            {/* {writeDataFields.status} */}
                            <input type="radio" class="btn-check" name="status" value="curable" id="yes" autocomplete="off" required onChange={(e)=>{setWriteDataFields({...writeDataFields, status : e.target.value})}}/>
                            <label class="btn btn-sm btn-outline-secondary" for="yes">Yes</label>

                            <input type="radio" class="btn-check" name="status" value="non-curable" id="no" autocomplete="off" required onChange={(e)=>{setWriteDataFields({...writeDataFields, status : e.target.value})}}/>
                            <label class="btn btn-sm btn-outline-secondary" for="no">No</label>
                            </div>

                           <div class="col-md-12">
                              <input class="form-control" type="text" name="disgnosis" value={writeDataFields.diagnosis} placeholder="Diagnosis" required onChange={(e)=>{setWriteDataFields({...writeDataFields, diagnosis : e.target.value})}}/>
                              <small className='fw-light'>[ enter ',' data with a '|' ]</small>
                              {/* {writeDataFields.diagnosis} */}
                           </div>    

                            <div class="col-md-12">
                              <input class="form-control" type="text" name="prescription" value={writeDataFields.prescription} placeholder="Prescription" required onChange={(e)=>{setWriteDataFields({...writeDataFields, prescription : e.target.value})}}/>
                              <small className='fw-light'>[ enter ',' data with a '|' ]</small> 
                              {/* {writeDataFields.prescription} */}
                            </div>    
                            <br/>
                            <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="invalidCheck" required />
                            <label class="form-check-label">I confirm that all data are correct</label>
                            <div class="invalid-feedback">Please confirm that the entered data are all correct!</div>
                            </div>
                  

                            <div class="form-button mt-3">
                                <button id="submit" type="submit" class="btn btn-outline-dark">Register</button>
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