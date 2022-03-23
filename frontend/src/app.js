import React from 'react'
import "./app.css";
import { Route, Routes } from "react-router-dom";
import BlogList from "./components/BlogList";
import Show from './components/Show';
import New from './components/New';
import Edit from './components/Edit';

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/blogs" element={BlogList} />
        <Route path="/blogs/new" element={New} />
        <Route path="/blogs/:id" element={Show} />
        <Route path="/blogs/:id/edit" element={Edit} />
      </Routes>
    </div>
  );
}
