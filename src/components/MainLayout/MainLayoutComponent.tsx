
import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../navbar/navbarComponent";
 let MainLayoutComponent :React.FC = ()=>{
    const location = useLocation();
    const shouldShowNavbar = !['/login', '/signup'].includes(location.pathname);
return(
       <>
           {shouldShowNavbar && <Navbar/>} 
           <Outlet />
       </>

 

)
}
export default MainLayoutComponent