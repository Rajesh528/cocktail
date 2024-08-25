import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { CustomersContext } from './Customers/CustomerContext';
import { useNavigate } from 'react-router-dom';

const SignUpComponent = () => {
  const navigate = useNavigate();
  const context = useContext(CustomersContext);
  const { register, handleSubmit, formState: { errors } } = useForm();
 

  const onsubmit = (data:any) => {
    console.log(data);
    addCustomer(data);
    navigate('/login')

  };
if(!context){
return <p>Context not Found</p>
}
const {addCustomer} = context;
  return (
<div className="container-fluid">
        <div className="row min-vh-100">
          <div className="col-md-7 d-none d-md-flex bg-image">
          </div>
          <div className="col-md-5 d-flex align-items-center justify-content-center">
            <div className="w-75">
              <h2 className="text-center mb-4">Sign Up</h2>
              <form onSubmit={handleSubmit(onsubmit)}>
                <div className="form-group mb-3">
                  <label htmlFor="email">Email</label>
                  <input type="email" className="form-control" id="email" placeholder="Enter your email"
                  {...register('email')} />
                </div>
                <div className="form-group mb-3">
                  <label htmlFor="password">Password</label>
                  <input type="password" className="form-control" id="password" placeholder="Enter your password" 
                   {...register('password')}/>
                </div>
                <button type="submit" className="btn btn-primary w-100">Login</button>
              </form>
            </div>
          </div>
        </div>
      </div>
  );
};

export default SignUpComponent;
