import { NavLink } from 'react-router-dom';
import classes from '../../../styles/Navigation.module.css';

const Navigation = () => {
  return (
    <nav>
      <ul className={classes.wrapper}>
        <li className={classes.text}>
          <NavLink
            to={'/'}
            className={({ isActive, isPending }) =>
              `${isPending ? 'pending ' : ''} ${
                isActive ? classes.active : ''
              } ${classes.link}`
            }
          >
            Home
          </NavLink>
        </li>
        <li className={classes.text}>
          <NavLink
            to={'/about'}
            className={({ isActive, isPending }) =>
              `${isPending ? 'pending ' : ''} ${
                isActive ? classes.active : ''
              } ${classes.link}`
            }
          >
            About
          </NavLink>
        </li>
        <li className={classes.text}>
          <NavLink
            to={'/skills'}
            className={({ isActive, isPending }) =>
              `${isPending ? 'pending ' : ''} ${
                isActive ? classes.active : ''
              } ${classes.link}`
            }
          >
            Skills
          </NavLink>
        </li>
        <li className={classes.text}>
          <NavLink
            to={'/recipes'}
            className={({ isActive, isPending }) =>
              `${isPending ? 'pending ' : ''} ${
                isActive ? classes.active : ''
              } ${classes.link}`
            }
          >
            Recipes
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
export default Navigation;
