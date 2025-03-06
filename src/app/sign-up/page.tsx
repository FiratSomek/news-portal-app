"use client";

import React, { useState } from "react";

const SignUpForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    email: "",
    password: "",
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("user signed up", formData);
  };
  return (
    <div className="flex justify-center items-center p-10 ">
      <form
        onSubmit={handleSubmit}
        className="bg-gray-100 p-6 rounded-lg shadow-lg w-96 p-10 "
      >
        <h2 className="text-2xl font-bold mb-4 text-center">Sign Up</h2>
        <input
          type="text"
          name="name"
          placeholder="Enter Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-2 border rounded-md mb-3"
          required
        />
        <input
          type="text"
          name="surname"
          placeholder="Enter Surname"
          value={formData.surname}
          onChange={handleChange}
          className="w-full p-2 border rounded-md mb-3"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-2 border rounded-md mb-3"
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Enter Password"
          value={formData.password}
          onChange={handleChange}
          className="w-full p-2 border rounded-md mb-3"
          required
        />
        <button
          type="submit"
          className="w-full bg-black text-white p-2 rounded-md hover:bg-gray-800 transition"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignUpForm;
