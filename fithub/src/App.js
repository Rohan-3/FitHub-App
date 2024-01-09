import './App.css';
import Navbar from '../src/components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Contact from './pages/Contact';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
    <Navbar/>
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/Contact' element={<Contact/>}/>
    </Routes>
    </div>
  );
}

export default App;
