import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { setUser } from '../app/slices/authSlice';
import toast from 'react-hot-toast';
import { CiLight, CiDark, CiMenuBurger, CiShoppingCart, CiUser } from 'react-icons/ci';
import { IoClose } from 'react-icons/io5';
import { SERVER_URL } from '../config';

const Navbar = ({ isDarkMode, setIsDarkMode }) => {
  const user = useSelector((state) => state.auth.user);
  const cart = useSelector((state) => state.cart.items);
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = async () => {
    const res = await fetch(`${SERVER_URL}/api/auth/logout`, {
      credentials: 'include',
    });
    const data = await res.json();
    if (data.success) {
      dispatch(setUser(null));
      toast.success(data.message);
      navigate('/login');
    }
  };

  return (
    <header className={`fixed w-full z-50 top-0 backdrop-blur-md border-b transition-all duration-300 ${
      isDarkMode 
        ? 'bg-black/80 border-gray-800 shadow-lg shadow-gray-900/50' 
        : 'bg-white/80 border-gray-200 shadow-lg shadow-black/5'
    }`}>
      <nav className="container mx-auto px-5 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent flex items-center gap-2 hover:scale-105 transition-transform" to="/">
          <CiShoppingCart size={28} className="text-blue-600" />
          Store
        </Link>

        {/* Hamburger Button */}
        <button className="md:hidden text-2xl ml-auto" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <IoClose size={28} /> : <CiMenuBurger size={28} />}
        </button>

        {/* Menu Items */}
        <div
          className={`${
            isOpen ? 'flex' : 'hidden'
          } md:flex flex-col md:flex-row gap-6 items-start md:items-center w-full md:w-auto p-5 md:p-0 ${
            isDarkMode ? 'bg-black/95' : 'bg-white/95'
          } md:relative absolute md:top-0 top-16 left-0 md:bg-transparent md:rounded-none rounded-lg md:shadow-none shadow-lg`}
        >
          <Link to="/" className="hover:text-blue-600 transition-colors font-medium" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/products" className="hover:text-blue-600 transition-colors font-medium" onClick={() => setIsOpen(false)}>Products</Link>
          {user ? (
            <>
              <Link to="/cart" className="relative hover:text-blue-600 transition-colors font-medium" onClick={() => setIsOpen(false)}>
                Cart
                {cart?.length > 0 && (
                  <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                    {cart.length}
                  </span>
                )}
              </Link>
              <Link to="/profile" className="px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg hover:shadow-lg hover:shadow-blue-500/50 transition-all transform hover:scale-105 flex items-center gap-2" onClick={() => setIsOpen(false)}>
                <CiUser size={18} />
                Profile
              </Link>
              <button className="px-4 py-2 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-lg hover:shadow-lg hover:shadow-red-500/50 transition-all transform hover:scale-105" onClick={() => {
                handleLogout();
                setIsOpen(false);
              }}>
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg hover:shadow-lg hover:shadow-blue-500/50 transition-all transform hover:scale-105" onClick={() => setIsOpen(false)}>Login</Link>
              <Link to="/register" className="px-4 py-2 bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-lg hover:shadow-lg hover:shadow-purple-500/50 transition-all transform hover:scale-105" onClick={() => setIsOpen(false)}>Register</Link>
            </>
          )}
        </div>

        {/* Dark Mode Toggle */}
        <button className="px-3 py-2 rounded-lg transition-all duration-300 hover:bg-gray-200 dark:hover:bg-gray-800" onClick={() => setIsDarkMode(!isDarkMode)}>
          {isDarkMode ? <CiLight size={24} className="text-yellow-400" /> : <CiDark size={24} className="text-gray-700" />}
        </button>
      </nav>
    </header>
  );
};

export default Navbar;
