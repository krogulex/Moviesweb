import { Outlet, NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Suspense } from 'react';
import { DotLoader } from 'react-spinners';

import icons from '../../icons/symbol-defs.svg';

export const SharedLayout = () => {
  return (
    <div className="all__container">
      <header>
        <div className="header__content">
        <Link to="/">
          <div className="name__container">
            <svg className="icon name__icon">
              <use href={`${icons}#icon-movieweb`}></use>
            </svg>
            <h2 className="name">MOVIEWEB</h2>
          </div>
          </Link>
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
        <Suspense fallback={<DotLoader className="loader" color="#e1a126" />}>
          <Outlet />
        </Suspense>
      </div>
    </div>
  );
};
