
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import {Button} from 'reactstrap';
import Base from './Components/Base';
import About from './Pages/About';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './Pages/Home';
import Login from './Pages/Login';
import SignUp from './Pages/SignUp';
import BookSlot from './Pages/BookSlot';
import ViewLocation from './Pages/ViewLocation';
import BookingDetails from './Pages/BookingDetails';
import Contact from './Pages/Contact';

function App() {
  return (

   
    
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/Login" element={ <Login/>}/>
          <Route path="/SignUp" element={<SignUp/>}/>
          <Route path="/BookSlot" element={<BookSlot/>}/>
          <Route path="/ViewLocation" element={<ViewLocation/>}/>
          <Route path="/BookingDetails" element={<BookingDetails/>}/>
          <Route path="/Contact" element={<Contact/>}/>
        </Routes>
    </BrowserRouter>
    

  
    
  );
}

export default App;
