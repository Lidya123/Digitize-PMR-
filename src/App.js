import Header from "./main_components/Header.js";
import Home from "./main_components/Home.js";
import FetchData from './components/FetchData';
import WriteData from "./components/WriteData.js";
import './App.css';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Pop from "./components/Pop.js";

function App() {

  return (
   <BrowserRouter>
   <Header />
    <Routes>
    <Route path = '/' exact element = {<Home />} />
      <Route path = '/home' exact element = {<Home />} />
      <Route path = '/pop' element = {<Pop />} />
      {/* <Route path = '/doctorView' element = {<DoctorView /> } />  */}
      <Route path = '/fetchData' element = {<FetchData />} />
      <Route path = '/writeData' element = {<WriteData />} />
    </Routes>
   </BrowserRouter>
  );
}

export default App;