import React from 'react';
import logo from './logo.svg';
import './App.css';
import MainView from './components/main-view/Main-View';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Home from './components/introduction/introduction';

function App() {
  return ( 
    <div className=' h-full' >
      <MainView />
    </div>
 
  )
}

export default App;
