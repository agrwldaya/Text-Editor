import logo from './logo.svg';
import './App.css';

import Nevbar from './components.js/Nevbar';
import TextBox from './components.js/TextBox';
import About from './components.js/About';
import React, {useState} from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
 



function App() {
  const[mode,setMode] = useState('dark');

  return (
    <>
  <Router>
  <Nevbar txtu="Textutils" mode={mode} ></Nevbar>
  <div className='container'>
  <Routes>
          <Route path="/about" element={  <About />}>    </Route>
 
          <Route path="/" element={ <TextBox> </TextBox>  }>    </Route>
        </Routes>
  </div>
  </Router>
   
 
  </>
  );
}

export default App;
