import React from 'react'
import { useNavigate } from 'react-router-dom'

const Verification = ({open_pat, open_doc, open_res}) => {

    const navigate = useNavigate();
    
    const navigateToFetchData =()=>{
        if (open_doc == true){
        navigate("/fetchData", {state : {open_doc : open_doc} });
        }else{
        open_doc = false;
        navigate("/fetchData", {state : {open_doc : open_doc} });
        }
    }

  return (
    <>
    <form onSubmit={navigateToFetchData}>
       {open_pat && 
       <div className='container-lg mt-5'>
        <div className="form-group">
            <input type="text" className="form-control" placeholder="Enter Patient's Nft ID" />
        </div>
        <div className="form-group">
            <input type="text" className="form-control" placeholder="Enter Patient's Private Key" />
        </div>
        <button type="submit" className="btn btn-dark">Submit</button>
       </div> }

       {open_doc && 
       <div className='container-lg mt-5'>
        <div className="form-group">
            <input type="text" className="form-control" placeholder="Enter Patient's Nft ID" />
        </div>
        <div className="form-group">
            <input type="text" className="form-control" placeholder="Enter Doctor's Nft ID" />
        </div>
        <div className="form-group">
            <input type="text" className="form-control" placeholder="Enter Patient's Private Key" />
        </div>
        <button type="submit" className="btn btn-dark">Submit</button>
       </div> }

       {open_res && 
       <div className='container-lg mt-5'>
        <div className="form-group">
            <input type="text" className="form-control" placeholder="Enter Patient's Nft ID" />
        </div>
        <div className="form-group">
            <input type="text" className="form-control" placeholder="Enter Researcher's Nft ID" />
        </div>
        <div className="form-group">
            <input type="text" className="form-control" placeholder="Enter Patient's Private Key" />
        </div>
        <button type="submit" className="btn btn-dark">Submit</button>
       </div> }
       </form>
    </>
  )
}

export default Verification