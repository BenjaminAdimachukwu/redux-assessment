'use client'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../redux/slices/authSlice';
import { AppDispatch } from '../redux/store';

const Login = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [username, setUsername] = useState('');

  const handleLogin = () => {
    dispatch(login({ username }));
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-gray-100 p-8 rounded-md w-full max-w-md">
        <label className="block mb-2 text-lg font-semibold text-gray-800">
          Username:
          <input
            className="block w-full p-2 mt-1 border rounded-md"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <button
          className="block w-full p-2 mt-4 bg-blue-500 text-white rounded-md"
          onClick={handleLogin}
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
