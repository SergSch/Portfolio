import classes from '../../styles/Header.module.css';
import Navigation from './Navigation/Navigation';

const Header = () => {
  return (
    <div className={classes.header}>
      <div className="container">
        <div className={classes.wrapper}>
          <div className={classes.btn}>Resume</div>
          <Navigation />
        </div>
      </div>
    </div>
  );
};
export default Header;
