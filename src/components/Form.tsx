import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import URL from "@/data/urls";
import toast from "react-hot-toast";

type FormData = z.infer<typeof formDataSchema>;

const ERRORS = {
  required: "This field is required",
  min: "Must be at least 10 characters long",
  number: "Must be a number",
  isLegal: "You must agree before submitting",
};

// Define the schema using Zod
const formDataSchema = z.object({
  name: z.string().min(1, { message: ERRORS.required }),
  phone: z.string().min(10, { message: ERRORS.min }).regex(/^\d+$/, { message: ERRORS.number }),
  peopleCount: z.string().min(1, { message: ERRORS.required }).regex(/^\d+$/, { message: ERRORS.number }),
  isLegal: z.boolean().refine((val) => val, { message: ERRORS.isLegal }),
});

const Form = ({ toggleModal }: { toggleModal: () => void }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formDataSchema),
  });

  const onSubmit: SubmitHandler<FormData> = (data) => {
    try {
      fetch(URL.API + "/orders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...data, peopleCount: parseInt(data.peopleCount) }),
      }).then((response) => {
        if (!response.ok) {
          throw new Error("Failed to submit form");
        }
        reset();
        toggleModal();
        toast.success("Form submitted successfully!");
      });
    } catch (error) {
      toast.error("ERROR: " + error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-6">
        <label htmlFor="name" className="block mb-2">
          Your Name
        </label>
        <input
          {...register("name")}
          id="name"
          className="w-full p-2 bg-transparent border border-gray-600 rounded"
          placeholder="Name"
        />
        {errors.name && <span className="text-red-500">{errors.name.message}</span>}
      </div>

      <div className="mb-6">
        <label htmlFor="phone" className="block mb-2">
          Contact Phone
        </label>
        <input
          {...register("phone")}
          id="phone"
          className="w-full p-2 bg-transparent border border-gray-600 rounded"
          placeholder="Phone"
        />
        {errors.phone && <span className="text-red-500">{errors.phone.message}</span>}
      </div>

      <div className="mb-6">
        <label htmlFor="peopleCount" className="block mb-2">
          Number of Participants
        </label>
        <input
          {...register("peopleCount")}
          id="peopleCount"
          className="w-full p-2 bg-transparent border border-gray-600 rounded"
          placeholder="Number of Participants"
        />
        {errors.peopleCount && <span className="text-red-500">{errors.peopleCount.message}</span>}
      </div>

      <div className="mb-6">
        <input
          {...register("isLegal")}
          type="checkbox"
          id="isLegal"
          className="w-4 h-4 text-blue-600 bg-transparent border border-gray-600 rounded"
        />
        <label htmlFor="isLegal" className="ml-2">
          I agree to the data processing rules and user agreement
        </label>
        {errors.isLegal && <p className="text-red-500">{errors.isLegal.message}</p>}
      </div>

      <button type="submit" className="w-full p-3 rounded-full bg-gray-700 hover:bg-gray-600">
        SEND REQUEST
      </button>
    </form>
  );
};

export default Form;
