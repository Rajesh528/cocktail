import React from 'react';
import {  createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home';
import Cocktails from './components/cocktails';
import CocktailDetails from './components/cocktailDetails';
import './App.css';
const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: 'cocktails',
    element: <Cocktails />,
  },
  {
    path: 'cocktailDetails/:id',
    element: <CocktailDetails />,
  },
]);

const App = ()=>{
  return(

    <>
     <RouterProvider router={router} />
    </>
  )

}

export default App;
