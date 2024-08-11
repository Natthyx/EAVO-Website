import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import backUrl from "../../constant";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  axios.defaults.withCredentials = true;
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`${backUrl}/eavo/admin/login`, {
        email,
        password,
      },
      {
        withCredentials: true,
        headers: {
            'Content-Type': 'application/json'
        }}
    )
      .then((response) => {
        if (response.data.status) {
          localStorage.setItem('authToken', response.data.token);
          navigate("/admin");
          window.location.reload();
        }
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
      });
  };

  return (
    <div className="flex flex-1 flex-col justify-center px-8 py-24 lg:px-32">
      <div className="sm:mx-auto sm:w-full sm:max-w-2xl">
        <h2 className="mt-10 text-center text-4xl font-bold leading-tight tracking-tight text-gray-900">
          Sign in to your account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-2xl">
        <form className="space-y-10" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email" className="block text-2xl font-medium leading-7 text-gray-900">
              Email address
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                required
                autoComplete="email"
                className="block w-full rounded-md border-0 py-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 text-2xl"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label htmlFor="password" className="block text-2xl font-medium leading-7 text-gray-900">
                Password
              </label>
              <div className="text-2xl">
                <a href="/forgotpassword" className="font-semibold text-indigo-600 hover:text-indigo-500">
                  Forgot password?
                </a>
              </div>
            </div>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                required
                autoComplete="current-password"
                className="block w-full rounded-md border-0 py-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 text-2xl"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-blue-600 px-6 py-4 text-2xl font-semibold leading-7 text-white shadow-sm hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-900"
            >
              Sign in
            </button>
          </div>
        </form>
        <hr className="mt-10" />
      </div>
      <div className="text-center mt-10 text-2xl">
        Don't have an account?{" "}
        <Link to="/signup" className="text-blue-900 font-bold text-3xl underline">
          Signup
        </Link>
      </div>
    </div>
  );
};

export default Login;
