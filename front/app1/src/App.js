import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Login from './pages/Login';
import Inscription from './pages/Inscription';
import "./style.scss";

const route = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/inscription",
    element: <Inscription />,
  },
]);


function App() {
  return (
    <div className="App">
      <RouterProvider router={route} />
    </div>
  );
}


function Layout() {
  return (
    <div className="layout">
      <navbar />
      <home />
    </div>
  );
}

export default App;
