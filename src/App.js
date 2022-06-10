import './App.css';
import Nav from './components/nav';
import TestComponent from './components/testComponent';
import About from './views/about';

function App() {

  var myName = "Mohamed Ahmed";



  return (
    <div className="App">
        <ul>
          <Nav />
        </ul>
        Hello react from {myName.toLowerCase()}
        <p>{Math.random()}</p>
        <hr />
        <About />
        <hr />
        <TestComponent />
    </div>
  );
}

export default App;
