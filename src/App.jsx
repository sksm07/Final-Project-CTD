import About  from './pages/About';
import ErrorPage from './pages/ErrorPage';
import FlowerListPage from './pages/FlowerListPage'
import Header from './shared/Header';
import Favorite from './pages/Favorite';
import {Routes, Route} from "react-router";

import './App.css'

function App() {
  return (
    <div>
      <h1>Heading</h1>
      <Header />      
      <Routes>
        <Route path="/" element={<FlowerListPage />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/favorite" element={<Favorite />}></Route>
        <Route path="*" element={<ErrorPage />}></Route>
      </Routes> 
    </div>
  )
}

export default App
