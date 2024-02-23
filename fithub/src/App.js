import './App.css';
import Navbar from '../src/components/Navbar'
import PrivateToutes from './routes/PrivateToutes';
import WhatsApp from './components/WhatsApp';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
    <Navbar/>
    <PrivateToutes/>
    {/* <Footer/> */}
    
    </div>
  );
}

export default App;
