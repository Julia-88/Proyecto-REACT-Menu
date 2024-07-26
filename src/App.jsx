import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from './pages/Index';
import Platos from './pages/Platos';
import Menu from './pages/Menu';
import Detail from './pages/Detail';
import Login from './pages/Login';
import { useState } from "react";
import "./App.css";
import AuthRoute from './components/Auth/AuthRoute';
import { UserProvider } from './Contexts/UserProvider';

const App = () => {

  return (
    <UserProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/platos" element={<AuthRoute component={<Platos />}/>}/>
          <Route path="/login" element={<Login />} />
          <Route path="/detail/:id" element={<Detail />} />
        </Routes>
      </BrowserRouter>
    </UserProvider>
  );
};

export default App;

