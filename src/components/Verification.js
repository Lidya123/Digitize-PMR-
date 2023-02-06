import React from 'react'
import { useNavigate } from 'react-router-dom'

const Verification = ({open_pat, open_doc, open_res}) => {

    const navigate = useNavigate();
    const navigateToFetchData =()=>{
        navigate("/fetchData");
    }

  return (
    <>
    <form onSubmit={navigateToFetchData}>
       {open_pat && 
       <div className='container-lg mt-5'>
        {/* <form> */}
        <div class="form-group">
            <input type="text" class="form-control" placeholder="Enter Patient's Nft ID" />
        </div>
        <div class="form-group">
            <input type="text" class="form-control" placeholder="Enter Patient's Private Key" />
        </div>
        <button type="submit" class="btn btn-dark">Submit</button>
        {/* </form> */}
       </div> }

       {open_doc && 
       <div className='container-lg mt-5'>
        {/* <form> */}
        <div class="form-group">
            <input type="text" class="form-control" placeholder="Enter Patient's Nft ID" />
        </div>
        <div class="form-group">
            <input type="text" class="form-control" placeholder="Enter Doctor's Nft ID" />
        </div>
        <div class="form-group">
            <input type="text" class="form-control" placeholder="Enter Patient's Private Key" />
        </div>
        <button type="submit" class="btn btn-dark">Submit</button>
        {/* </form> */}
       </div> }

       {open_res && 
       <div className='container-lg mt-5'>
        {/* <form> */}
        <div class="form-group">
            <input type="text" class="form-control" placeholder="Enter Patient's Nft ID" />
        </div>
        <div class="form-group">
            <input type="text" class="form-control" placeholder="Enter Researcher's Nft ID" />
        </div>
        <div class="form-group">
            <input type="text" class="form-control" placeholder="Enter Patient's Private Key" />
        </div>
        <button type="submit" class="btn btn-dark">Submit</button>
        {/* </form> */}
       </div> }
       </form>
    </>
  )
}

export default Verification