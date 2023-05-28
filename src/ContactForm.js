import React, {useState} from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';



function ContactForm() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [isSubmitted, setIsSubmitted] = useState(false);
    const navigate = useNavigate();


  
    const onSubmit = (data) => {
        axios.post('https://example.com/api/contact', data)
        .then(response => {
          // Handle successful form submission
          console.log(response.data);
          setIsSubmitted(true);
          navigate('/thank-you');

        })
        .catch(error => {
          // Handle form submission error
          console.log(error);
        });
    };
  
    return (
        <div>
        {isSubmitted ? (
            <p>Thank you for your message! We will get back to you soon.</p>
          ) : (
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="name">Name</label>
        <input {...register("name", { required: true })} />
        {errors.name && <span>This field is required</span>}
  
        <label htmlFor="email">Email</label>
        <input {...register("email", { required: true, pattern: /^\S+@\S+$/i })} />
        {errors.email && <span>This field is required and should be a valid email address</span>}
  
        <label htmlFor="phone">Phone Number</label>
        <input {...register("phone", { required: true })} />
        {errors.phone && <span>This field is required</span>}
  
        <label htmlFor="subject">Subject</label>
        <input {...register("subject", { required: true })} />
        {errors.subject && <span>This field is required</span>}
  
        <label htmlFor="message">Message</label>
        <textarea {...register("message", { required: true })} />
        {errors.message && <span>This field is required</span>}
  
        <button type="submit">Submit</button>
      </form>
    )
    }

  </div>
    );}

export default ContactForm  
