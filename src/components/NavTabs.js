import React from 'react';
import { Link } from 'react-router-dom';

export default function NavTabs(){
  return(
    <ul className='nav nav-tabs flex flex-grow justify-center m-4 h-screen bg-blue-400'>
      <li className='nav-item px-5'>
        <Link to='/'>Home</Link>
      </li>
      <li className='nav-item px-5'>
        <Link to='/Projects'>Projects</Link>
      </li>
      <li className='nav-item px-5'>
        <Link to='/Contact'>Contact</Link>
      </li>
      <li className='nav-item px-5'>
        <Link to='/AboutMe'>About Me</Link>
      </li>
      <li className='nav-item px-5'>
        <Link to='/Resume'>Resume</Link>
      </li>
    </ul>
  );
}