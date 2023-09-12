
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
// import Footer from './component/Footer';
import Main from './component/Main';
import Nav from './component/Nav';
import About from './pages/About';
import Login from './pages/Login';
import Home from './pages/Home';
import Menu from './pages/Menu';
import OrderOnline from './pages/OrderOnline';
import Reservations from './pages/Reservations';
import ReservationConfirmed from './component/ReservationConfirmed';
import Footer from './component/Footer';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav/>
      <Routes>

      <Route path='/' element={ <Home/> } />
      <Route path='/about' element= { <About/> } />
      <Route path='/menu' element={ <Menu/> } />
      <Route path='/login' element={<Login/>} />
      <Route path='/orderOnline' element = { <OrderOnline/> } />
      <Route path='/reservations' element ={ <Reservations/> } />
      <Route path='/reservationConfirmed' element ={<ReservationConfirmed/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
