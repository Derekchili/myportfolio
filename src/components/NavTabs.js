import { NavLink } from 'react-router-dom';


export default function NavTabs(){
  const pages ={
    Home: '/Home',
    Project: '/Projects',
    Contact: '/Contact',
    AboutMe: '/AboutMe',
    Resume: '/Resume'
  };
  return (
    <header className='flex-full-row'>
    <nav className='bg-light-blue border-2 border-black'>
      <ul className='flex-full-row'>
        {Object.keys(pages).map((key, index) => {
          return (
            <li key={index} className='ml-10 my-2'>
              <NavLink
                to={pages[key]}
                
                className={({ isActive }) => (isActive ? '' : '' )}>
                {key}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
    </header>
  );
}





