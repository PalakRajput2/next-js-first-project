"use client";

import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { signupValidationSchema } from './validations/signupValidation';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
const SignupPage = () => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm({
    resolver: yupResolver(signupValidationSchema),
  });

  const onSubmit = (data) => {
    console.log("Signup Data:", data);
    reset();
    router.push('/login');
  };

  return (
    <div className="flex items-center justify-center h-[650px] bg-gray-100 px-4">
      <div className="bg-white p-8 rounded-md shadow-md w-full max-w-md">
        <h2 className="text-3xl font-bold text-center mb-6 text-pink-500">Sign Up</h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">

          {/*  Name */}
          <div>
            <input
              type="text"
              {...register('fullName')}
              placeholder="Full Name"
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400"
            />
            {errors.fullName && (
              <p className="text-red-500 text-sm mt-1">{errors.fullName.message}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <input
              type="email"
              {...register('email')}
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
              {...register('password')}
              placeholder="Password"
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400"
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
            )}
          </div>

          {/* Confirm Password */}
          <div>
            <input
              type="password"
              {...register('confirmPassword')}
              placeholder="Confirm Password"
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400"
            />
            {errors.confirmPassword && (
              <p className="text-red-500 text-sm mt-1">{errors.confirmPassword.message}</p>
            )}
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-pink-500 hover:bg-pink-600 text-white py-3 rounded-md font-semibold transition cursor-pointer"
          >
            Sign Up
          </button>
           <p>Already have an account ? <Link href="/login" className='underline hover:text-pink-600 cursor-pointer' >Login</Link></p>
      
        </form>
      </div>
    </div>
  );
};

export default SignupPage;
