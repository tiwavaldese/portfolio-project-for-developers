import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name) {
      newErrors.name = 'Name is required';
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.message) {
      newErrors.message = 'Message is required';
    }
    
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length === 0) {
      alert('Message sent successfully!');
      // Handle form submission
    } else {
      setErrors(formErrors);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className='flex flex-col items-justify md:items-center lg:items-end'>
      <form onSubmit={handleSubmit} className='flex flex-col justify-center'>
        <div className='py-8'>
          <span className='ml-14 md:ml-5 lg:ml-5'>NAME</span>
          <input
            type='text'
            name='name'
            value={formData.name}
            onChange={handleChange}
            className='block w-[300px] md:w-[500px] mt-3 border  mx-auto bg-black'
          />
          {errors.name && <p className="text-red-500 text-center">{errors.name}</p>}
        </div>
        
        <div className='py-6'>
          <span className='ml-14 md:ml-5 lg:ml-5'>EMAIL</span>
          <input
            type='email'
            name='email'
            value={formData.email}
            onChange={handleChange}
            className='block w-[300px] md:w-[500px] mt-3 border  mx-auto bg-black'
          />
          {errors.email && <p className="text-red-500 text-center">{errors.email}</p>}
        </div>
        
        <div className='py-6'>
          <span className='ml-14 md:ml-5 lg:ml-5'>MESSAGE</span>
          <textarea
            name='message'
            value={formData.message}
            onChange={handleChange}
            className='block w-[300px] md:w-[500px] mt-3 border h-[100px]  mx-auto bg-black'
          />
          {errors.message && <p className="text-red-500 text-center">{errors.message}</p>}
        </div>
        
        <div className='flex flex-col items-center justify-center py-8 ml-44 md:ml-96'>
          <button type="submit" className=''>
            SEND MESSAGE
          </button>
          <hr className='w-[120px] my-2 border-[green] border-t-2 font-bold'/>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;

