import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="min-h-screen w-screen bg-gradient-to-tr from-indigo-600 via-purple-600 to-pink-500 flex flex-col items-center justify-center text-white p-8">
      <div className="bg-white/10 backdrop-blur-lg p-10 rounded-3xl shadow-2xl w-full max-w-4xl text-center border border-white/20">
        <img
          src="https://cdn-icons-png.flaticon.com/512/3064/3064197.png"
          alt="Auth Logo"
          className="w-24 h-24 mx-auto mb-6 drop-shadow-lg"
        />
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Welcome to AuthVerse</h1>
        <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
          AuthVerse is a full-stack authentication web application built using React,
          Node.js, Express, and MongoDB. It allows users to register, login, and access
          protected content securely with JWT authentication.
        </p>
        <div className="mt-8 space-x-4">
          <Link
            to="/login"
            className="inline-block px-6 py-3 bg-white/20 hover:bg-white/30 text-white font-semibold rounded-xl shadow-md transition"
          >
            Login
          </Link>
          <Link
            to="/register"
            className="inline-block px-6 py-3 bg-white/20 hover:bg-white/30 text-white font-semibold rounded-xl shadow-md transition"
          >
            Register
          </Link>
        </div>
      </div>
      <footer className="mt-10 text-sm text-white/70">
        © {new Date().getFullYear()} AuthVerse. Built with ❤️ by Dhruva Pratap Singh.
      </footer>
    </div>
  );
};

export default HomePage;
