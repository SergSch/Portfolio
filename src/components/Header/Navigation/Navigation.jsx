import { NavLink } from 'react-router-dom';
import classes from '../../../styles/Navigation.module.css';
import { GrClose } from 'react-icons/gr';
import { useState } from 'react';
import { SlMenu } from 'react-icons/sl';

const Navigation = () => {
  const [isShow, setIsShow] = useState(false);
  return (
    <nav>
      <ul className={`${classes.wrapper} ${isShow ? classes.activ : ''}`}>
        <GrClose className={classes.close} onClick={() => setIsShow(!isShow)} />
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
            to={'/quiz'}
            className={({ isActive, isPending }) =>
              `${isPending ? 'pending ' : ''} ${
                isActive ? classes.active : ''
              } ${classes.link}`
            }
          >
            Quiz
          </NavLink>
        </li>
        <li className={classes.text}>
          <NavLink
            to={'/weather'}
            className={({ isActive, isPending }) =>
              `${isPending ? 'pending ' : ''} ${
                isActive ? classes.active : ''
              } ${classes.link}`
            }
          >
            Weather
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
      <SlMenu className={classes.menu} onClick={() => setIsShow(!isShow)} />
    </nav>
  );
};
export default Navigation;
