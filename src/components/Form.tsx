import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

type FormData = {
  name: string;
  phone: string;
  participants: string;
  agreement: boolean;
};

const Form = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = data => {
    // Handle form submission, like sending data to a server
    console.log(data);
  };

  return (
   
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-6">
          <label htmlFor="name" className="block mb-2">Your Name</label>
          <input {...register("name", { required: true })} id="name" className="w-full p-2 bg-transparent border border-gray-600 rounded" placeholder="Name" />
          {errors.name && <span className="text-red-500">This field is required</span>}
        </div>
        
        <div className="mb-6">
          <label htmlFor="phone" className="block mb-2">Contact Phone</label>
          <input {...register("phone", { required: true })} id="phone" className="w-full p-2 bg-transparent border border-gray-600 rounded" placeholder="Phone" />
          {errors.phone && <span className="text-red-500">This field is required</span>}
        </div>
        
        <div className="mb-6">
          <label htmlFor="participants" className="block mb-2">Number of Participants</label>
          <input {...register("participants", { required: true })} id="participants" className="w-full p-2 bg-transparent border border-gray-600 rounded" placeholder="Number of Participants" />
          {errors.participants && <span className="text-red-500">This field is required</span>}
        </div>
        
        <div className="mb-6">
          <input {...register("agreement", { required: true })} type="checkbox" id="agreement" className="w-4 h-4 text-blue-600 bg-transparent border border-gray-600 rounded" />
          <label htmlFor="agreement" className="ml-2">I agree to the data processing rules and user agreement</label>

          {errors.agreement && <p className="text-red-500">You must agree before submitting</p>}
        </div>
        
        <button type="submit" className="w-full p-3 rounded-full bg-gray-700 hover:bg-gray-600">SEND REQUEST</button>
      </form>
   
  );
};

export default Form;
