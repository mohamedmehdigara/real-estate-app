import React from "react";

function LoginForm() {
    const { register, handleSubmit, formState: { errors } } = useForm();
  
    const onSubmit = (data) => {
      // Handle form submission logic, e.g., send the login data to the backend server
      console.log(data);
    };
  
    return (
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" {...register('username', { required: true })} />
        {errors.username && <span>This field is required</span>}
        
        <input type="password" {...register('password', { required: true })} />
        {errors.password && <span>This field is required</span>}
        
        <button type="submit">Login</button>
      </form>
    );
  }
export default LoginForm  