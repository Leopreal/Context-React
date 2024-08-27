

import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import Produtos from './pages/Produtos';
import NavBar from './components/NavBar';
import Sobre from './pages/Sobre';


function App() {
  return (
    <div className="App">
      <h1>Context</h1>
      <BrowserRouter>
      <NavBar />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/products' element={<Produtos />}/>
          <Route path='/sobre' element={<Sobre />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
