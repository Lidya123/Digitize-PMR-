import React from 'react';
import Modal1 from '../components/Modal1.js';
import Modal2 from '../components/Modal2.js';
import Modal3 from '../components/Modal3.js';
import { useState } from 'react';

const Home = () => {

    const [modal, setModal] = useState(false);
    const [modal1, setModal1] = useState(false);
    const [modal2, setModal2] = useState(false);
    const [modal3, setModal3] = useState(false);
    // function display () {
    //     console.log("Done");
    // };

    const handleSubmit = (e) =>{
        e.preventDefault();
        const profileImage = e.target.profile.value;
        const firstName = e.target.fname.value;
        const dateOfBirth = e.target.dob.value;
        const gender = e.target.gender.value;
        console.log("Profile Image: "+profileImage,"\nFirst Name: "+firstName, "\nDOB: "+dateOfBirth, "\nGender: "+gender);
        setModal(true);
    }


    return (
        <div className="">
            <div className="text-center">
            <h3 className="mt-1 threeD trans">Registeration</h3>
            <p className="btn btn-outline-dark m-3" onClick={() => {setModal1(true); setModal2(false); setModal3(false)}}>Patient</p>
            <p className="btn btn-outline-dark m-3" onClick={() => {setModal2(true); setModal1(false); setModal3(false)}}>Doctor</p>
            <p className="btn btn-outline-dark m-3" onClick={() => {setModal3(true); setModal1(false); setModal2(false)}}>Researcher</p>
        </div>

            {modal1 && <Modal1 handleSubmit={handleSubmit} modal={modal} setModal={setModal}/>}

            {modal2 && <Modal2 handleSubmit={handleSubmit} modal={modal} setModal={setModal}/>}

            {modal3 && <Modal3 handleSubmit={handleSubmit} modal={modal} setModal={setModal}/>}
            
        </div>
    );
}

export default Home;