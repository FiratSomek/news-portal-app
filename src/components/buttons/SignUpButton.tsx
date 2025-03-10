"use client";
import Link from "next/link";
import React from "react";

const SignUpButton = () => {
  return (
    <div>
      <Link href={`/sign-up`}>
        {" "}
        <button className="bg-black text-white px-2 py-2 font-bold rounded-lg hover:bg-gray-800 transition">
          Sign Up
        </button>
      </Link>
    </div>
  );
};

export default SignUpButton;
