import React, { useState, useEffect } from 'react';
import axios from 'axios';

const View = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    viewdata();
  }, []);

  const viewdata = async () => {
    const res = await axios.get('https://fsd-cseds-a-1.onrender.com/users');
    setUsers(res.data);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100 px-4">
      <div className="w-full max-w-5xl bg-white rounded-3xl shadow-xl p-10 border border-green-100">
        <h1 className="text-3xl font-bold text-center text-green-700 mb-8">
          🧾 Registered Users
        </h1>
        <div className="overflow-x-auto rounded-lg">
          <table className="min-w-full table-auto border-collapse">
            <thead>
              <tr className="bg-green-600 text-white text-lg">
                <th className="px-6 py-3 text-left">ID</th>
                <th className="px-6 py-3 text-left">Name</th>
                <th className="px-6 py-3 text-left">Age</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {users.length > 0 ? (
                users.map((user) => (
                  <tr
                    key={user.id}
                    className="hover:bg-green-50 transition duration-200 text-gray-700"
                  >
                    <td className="px-6 py-3">{user.id}</td>
                    <td className="px-6 py-3">{user.name}</td>
                    <td className="px-6 py-3">{user.age}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="3" className="text-center py-6 text-gray-400">
                    No users found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default View;
