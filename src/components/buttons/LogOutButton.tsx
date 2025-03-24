import React from "react";

const LogOutButton = () => {
  const handleLogout = () => {
    localStorage.clear();
    sessionStorage.clear();
    window.location.href = "/api/auth/logout?federated";
  };
  return (
    <div>
      <button
        onClick={handleLogout}
        className="font-bold text-black px-4 py-2 rounded-lg hover:bg-gray-100 transition"
      >
        Log Out
      </button>
    </div>
  );
};

export default LogOutButton;
