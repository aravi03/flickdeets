import logo from './logo.svg';
import './App.css';
import Recomm from './components/recomm';
import Navbar from './components/navbar';
function App() {
  return (
    <div className="App">
      <Navbar/>
      
      <br></br><br></br><br></br><br></br>
      <div className='row'>
      <Recomm/>
      </div>
    </div>
  );
}

export default App;
