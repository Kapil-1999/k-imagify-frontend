import React, { useContext, useEffect, useState } from "react";
import { assets } from "../assets/assets";
import { AppContext } from "../context/AppContext";
import { motion } from "framer-motion";
import axios from "axios";

const Login = () => {
  const [state, setState] = useState("Login");
  const [userData, setUserData] = useState({
    name : '',
    email: "",
    password: "",
  });
  const context = useContext(AppContext);
  if (!context) {
      return <p>Error: Context not found!</p>;
  }  
  const { setShowLogin , backendUrl , setToken , setUser  } = context;

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const handleChange = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    })
  }

  const submitForm = async(e) => {
    e.preventDefault();
    console.log(user);
    if(state === "Login"){
      loginUser();
    }else{
      registerUser();
    }    
  }
  const loginUser = async() => {
    try {

      const response = await axios.post(`${backendUrl}user/login`, {email: userData.email, password: userData.password});
      console.log(response.data);
      if(response.data.success){
        setToken(response.data.token);
        setUser(response.data.user);
        localStorage.setItem("imagify_token", response.data.token);
        setShowLogin(false);
      }else{
        alert(response.data.message);
      }
    } catch (error) {
      console.log(error);
    }
  }

  const registerUser = async() => {
    try {
      const response = await axios.post(`${backendUrl}user/register`, userData);
      console.log(response.data);
      if(response.data.success){
        setToken(response.data.token);
        localStorage.setItem("imagify_token", response.data.token);
        setShowLogin(false);
      }else{
        alert(response.data.message);
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div
      className="fixed z-10 left-0 top-0 right-0 bottom-0 backdrop-blur-sm bg-black/30 flex 
    justify-center items-center"
    >
      <motion.form onSubmit={submitForm}
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
              name="name"
              value={userData.name}
              onChange={handleChange}
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
            name="email"
            value={userData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="border px-6 py-2 flex items-center gap-2 rounded-full mt-4">
          <img src={assets.lock_icon} alt="" />
          <input
            type="password"
            className="outline-none text-sm"
            placeholder="Password"
            name="password"
            value={userData.password}
            onChange={handleChange}
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
