import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home/home';
import AdminPanel from './Pages/admin';
import RecipeViewPage from './Pages/view';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin" element={<AdminPanel />} />
          <Route path="/recipe/:recipeId" element={<RecipeViewPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
