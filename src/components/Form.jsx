"use client";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import * as Yup from "yup";

import { ToastContainer, toast } from "react-toastify";

const emailRegex = /^([a-z0-9_\-\.]+)@([a-z0-9_\-]+)(\.[a-z]{2,5}){1,2}$/;

const validationSchema = Yup.object().shape({
  name: Yup.string().required().trim("Email is required").min(2).max(30),
  email: Yup.string()
    .required()
    .trim()
    .email()
    .matches(emailRegex, "email must be a valid email"),
  message: Yup.string().required().trim().min(10).max(200),
});

export default function Form() {
  const form = useForm({ resolver: yupResolver(validationSchema) });
  const { register, handleSubmit, formState, reset } = form;
  const { errors } = formState;

  const [isLoading, setIsLoading] = useState(false);

  const succesMessage = (text) => toast.success(text);
  const errorMessage = (text) => toast.error(text);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  // handle on submit
  const onSubmit = async (data) => {
    setIsLoading(true);
    try {
      const result = await axios.post(`/api/contact`, data);
      if (result?.status === 200) {
        setIsLoading(false);
        result?.data?.message && succesMessage(result?.data?.message);
        reset();
      }
    } catch (error) {
      setIsLoading(false);
      errorMessage("Server side error");
    }
  };

  return (
    <>
      <ToastContainer />
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <div className="my-2 md:my-5">
          <input
            className=" w-full px-2 py-2 text-gray-950 placeholder:text-gray-900 rounded-md outline-none"
            type={"text"}
            name={"name"}
            placeholder={"Your name"}
            {...register("name")}
          />
          <p className="text-red-400 py-1 first-letter:capitalize">
            {errors?.name?.message}
          </p>
        </div>
        <div className="my-2 md:my-5">
          <input
            className=" w-full px-2 py-2 text-gray-950 placeholder:text-gray-900 rounded-md outline-none"
            type={"email"}
            name={"email"}
            placeholder={"Your email"}
            {...register("email")}
          />
          <p className="text-red-400 py-1 first-letter:capitalize">
            {errors?.email?.message}
          </p>
        </div>
        <div className="my-2">
          <textarea
            className=" w-full min-h-[100px] max-h-44 px-2 py-2 text-gray-950 placeholder:text-gray-900 rounded-md outline-none"
            name={"message"}
            placeholder={"Your message"}
            {...register("message")}
          ></textarea>
          <p className="text-red-400 py-1 first-letter:capitalize">
            {errors?.message?.message}
          </p>
        </div>

        <div className=" mt-5">
          <button
            disabled={isLoading}
            className=" bg-[#00376b] px-4 py-2 rounded-md capitalize font-semibold tracking-wide"
            type="submit"
          >
            send message
          </button>
        </div>
      </form>
    </>
  );
}
