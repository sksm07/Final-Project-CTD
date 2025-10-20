import About  from './pages/About';
import ErrorPage from './pages/ErrorPage';
import FlowerListPage from './pages/FlowerListPage'
import Header from './shared/Header';
import Feedback from './pages/Feedback';
import {Routes, Route} from "react-router";
import styled from "styled-components";

import './App.css'

const AppContainer = styled.div`
   text-align: center;
   font-family:  sans-serif;
   color: #333;
   margin: auto 20px;
`

function App() {
  return (
    <AppContainer>
      <Header />      
      <Routes>
        <Route path="/" element={<FlowerListPage />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/feedback" element={<Feedback />}></Route>
        <Route path="*" element={<ErrorPage />}></Route>
      </Routes> 
    </AppContainer>
  )
}

export default App
