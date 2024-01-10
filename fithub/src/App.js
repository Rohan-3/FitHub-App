import './App.css';
import Navbar from '../src/components/Navbar'
import PrivateToutes from './routes/PrivateToutes';

function App() {
  return (
    <div className="App">
    <Navbar/>
    <PrivateToutes/>
    </div>
  );
}

export default App;
