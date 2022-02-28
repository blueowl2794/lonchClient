import { Routes, Switch, Route } from 'react-router-dom';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Landing from './components/Landing';
import Menu from './components/Menu';
import Steps from './components/Steps';
import './App.css';
import DetailMenu from './components/DetailMenu';


function App() {
  return (
    <div className="App">
      <Landing/>
      <Steps/>
      <Menu/>
      <Contact/>
      <Footer/>
      <Switch>
      <Route path="/" element={ <Landing/>} />

      </Switch>

      {/* // <Routes> */}
      {/* <Route path="/" element={ <Landing/>} /> */}
      {/* <Route path="/" element={ <Steps/>  } />
      <Route path="/" element={ <Menu/> } />
      <Route path="/" element={ <Contact/>} />
      <Route path="/" element={ <Footer/> } /> */}
        {/* <Route path="/" element={<> <Landing/> <Steps/> <Menu/> <Contact/> <Footer/> </>} /> */}
      {/* //   <Route path="/products/:id" element={<DetailMenu/>} /> */}
      {/* // </Routes> */}
    </div>
  );
}

export default App;
