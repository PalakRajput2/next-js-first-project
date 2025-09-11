"use client";

import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { loginValidationSchema } from "./validations/loginValidation"
import { useRouter } from 'next/navigation';
import Link from 'next/link';
const LoginPage = () => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginValidationSchema),
  });

  const onSubmit = (data) => {
    console.log("Login Data:", data);
    
    router.push('/'); 
  };

  return (
    <div className="h-[600px] flex items-center justify-center  bg-gray-100 px-4">
      <div className="bg-white p-8 rounded-md shadow-md w-full max-w-md">
        <h2 className="text-3xl font-bold text-center mb-6 text-pink-500">Login</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">

          {/* Email */}
          <div>
            <input
              type="email"
              {...register("email")}
              placeholder="Email"
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
            )}
          </div>

          {/* Password */}
          <div>
            <input
              type="password"
              {...register("password")}
              placeholder="Password"
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400"
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-pink-500 hover:bg-pink-600 text-white py-3 rounded-md font-semibold transition cursor-pointer"
          >
            Login
          </button>
          <p>Want to create an account ? <Link href="/signup" className='underline hover:text-pink-600 cursor-pointer' >Sign up</Link></p>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
