import React, { useState, useEffect} from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState(location.pathname); 

  useEffect(() => {
    setActiveTab(location.pathname);
  }, [location.pathname]);

  return (
    <div className='navbar bg-gray-300 fixed top-0 w-full z-10'>
    <div className='container mx-auto py-4'>
      <ul className='list-none flex justify-center space-x-4 font-sora text-lg'>
        <li className={` ${activeTab === '/' ? 'font-extrabold border-b-2 border-black' : ''}`}>
          <Link to="/" onClick={() => setActiveTab('/')}>Home</Link>
        </li>
        <li className={` ${activeTab === '/test' ? 'font-extrabold border-b-2 border-black' : ''}`}>
          <Link to="/test" onClick={() => setActiveTab('/test')}>TestPage</Link>
        </li>
      </ul>
    </div>
  </div>
  );
};

export default Navbar;
