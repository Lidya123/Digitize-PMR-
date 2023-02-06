import React, {useState} from 'react'
import Verification from './Verification';

const Access = () => {

    const [open_pat, setOpen_pat] = useState(false);
    const [open_doc, setOpen_doc] = useState(false);
    const [open_res, setOpen_res] = useState(false);

  return (
    <div className="">
        <div className="text-center">
            <h3 className="mt-3 text-center">Access</h3>
            <p className="btn btn-outline-dark m-3" onClick={()=> {setOpen_pat(true); setOpen_doc(false); setOpen_res(false)}}>Patient</p>
            <p className="btn btn-outline-dark m-3" onClick={()=> {setOpen_pat(false); setOpen_doc(true); setOpen_res(false)}}>Doctor</p>
            <p className="btn btn-outline-dark m-3" onClick={()=> {setOpen_pat(false); setOpen_doc(false); setOpen_res(true)}}>Researcher</p>
        </div>
        <div>
            {open_pat && <Verification open_pat={open_pat} />}
            {open_doc && <Verification open_doc={open_doc} />}
            {open_res && <Verification open_res={open_res} />}
        </div>  
        </div>
  )
}

export default Access