import React, {useState} from 'react'
import Modal1 from './Modal1';
import Modal2 from './Modal2';
import Modal3 from './Modal3';

const Main = () => {

    const [modal, setModal] = useState(false);
    const [modal1, setModal1] = useState(false);
    const [modal2, setModal2] = useState(false);
    const [modal3, setModal3] = useState(false);

    const handleSubmit=() =>{
        setModal(!modal);
      }
    
  return (
        <div className="">
            <div className="text-center">
            <h3 className="mt-3 text-center">Registeration</h3>
            <p className="btn btn-outline-dark m-3" onClick={() => {setModal1(true); setModal2(false); setModal3(false)}}>Patient</p>
            <p className="btn btn-outline-dark m-3" onClick={() => {setModal2(true); setModal1(false); setModal3(false)}}>Doctor</p>
            <p className="btn btn-outline-dark m-3" onClick={() => {setModal3(true); setModal1(false); setModal2(false)}}>Researcher</p>
        </div>

            {modal1 && <Modal1 handleSubmit={handleSubmit} modal={modal}/>}

            {modal2 && <Modal2 handleSubmit={handleSubmit} modal={modal}/>}

            {modal3 && <Modal3 handleSubmit={handleSubmit} modal={modal}/>}
            
        </div>
  )
}

export default Main