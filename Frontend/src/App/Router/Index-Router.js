import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './../Page/home';
import StudiesPages from './../Page/studies';
import ProjectsPage from './../Page/project';

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/studies" element={<StudiesPages />} />
        <Route path="/projects" element={<ProjectsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;