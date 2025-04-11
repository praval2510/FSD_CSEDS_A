import React from 'react';
import axios from 'axios';

const Register = () => {
  const handleregister = async (e) => {
    e.preventDefault();
    const user = {
      name: e.target.name.value,
      age: e.target.age.value,
    };
    await axios.post('https://fsd-cseds-a-1.onrender.com/users', user);
    alert('User Registered Successfully');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100 px-4">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-lg p-8 border border-emerald-100">
        <h2 className="text-2xl font-extrabold text-center text-emerald-700 mb-6">
          🟢 Register User
        </h2>
        <form onSubmit={handleregister} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter name"
              className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-slate-50 text-slate-800 placeholder-slate-400"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Age
            </label>
            <input
              type="text"
              name="age"
              placeholder="Enter age"
              className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-slate-50 text-slate-800 placeholder-slate-400"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-2.5 px-4 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-lg shadow hover:shadow-md transition duration-300 ease-in-out"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
