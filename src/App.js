import { Routes, Route } from 'react-router-dom';
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
      <Routes>
        <Route path="/" element={<> <Landing/> <Steps/> <Menu/> <Contact/> <Footer/> </>} />
        <Route path="/products/:id" element={<DetailMenu/>} />
        {/* <Landing/>
        <Steps/>
        <Menu/>
        <Contact/>
        <Footer/> */}
      </Routes>
      
    </div>
  );
}

export default App;
