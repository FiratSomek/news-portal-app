import Link from "next/link";
import React from "react";

const SignInButton = () => {
  return (
    <div>
      <Link href={`/sign-in`}>
        <button className="font-bold text-black px-4 py-2 rounded-lg hover:bg-gray-100 transition">
          Sign In
        </button>
      </Link>
    </div>
  );
};

export default SignInButton;
