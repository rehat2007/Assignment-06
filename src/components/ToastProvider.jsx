"use client";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ToastProvider = () => {
  return (
    <ToastContainer
      position="top-right"
      autoClose={3000}
      hideProgressBar={true}
      closeOnClick
      pauseOnHover
      theme="light"
      toastClassName="!bg-white !text-gray-800 !rounded-xl !shadow-lg !border !border-gray-200"
    />
  );
};

export default ToastProvider;