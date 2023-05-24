import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import List from "./pages/List";
import Candidat from "./pages/Candidat";


function App() {
  return (
   <Routes>
    <Route path="/"  element={<Home/>} />
    <Route path="/candidat"  element ={<List />} />
    <Route path = "/candidat/:id" element = {<Candidat />} />
   </Routes>
  );
}

export default App;
