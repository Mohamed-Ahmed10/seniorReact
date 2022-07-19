import './App.scss';
import BootstrapTraining from './components/bootstrapTraining';
import Data from './components/data';
import Nav from './components/nav';
import NewComp from './components/newComp';
import TestComponent from './components/testComponent';
import About from './views/about';
import 'bootstrap/dist/css/bootstrap.min.css';
import PropsTraining from './components/propsTraining';
import { Routes, Route } from "react-router-dom";
import source from "./images/logo.svg";
function App() {

  var myName = "Mohamed Ahmed";


  return (
    <div className="App">
      <Nav />

      <Routes>
        <Route path='/sessionOne' element= {<NewComp />}/>
        <Route path='/test' element= {<TestComponent />}/>
        <Route path='/data' element= {<Data />}/>
        <Route path='/bootstrap' element= { <BootstrapTraining />}/>
      </Routes>
      

      <img src={source} alt="grerfgre" />

      <PropsTraining title="title one" desc="This is desc one"/>
      <PropsTraining title="title two" desc="This is desc two"/>
    </div>
  );
}

export default App;
