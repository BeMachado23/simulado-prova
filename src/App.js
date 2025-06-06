import './App.css';
import Home from './pages/Home'
import Produtos from './pages/Produtos'
import Cadastrar from './pages/Cadastrar'

import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Produtos" element={<Produtos />} />
        <Route path="/Cadastrar" element={<Cadastrar />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
