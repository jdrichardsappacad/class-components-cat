import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
      <div>
        <div className='link-container'>
          <NavLink
            activeClassName='active-nav'
            className='nav-button'
            exact
            to='/'
          >
            {' '}
            Home{' '}
          </NavLink>
          <NavLink
            activeClassName='active-nav'
            className='nav-button'
            to='/titan'
          >
            {' '}
            Titan{' '}
          </NavLink>
          <NavLink
            activeClassName='active-nav'
            className='nav-button'
            to='/kuiper'
          >
            {' '}
            Kuiper{' '}
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Navbar;
