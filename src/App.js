/*import './App.css';
import logo from './logo.svg';
import Hero from './pages/home/hero';
import Login from './pages/login/Login';
import './pages/home/hero.css'
import  { BrowserRouter,Routes,Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Hero />} />
      <Route path='/login' element={<Login />} />
    </Routes>
    </BrowserRouter>
      <Hero/>
    
  );
}*/

import Hero from './pages/hero'
import './App.css';
import Login from './pages/login/Login';
import { BrowserRouter,Routes,Route} from 'react-router-dom';
import Dashboard from'./pages/dashboard/Dashboard';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Hero/>} />
      <Route path='/login' element ={<Login/>} />
      <Route path='/dashboard' element={<Dashboard />} />
    </Routes>
    
    
    </BrowserRouter>
    
    
  );
}

export default App;