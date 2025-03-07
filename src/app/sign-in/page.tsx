"use client";
import Link from "next/link";
import React, { useState } from "react";

const SignIn = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };
  return (
    <div className="flex justify-center items-center p-10 ">
      <form
        onSubmit={handleSubmit}
        className="bg-gray-100 p-6 rounded-lg shadow-lg w-96 p-10 "
      >
        <h2 className="text-2xl font-bold mb-4 text-center">Sign In</h2>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter Your Email"
          className="w-full p-2 border rounded-md mb-3"
          required
        />
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Enter Your Password"
          className="w-full p-2 border rounded-md mb-3"
          required
        />
        <button
          type="submit"
          className="w-full bg-black text-white p-2 rounded-md hover:bg-gray-800 transition mb-10"
        >
          Sign In
        </button>
        <Link href={`/sign-up`}>
          <span className="p-2 cursor-pointer">
            Don't you have an account? Sign up
          </span>
        </Link>
      </form>
    </div>
  );
};

export default SignIn;
