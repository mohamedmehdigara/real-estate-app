import React from "react";
import axios from 'axios';


function LoginForm() {
    const { register, formState: { errors } } = useForm();
    const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  
  
    const onSubmit = async(data) => {
      // Handle form submission logic, e.g., send the login data to the backend server
      try {
        const response = await axios.post('/api/login', data);
        console.log(response.data); // Log the server response
        // Redirect the user or perform additional actions based on the response
      } catch (error) {
        console.log(error); // Log any errors
        // Display an error message to the user
      }
    };

    const handleSubmit = (e) => {
      e.preventDefault();
  
      // Perform login request to the backend server
      // Include the username and password in the request body
  
      console.log('Username:', username);
      console.log('Password:', password);
      setUsername('');
      setPassword('');
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