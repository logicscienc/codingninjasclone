import React from "react";

const RequestCallbackButton = ({ className = "" }) => {
  const handleScroll = (e) => {
    e.preventDefault();
    const element = document.getElementById("callback");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <button
      onClick={handleScroll}
      className={`px-6 py-2 border border-black rounded-md transition cursor-pointer hover:bg-black hover:text-white ${className}`}
    >
      Request callback
    </button>
  );
};

export default RequestCallbackButton;
