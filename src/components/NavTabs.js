import React from 'react';
import { Link } from 'react-router-dom';

export default function NavTabs(){
  return(
    <ul className='nav nav-tabs flex flex-grow justify-center m-4'>
      <li className='nav-item px-5 border-4 border-gray-700 rounded-lg shadow-lg bg-grey-300 hover:font-bold hover:bg-blue-400 text-xl font-medium hover:text-2xl'>
        <Link to='/'>Home</Link>
      </li>
      <li className='nav-item px-5 border-4 border-gray-700 rounded-lg shadow-lg bg-grey-300 hover:font-bold hover:bg-blue-400 text-xl font-medium hover:text-2xl'>
        <Link to='/Projects'>Projects</Link>
      </li>
      <li className='nav-item px-5 border-4 border-gray-700 rounded-lg shadow-lg bg-grey-300 hover:font-bold hover:bg-blue-400 text-xl font-medium hover:text-2xl'>
        <Link to='/Contact'>Contact</Link>
      </li>
      <li className='nav-item px-5 border-4 border-gray-700 rounded-lg shadow-lg bg-grey-300 hover:font-bold hover:bg-blue-400 text-xl font-medium hover:text-2xl'>
        <Link to='/AboutMe'>About Me</Link>
      </li>
      <li className='nav-item px-5 border-4 border-gray-700 rounded-lg shadow-lg bg-grey-300 hover:font-bold hover:bg-blue-400 text-xl font-medium hover:text-2xl'>
        <Link to='/Resume'>Resume</Link>
      </li>
    </ul>
  );
}