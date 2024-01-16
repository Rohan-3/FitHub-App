import './App.css';
import Navbar from '../src/components/Navbar'
import PrivateToutes from './routes/PrivateToutes';
import WhatsApp from './components/WhatsApp';

function App() {
  return (
    <div className="App">
    <Navbar/>
    <PrivateToutes/>
    
    </div>
  );
}

export default App;
