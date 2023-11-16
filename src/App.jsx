import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Listado } from "./pages/Listado";
import { Login } from "./pages/Login";
import { NotFound } from "./pages/NotFound";
import { AboutMe } from "./pages/Aboutme";


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element= { <Login  /> } />
          <Route path='/Home' element= { <Home /> } />
          <Route path='/Listado' element= { <Listado /> } />
          <Route path='/AboutMe' element= { <AboutMe /> } />
          <Route path='*' element={ <NotFound /> } />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
