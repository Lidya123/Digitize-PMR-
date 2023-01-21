import Header from "./main_components/Header.js";
import Home from "./main_components/Home.js";
import ViewRecord from "./components/ViewRecord.js";
import Prescript from './components/Prescript.js';
import FetchData from './components/FetchData';
import WriteData from "./components/WriteData.js";
import './App.css';
import { BrowserRouter, Routes, Route} from "react-router-dom";

function App() {

  return (
   <BrowserRouter>
   <Header />
    <Routes>
      <Route path = '/' exact element = {<Home />} />
      <Route path = '/viewRecord' element = {<ViewRecord />} />
      <Route path = '/prescript' element = {<Prescript /> } />
      <Route path = '/fetchData' element = {<FetchData />} />
      <Route path = '/writeData' element = {<WriteData />} />
    </Routes>
   </BrowserRouter>
  );
}

export default App;
