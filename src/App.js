import Header from "./main_components/Header.js";
import Home from "./main_components/Home.js";
<<<<<<< HEAD
import ViewRecord from "./components/ViewRecord.js";
import Prescript from './components/Prescript.js';
=======
>>>>>>> 470f629 (change 1)
import FetchData from './components/FetchData';
import WriteData from "./components/WriteData.js";
import './App.css';
import { BrowserRouter, Routes, Route} from "react-router-dom";
<<<<<<< HEAD
=======
import Pop from "./components/Pop.js";
>>>>>>> 470f629 (change 1)

function App() {

  return (
   <BrowserRouter>
   <Header />
    <Routes>
<<<<<<< HEAD
      <Route path = '/' exact element = {<Home />} />
      <Route path = '/viewRecord' element = {<ViewRecord />} />
      <Route path = '/prescript' element = {<Prescript /> } />
=======
    <Route path = '/' exact element = {<Home />} />
      <Route path = '/home' exact element = {<Home />} />
      <Route path = '/pop' element = {<Pop />} />
      {/* <Route path = '/doctorView' element = {<DoctorView /> } />  */}
>>>>>>> 470f629 (change 1)
      <Route path = '/fetchData' element = {<FetchData />} />
      <Route path = '/writeData' element = {<WriteData />} />
    </Routes>
   </BrowserRouter>
  );
}

<<<<<<< HEAD
export default App;
=======
export default App;
>>>>>>> 470f629 (change 1)
