import classes from '../../styles/Header.module.css';
import Navigation from './Navigation/Navigation';

const Header = () => {
  return (
    <div className={classes.header}>
      <div className="container">
        <div className={classes.wrapper}>
          <div className={classes.btn}>
            <a
              href="https://drive.google.com/file/d/1SW6CwW7YwTvAnewopbejeJYuNsoh_Vam/view?usp=sharing"
              target="_blank"
              style={{ color: 'var(--white)' }}
            >
              Resume
            </a>
          </div>
          <Navigation />
        </div>
      </div>
    </div>
  );
};
export default Header;
