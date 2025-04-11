import React from 'react';
import axios from 'axios';

const Update = () => {
  const handleupdate = async (e) => {
    e.preventDefault();
    const id = e.target.id.value;
    const name = e.target.name.value;
    const age = e.target.age.value;
    const data = { name, age };
    await axios.put(`https://fsd-2edc.onrender.com/users/${id}`, data);
    alert("User updated successfully!");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100 px-4">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-lg p-8 border border-blue-100">
        <h2 className="text-2xl font-extrabold text-center text-blue-700 mb-6">
          🔵 Update User
        </h2>
        <form onSubmit={handleupdate} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">User ID</label>
            <input
              type="text"
              name="id"
              placeholder="Enter user ID"
              className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-slate-50 text-slate-800 placeholder-slate-400"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter name"
              className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-slate-50 text-slate-800 placeholder-slate-400"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Age</label>
            <input
              type="text"
              name="age"
              placeholder="Enter age"
              className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-slate-50 text-slate-800 placeholder-slate-400"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-2.5 px-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow hover:shadow-md transition duration-300 ease-in-out"
          >
            Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default Update;
