import React, { Suspense } from 'react';
import {  createBrowserRouter, RouterProvider } from 'react-router-dom';
import Cocktails from './components/cocktails';
import CocktailDetails from './components/cocktailDetails';
import './App.css';
import MainLayoutComponent from './components/MainLayout/MainLayoutComponent';
import Employees from './components/Employees';
import CustomerComponent from './components/Customers/Customers';
import ProductComponent from './components/Products/ProductComponent';
import HomeComponent from './components/home';
import SignUpComponent from './components/SignUp';
import Signin from './components/Signin';
import store from './store/store';
import { CustomerProvider, CustomersContext } from './components/Customers/CustomerContext';
import { Provider } from 'react-redux';
import UserList from './components/UserList';
import ProductList from './components/ProductList';
const router = createBrowserRouter([

  {
    path: 'cocktails',
    element: <Cocktails />,
  },
  {
    path: 'users',
    element: <UserList />,
  },
  {
    path: 'products',
    element: <ProductList />,
  },
  {
    path: 'cocktailDetails/:id',
    element: <CocktailDetails />,
  },  {
    path: "/",
    element: <MainLayoutComponent />,
    children: [
      {
        path: "employee",
        element: <Employees />,
      },
      {
        path: "customers",
        element: (
            <CustomerComponent />
        ),
      },
      {
        path: "products",
        element: (
            <ProductComponent />
        ),
      },

      {
        path: "home",
        element: (
          <Suspense fallback={<div>loading...</div>}>
            <HomeComponent />{" "}
          </Suspense>
        ),
      },
    ],
  },
  { path: "signUp", element: <SignUpComponent /> },
  { path: "login", element: <Signin /> },
]);

const App = ()=>{
  return(

    <>
    <Provider store={store}>
    <CustomerProvider>
   <RouterProvider router={router} />
   </CustomerProvider>
    </Provider>
 

 
 
    </>
  )

}

export default App;
