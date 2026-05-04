'use client';
import { authClient } from '@/lib/auth-client';
import Link from 'next/link'
import React from 'react'
import { useForm } from 'react-hook-form';

const LoginPage = () => {

  const {register, handleSubmit, formState: {errors}} = useForm();

  const handleLoginFunc = async(data) => {

    const { data:res, error } = await authClient.signIn.email({
    email: data.email, // required
    password: data.password, // required
    rememberMe: true,
    callbackURL: "/",
});

console.log(res, error)
  }
  return (
    <>
      <div className='container mx-auto flex min-h-[80vh] justify-center items-center bg-slate-100'>
        <form onSubmit={handleSubmit(handleLoginFunc)} className="fieldset bg-white border-base-300 rounded-box w-xs border p-4">
          <legend className="text-2xl font-bold text-center">Login</legend>

          <label className="label text-black font-bold">Email</label>
          <input type="email"  className="input bg-slate-100" placeholder="Email" {...register("email", { required: "Email field is required" })} />
          {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
          <label className="label text-black font-bold">Password</label>
          <input type="password" className="input bg-slate-100" placeholder="Password" {...register("password", { required: "Password field is required" })}/>
          {errors.password && <p className='text-red-500'>{errors.password.message}</p>}

          <button className="btn btn-neutral mt-4">Login</button>
            <p className='pt-4'>
              Don't have an account? 
              <Link href={"/register"} className='text-blue-500'> Register</Link>
          </p>
        </form>
      
      </div>
    </>
  )
}

export default LoginPage
