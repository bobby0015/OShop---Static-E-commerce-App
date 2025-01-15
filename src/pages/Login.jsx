import React from "react";
import { FaEnvelope, FaKey } from "react-icons/fa";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="flex justify-center items-center py-16">
      <div className="py-6 px-8 rounded-md bg-zinc-100">
        <h1 className="text-xl font-semibold">Login to account</h1>
        <form className="mt-8 w-96">
          <div className="mb-3">
            <label htmlFor="username">
              Email <span className="text-red-500">*</span>
            </label>
            <div className="input input-bordered flex items-center gap-2 mt-2">
              <FaEnvelope />
              <input type="text" className="grow" placeholder="Email" />
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="password">
              Password <span className="text-red-500">*</span>
            </label>
            <div className="input input-bordered flex items-center gap-2 mt-2">
              <FaKey />
              <input type="password" className="grow" placeholder="Password" />
            </div>
          </div>
          <div className="w-full mt-4">
            <p className="text-sm font-semibold mb-3">
              Don't have an account ?{" "}
              <Link className="link-primary" to="/register">
                Sgin In
              </Link>{" "}
            </p>
            <button className="btn w-full btn-primary btn-disabled">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
