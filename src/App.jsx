import './App.css'
import Search from './components/Search'
import Cards from './components/Cards';
import Detail from './components/Detail';
import { BrowserRouter, Routes, Route,useParams } from "react-router-dom";

function App() {

  return (
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Search/>}>  </Route>
    <Route path="/show/:show" element={<Detail/>} ></Route>
  </Routes>
  </BrowserRouter>

  )
}

export default App
