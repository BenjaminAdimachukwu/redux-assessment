
'use client'
import Login from '../components/Login';
import Logout from '../components/Logout';
import { useSelector } from 'react-redux';
import { selectAuth } from '../redux/slices/authSlice';

const Home = () => {
  const { isAuthenticated, username } = useSelector(selectAuth);
  return (
    <div>
      {isAuthenticated ? (
        <div className="text-center ">
          <Logout />
          <p className=" text-2xl font-bold flex items-center justify-center">Welcome, {username}! You are logged in.</p>
        </div>
      ) : (
        <div className="text-center h-2/4">
          <p className="text-2xl font-bold mt-4 text-blue-500  ">Please log in.</p>
          <Login />
        </div>
      )}
    </div>
  );
};

export default Home;