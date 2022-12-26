import "./App.scss";
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Main from './components/main'
import Details from './components/details';
import { useState } from "react";


// const url = "https://restcountries.com/v2/all"


function App() {
  const [darkMode, setDarkMode] = useState(false)

  return (
    <div >
 <Routes>
      <Route path="/" element ={<Main/>}/>
      <Route path="/details/:name" element ={<Details/>}/>
   </Routes>
    </div>
  )
}

export default App
