import './App.css';

import Header from './components/Header.component';
import Footer from './components/Footer.component';

import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';

import { Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={  <Home/>}/>
        <Route path='/about' element={  <About/>}/>
        <Route path='/contactus' element={  <Contact/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
