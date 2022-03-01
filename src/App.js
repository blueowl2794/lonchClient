import { Routes, Route } from 'react-router-dom';
// import { Route, Switch } from 'react-router';
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
      {/* <Steps/>
      <Menu/>
      <Contact/>
      <Footer/> */} 

      <Routes>
        <Route path="/" element={ <Landing/>} />
        <Route path="/" element={ <Steps/>  } />
        <Route path="/" element={ <Menu/> } />
        <Route path="/" element={ <Contact/>} />
        <Route path="/" element={ <Footer/> } />
        <Route path="/" element={<> <Landing/> <Steps/> <Menu/> <Contact/> <Footer/> </>} />
        <Route path="/products/:id" element={<DetailMenu/>} />
      </Routes>
    </div>
  );
}

export default App;
