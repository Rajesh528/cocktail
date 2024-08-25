import React, { createContext, ReactNode, useState } from "react";

interface Customer{
    id:number,
    userName:string,
    email:string,
    password:string
}

interface CustomersContextType {
    customers: Customer[],
    addCustomer: (customer:Customer)=>void,
    deleteCustomer:(id:number)=>void
    isExistingUser:(email:string)=>boolean
}
interface CustomerProviderType{
    children:ReactNode
}
 export const CustomersContext = createContext<CustomersContextType | undefined>(undefined);
 export const CustomerProvider : React.FC<CustomerProviderType> = ({children})=>{
let [customers,setCustomer] = useState<Customer[]>([]);

let  addCustomer = (customer:Customer)=>{
    console.log("login")
setCustomer([...customers,customer]);
}
let isExistingUser = (email:string)=>{
    console.log(customers);
    console.log(email);
    var index = customers.findIndex((obj:any)=>obj.email ===email);
    return  index === -1 ? false : true;
}
let deleteCustomer = (id:any)=>{

    setCustomer(customers.filter((customer:Customer)=>customer.id !== id));
}
return(
    <CustomersContext.Provider value={{ customers, addCustomer, deleteCustomer, isExistingUser }}>
      {children}
    </CustomersContext.Provider>
)
};