import classes from '../../styles/Header.module.css';
import Navigation from './Navigation/Navigation';
import { MdDarkMode } from 'react-icons/md';
import { CiLight } from 'react-icons/ci';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from '../../store/themeSlice';
import { CiDark } from 'react-icons/ci';

const Header = () => {
  const dispatch = useDispatch();
  const { theme } = useSelector((state) => state.theme);

  return (
    <div
      className={`${classes.header} ${theme === 'dark' ? classes.dark : ''}`}
    >
      <div className="container">
        <div className={classes.wrapper}>
          <div className={classes.btn}>
            <a
              href="https://drive.google.com/file/d/1hJJjC62j1IdnuvYrexje1_TZ_rr9bzSF/view?usp=sharing"
              target="_blank"
              style={{ color: 'var(--white)' }}
            >
              Resume
            </a>
          </div>

          <CiLight
            className={`${classes.lightMode} ${
              theme === 'dark' ? '' : classes.none
            }`}
            onClick={() => dispatch(toggleTheme())}
          />

          <MdDarkMode
            className={`${classes.darkMode} ${
              theme === 'light' ? '' : classes.none
            }`}
            onClick={() => dispatch(toggleTheme())}
          />
          <Navigation />
        </div>
      </div>
    </div>
  );
};
export default Header;
