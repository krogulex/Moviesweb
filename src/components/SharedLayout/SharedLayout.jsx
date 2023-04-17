import { Outlet, NavLink } from 'react-router-dom';
import { Header, Link, Container } from '../App.stylled';
import { Suspense } from 'react';
import css from './SharedLayout.module.css'

export const SharedLayout = () => {
  return (
    <div className={css.container}>
      <header className={css.header}>
        <nav className={css.nav}>
          <NavLink className={css.navLink} to="/">Home</NavLink>
          <NavLink className={css.navLink} to="/movie">Movie</NavLink>
        </nav>
      </header>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};
