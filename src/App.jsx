import './App.css';
import { Route, Routes } from 'react-router-dom';
import Listado from './components/Listado';
import Header from './components/Header';
import Footer from './components/Footer';
import { Login } from './components/Login';

function App() {
  return (
    <div>
      <Header />
      <div className="content-container">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/listado" element={<Listado />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
