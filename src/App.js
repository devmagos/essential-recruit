import './App.css';
import Navbar from './components/Navbar.js';
// import Setupaccttl from './components/Setupaccttl/Setupaccttl';
import Home from './components/Home/Home.js'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
      <Home />
      {/* <Setupaccttl /> */}
      </header>
    </div>
  );
}

export default App;
