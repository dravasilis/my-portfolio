import React from 'react';
import logo from './logo.svg';
import './App.css';
import MainView from './components/main-view/Main-View';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Home from './components/home/home';

function App() {
  return ( 
    <BrowserRouter>
    <div className=' h-full'>
      <Routes>
        <Route path='/'  element={<MainView/>}/>  
      </Routes>
    <MainView />
    </div>
    </BrowserRouter>
 
  )
}

export default App;
