'use client'
import {React, createContext} from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import Dashboard from './pages/dashboard/Dashboard';
import Category from './pages/category/Category';
import CreateCategory from './pages/category/CreateCategory';

const AuthContext = createContext();

export default function Home() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/category" element={<Category />} />
        <Route path="/category/create" element={<CreateCategory />} />
      </Routes>
    </BrowserRouter>
  )
}
