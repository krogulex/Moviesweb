import { Outlet, NavLink } from 'react-router-dom';
import { Suspense } from 'react';
import { DotLoader } from 'react-spinners';

export const SharedLayout = () => {
  return (
    <div className="all__container">
      <header>
        <div className="header__content">
          <div className='name__container'>
            <svg
            className='icon'
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              width="512"
              height="512"
              viewBox="0 0 512 512"
            >
              <g id="icomoon-ignore"></g>
              <path d="M0 64v384h512v-384h-512zM96 416h-64v-64h64v64zM96 288h-64v-64h64v64zM96 160h-64v-64h64v64zM384 416h-256v-320h256v320zM480 416h-64v-64h64v64zM480 288h-64v-64h64v64zM480 160h-64v-64h64v64zM192 160v192l128-96z"></path>
            </svg>
            <h2 className="name">MOVIEWEB</h2>
          </div>
          <nav className="nav">
            <NavLink className="nav__link" to="/">
              Home
            </NavLink>
            <NavLink className="nav__link" to="/movie">
              Movie
            </NavLink>
          </nav>
        </div>
      </header>
      <div className="box"></div>
      <div className="outlet__container">
        <Suspense fallback={<DotLoader className='loader' color="#e1a126" />}>
          <Outlet />
        </Suspense>
      </div>
    </div>
  );
};
