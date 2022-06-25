import './App.css';
import BootstrapTraining from './components/bootstrapTraining';
import Data from './components/data';
import Nav from './components/nav';
import NewComp from './components/newComp';
import TestComponent from './components/testComponent';
import About from './views/about';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  var myName = "Mohamed Ahmed";


  return (
    <div className="App">
      Hello react in senior steps
      {/* <NewComp />
      <hr />
      <TestComponent />
      <hr />
      <Data /> */}
      <BootstrapTraining />
    </div>
  );
}

export default App;
