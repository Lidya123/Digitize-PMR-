import Header from "./main_components/Header.js";
import Home from "./main_components/Home.js";
import Register from './components/Register.js';
import Access from './components/Access.js';
import FetchData from './components/FetchData';
import WriteData from "./components/WriteData.js";
import './App.css';
import { BrowserRouter, Routes, Route} from "react-router-dom";

function App() {

  return (
    <div className="">
   <BrowserRouter>
   <Header />
    <Routes>
    <Route path = '/' exact element = {<Home />} />
      <Route path = '/home' exact element = {<Home />} />
      <Route path="/register" excat element = {<Register />} />
      <Route path="/access" exact element = {<Access />} />
      <Route path = '/fetchData' element = {<FetchData />} />
      <Route path = '/writeData' element = {<WriteData />} />
    </Routes>
   </BrowserRouter>
   </div>
  );
}

export default App;