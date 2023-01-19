import React from 'react';
import './App.css';

import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Route,
  RouterProvider,
} from "react-router-dom";
import { Home } from './pages/Home';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<><Outlet /></>}>
      <Route path="/" element={<Home />} />
      <Route path="search" element={<div>Search Results Page</div>} />
      <Route path="sale/:id" element={<div>Sale ID Page</div>} />
    </Route>
  )
);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
