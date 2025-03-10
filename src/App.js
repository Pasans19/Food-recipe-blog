import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home/home';
import AdminPanel from './Pages/admin';
import RecipeView from './Pages/view';
import Login from './Pages/login';
import RecipeDetails from './Pages/view';
import SignUp from './Pages/singup';
import RecipeCardGrid from './Components/Molecules/Card/cardgrid';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<Login />} />
          <Route path="/" element={<RecipeCardGrid />} />
          <Route path="/recipe/:id" element={<RecipeDetails />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
