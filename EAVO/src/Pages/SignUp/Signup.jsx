import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import backUrl from "../../constant";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleGsubmit = (e) => {
    e.preventDefault();
    window.location.href = `${backUrl}/login/federated/google`;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`${backUrl}/eavo/admin/sign-up`, {
        email,
        username,
        password,
      },{
    withCredentials: true,
            headers: {
                'Content-Type': 'application/json'
            }})
      .then(() => {
          navigate("/login");
      })
      .catch((error) => {
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          console.error('Error data:', error.response.data);
          console.error('Error status:', error.response.status);
          console.error('Error headers:', error.response.headers);
      } else if (error.request) {
          // The request was made but no response was received
          console.error('Error request:', error.request);
      } else {
          // Something happened in setting up the request that triggered an Error
          console.error('Error message:', error.message);
      }
        alert("Error sending OTP. Please check the console for details.");
      });
  };

  return (
    <div className="flex items-center justify-center pt-24 ml-64 min-h-screen font-sans mb-24 ">
      <div className="w-full max-w-2xl p-8 bg-white shadow-lg rounded-lg">
        <h1 className="text-4xl font-bold text-blue-950 mb-12 text-center">
          Sign up and join our Team
        </h1>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="relative">
          <label htmlFor="username" className="block text-2xl font-medium leading-7 text-gray-900">
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              className="block w-full rounded-md border-0 py-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 text-2xl"
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="relative">
          <label htmlFor="email" className="block text-2xl font-medium leading-7 text-gray-900">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="block w-full rounded-md border-0 py-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 text-2xl"
              required
            />
          </div>
          <div className="relative">
          <label htmlFor="password" className="block text-2xl font-medium leading-7 text-gray-900 ">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="block w-full rounded-md border-0 py-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 text-2xl"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              id="special-offers"
              name="special-offers"
              className="mr-2 border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-950"
            />
            <label className="text-gray-700" htmlFor="special-offers">
              Send me special offers, personalized recommendations, and helpful tips
            </label>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-4 font-bold rounded hover:bg-blue-800 transition duration-300"
          >
            Sign Up
          </button>
        </form>
        <form action="" onSubmit={handleGsubmit} className="mt-4">
          <button
            type="submit"
            className="w-full bg-red-500 text-white py-4 font-bold rounded hover:bg-red-700 transition duration-300"
          >
            Continue With Google
          </button>
        </form>
        <div className="text-center mt-8 text-gray-600">
          <p>By signing up, you agree to our Terms of use and Privacy Policy.</p>
        </div>
        <hr className="my-8" />
        <p className="text-center text-gray-600">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-950 font-bold underline">
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
