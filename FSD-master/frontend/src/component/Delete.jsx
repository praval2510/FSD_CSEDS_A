import React from 'react';
import axios from 'axios';

const Delete = () => {
  const handleDelete = async (e) => {
    e.preventDefault();
    const id = e.target.id.value;
    await axios.delete(`https://fsd-cseds-a-1.onrender.com/users/${id}`);
    alert('User deleted successfully');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100 px-4">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-lg p-8 border border-slate-200">
        <h2 className="text-2xl font-extrabold text-center text-slate-800 mb-6">
          🔴 Delete User
        </h2>
        <form onSubmit={handleDelete} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              User ID
            </label>
            <input
              type="text"
              name="id"
              placeholder="Enter User ID"
              className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-red-500 bg-slate-50 text-slate-800 placeholder-slate-400"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-2.5 px-4 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg shadow hover:shadow-md transition duration-300 ease-in-out"
          >
            Confirm Delete
          </button>
        </form>
      </div>
    </div>
  );
};

export default Delete;
