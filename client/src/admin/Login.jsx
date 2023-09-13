import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IoPersonOutline, IoLockClosedOutline } from 'react-icons/io5'; // Import the icons you need

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/admin');
    console.log('Username:', username);
    console.log('Password:', password);
  };

  return (
    <div className="h-screen md:flex">
      <div
        className="relative overflow-hidden md:flex w-1/2 bg-gradient-to-tr from-customLightCarton to-customCarton justify-around items-center hidden"
      >
        <div>
          <h1 className="text-white font-bold text-4xl font-sans">Chatterroeu</h1>
        </div>
        <div className="absolute -bottom-32 -left-40 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
        <div className="absolute -bottom-40 -left-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
        <div className="absolute -top-40 -right-0 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
        <div className="absolute -top-20 -right-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
      </div>
      <div className="flex flex-col md:w-1/2 justify-center px-8 items-center h-full bg-customLightCarton md:bg-white">
      <h1 className="text-black font-bold text-4xl font-sans md:hidden mb-8">Chatterroeu</h1>
        <div className="bg-white p-6 w-full md:w-3/4 lg:w-1/2 mx-auto">
          <h2 className="text-2xl font-semibold mb-4">Login</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
                <IoPersonOutline className="h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  id="username"
                  name="username"
                  value={username}
                  onChange={handleUsernameChange}
                  placeholder="Username"
                  className="pl-2 outline-none border-none w-full"
                  required
                />
              </div>
              <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
                <IoLockClosedOutline className="h-5 w-5 text-gray-400" />
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={password}
                  onChange={handlePasswordChange}
                  placeholder="Password"
                  className="pl-2 outline-none border-none w-full"
                  required
                />
              </div>
            </div>
            <button
              type="submit"
              className="block w-full bg-customLightCarton hover:bg-customCarton text-black hover:text-white py-2 px-6 rounded-md focus:outline-none"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
