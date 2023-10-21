import React, { useState, useEffect} from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState(location.pathname); 

  useEffect(() => {
    setActiveTab(location.pathname);
  }, [location.pathname]);

  return (
    <div className='flex justify-center bg-gray-300 p-4'>
      <ul className='list-none flex space-x-4 font-sora text-lg'>
        <li className={` ${activeTab === '/' ? 'font-extrabold border-b-2 border-black' : ''}`}>
          <Link to="/" onClick={() => setActiveTab('/')}>Home</Link>
        </li>
        <li className={` ${activeTab === '/test' ? 'font-extrabold border-b-2 border-black' : ''}`}>
          <Link to="/test" onClick={() => setActiveTab('/test')}>TestPage</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
