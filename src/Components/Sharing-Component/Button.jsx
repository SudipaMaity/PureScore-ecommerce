import React from "react";

const Button = ({ label = "", onClick = () => {} }) => {
  return (
    <button
      className="font-atype font-medium bg-[#202E99] px-5 py-3 text-white rounded-md"
      onClick={() => onClick()}
    >
      {label}
    </button>
  );
};

export default Button;
