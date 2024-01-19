'use client'
import { useDispatch } from 'react-redux';
import { logout } from '../redux/slices/authSlice'

const Logout = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
   <div className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4  ml-auto w-32 mr-10">
     <button
      onClick={handleLogout}
    >
      Logout
    </button>
   </div>
  );
};

export default Logout;
