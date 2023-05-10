import icons from '../../icons/symbol-defs.svg';

export const Footer = () => {
  return (
    <footer>
      <h5 className="footer__slogan">
        <svg className="icon footer__icon">
          <use href={`${icons}#icon-movieweb`}></use>
        </svg>
        MOVIEWEB - The best page for movie enthusiast!
      </h5>
    </footer>
  );
};
