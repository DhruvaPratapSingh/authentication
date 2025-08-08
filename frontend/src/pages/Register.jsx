import React from 'react';
import { Link } from 'react-router-dom';

const RegisterPage = () => {
  return (
    <div className="min-h-screen w-screen flex items-center justify-center bg-gradient-to-bl from-pink-600 via-purple-600 to-indigo-600">
      <div className="bg-white/10 backdrop-blur-md p-8 rounded-3xl shadow-2xl w-full max-w-md border border-white/20">
        <h2 className="text-white text-3xl font-bold mb-6 text-center">Register</h2>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Name"
            className="w-full px-4 py-3 rounded-lg bg-white/20 text-white placeholder-white/70 outline-none focus:ring-2 focus:ring-white"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-3 rounded-lg bg-white/20 text-white placeholder-white/70 outline-none focus:ring-2 focus:ring-white"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-3 rounded-lg bg-white/20 text-white placeholder-white/70 outline-none focus:ring-2 focus:ring-white"
          />
          <button
            type="submit"
            className="w-full py-3 bg-white text-pink-600 font-bold rounded-lg shadow-lg hover:bg-gray-100 transition"
          >
            Register
          </button>
        </form>
        <p className="text-center text-white mt-4">
          Already have an account?{' '}
          <Link to="/login" className="underline text-white font-semibold">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;
