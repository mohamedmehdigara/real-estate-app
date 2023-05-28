import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';


function RegistrationForm() {
    const { register, handleSubmit, formState: { errors } } = useForm();
  
    const onSubmit = async(data) => {
        try {
            const response = await axios.post('/api/register', data);
            console.log(response.data); // Log the server response
            // Redirect the user or show a success message
          } catch (error) {
            console.log(error); // Log any errors
            // Display an error message to the user
          }
      // Handle form submission logic, e.g., send the registration data to the backend server
    };
  
    return (
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" {...register('username', { required: true })} />
        {errors.username && <span>This field is required</span>}
        
        <input type="password" {...register('password', { required: true })} />
        {errors.password && <span>This field is required</span>}
        
        <button type="submit">Register</button>
      </form>
    );
  }
export default RegistrationForm  