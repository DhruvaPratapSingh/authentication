import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:4000/api/register", formData);
      console.log("Registration successful:", res);
      alert("Registration successful! Please login.");
      if (res.data.token) {
        localStorage.setItem("token", res.data.token);
        navigate("/login");
      }
    } catch (error) {
      console.error("Registration error:", error.response?.data || error.message);
      alert("Registration failed. Check console for details.");
    }
  };

  return (
    <div className="min-h-screen  w-screen flex items-center justify-center bg-gradient-to-bl from-pink-600 via-purple-600 to-indigo-600">
      <div className="bg-white/10 backdrop-blur-md p-8 rounded-3xl shadow-2xl w-full max-w-md border border-white/20">
        <h2 className="text-3xl font-bold text-white text-center mb-6">Register</h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl bg-white/20 text-white placeholder-white/70 border border-white/30 focus:outline-none focus:ring-2 focus:ring-white/40"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl bg-white/20 text-white placeholder-white/70 border border-white/30 focus:outline-none focus:ring-2 focus:ring-white/40"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl bg-white/20 text-white placeholder-white/70 border border-white/30 focus:outline-none focus:ring-2 focus:ring-white/40"
          />
          <button
            type="submit"
            className="w-full py-3 rounded-xl bg-white/30 hover:bg-white/40 text-white font-semibold shadow-md transition duration-200"
          >
            Create Account
          </button>
        </form>
        <p className="text-white mt-4 text-center">
          Already have an account? <Link to="/login" className="underline">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
