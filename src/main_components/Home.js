import React from 'react';
import Modal1 from '../components/Modal1.js';
import Modal2 from '../components/Modal2.js';
import Modal3 from '../components/Modal3.js';
import { useState } from 'react';

const Home = () => {

    const [modal1, setModal1] = useState(false);
    const [modal2, setModal2] = useState(false);
    const [modal3, setModal3] = useState(false);
    // function display () {
    //     console.log("Done");
    // };

    return (
        <div className="">
            <div className="text-center">
            <h3 className="mt-1">Registeration</h3>
            <p className="btn btn-outline-secondary m-3" onClick={() => {setModal1(true); setModal2(false); setModal3(false)}}>Patient</p>
            <p className="btn btn-outline-secondary m-3" onClick={() => {setModal2(true); setModal1(false); setModal3(false)}}>Doctor</p>
            <p className="btn btn-outline-secondary m-3" onClick={() => {setModal3(true); setModal1(false); setModal2(false)}}>Researcher</p>
        </div>

            {modal1 && <Modal1 />}

            {modal2 && <Modal2 />}

            {modal3 && <Modal3 />}
            
        </div>
    );
}

export default Home;