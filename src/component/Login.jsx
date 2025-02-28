import React, { useContext, useEffect, useState } from "react";
import { assets } from "../assets/assets";
import { AppContext } from "../context/AppContext";
import { motion } from "framer-motion";

const Login = () => {
  const [state, setState] = useState("Login");
  const context = useContext(AppContext);
  if (!context) {
      return <p>Error: Context not found!</p>;
  }  
  const { setShowLogin } = context;

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);
  return (
    <div

      className="fixed z-10 left-0 top-0 right-0 bottom-0 backdrop-blur-sm bg-black/30 flex 
    justify-center items-center"
    >
      <motion.form 
      initial={{ opacity: 0.2, y: 50 }}
      transition={{ duration: 0.3 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }} 
       className="relative bg-white p-10 rouned-xl text-slate-500">
        <h1 className="text-center text-2xl text-neutral-700 font-medium">
          {state}
        </h1>
        <p className="text-sm">Welcome back! Please sign in to continue</p>
        {state !== "Login" && (
          <div className="border px-6 py-2 flex items-center gap-2 rounded-full mt-4">
            <img src={assets.user_icon} alt="" />
            <input
              type="text"
              className="outline-none text-sm"
              placeholder="Full Name"
              required
            />
          </div>
        )}
        <div className="border px-6 py-2 flex items-center gap-2 rounded-full mt-4">
          <img src={assets.email_icon} alt="" />
          <input
            type="email"
            className="outline-none text-sm"
            placeholder="Email id"
            required
          />
        </div>
        <div className="border px-6 py-2 flex items-center gap-2 rounded-full mt-4">
          <img src={assets.lock_icon} alt="" />
          <input
            type="password"
            className="outline-none text-sm"
            placeholder="Password"
            required
          />
        </div>
        <p className="text-sm text-blue-600 my-4 cursor-pointer">
          Forgot password?
        </p>
        <button
          type="submit"
          className="bg-blue-600 w-full text-white py-2 rounded-full cursor-pointer"
        >
          {state === "Login" ? "Login" : "Create account"}
        </button>
        {state === 'Login' ?<p className="mt-5 text-center">
          Don't have an account?
          <span className="text-blue-500 cursor-pointer" onClick={() => setState('Sign Up')}>Sign up</span>
        </p> :
        <p className="mt-5 text-center">
          Already have an account?
          <span className="text-blue-500 cursor-pointer" onClick={() => setState('Login')}>Login</span>
        </p>}
        <img onClick={() => setShowLogin(false)}
          className="absolute top-5 right-5 cursor-pointer"
          src={assets.cross_icon}
          alt=""
        />
      </motion.form>
    </div>
  );
};

export default Login;
