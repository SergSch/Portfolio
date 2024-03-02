import { NavLink } from 'react-router-dom';
import classes from '../../../styles/Navigation.module.css';
import { GrClose } from 'react-icons/gr';
import { useRef, useState } from 'react';
import { SlMenu } from 'react-icons/sl';
import { useClickOutside } from '../../../customHooks/useClickOutside';
import { useSelector } from 'react-redux';

const Navigation = () => {
  const [isShow, setIsShow] = useState(false);

  const menuRef = useRef(null);
  useClickOutside(menuRef, () => {
    setIsShow(false);
  });

  const { theme } = useSelector((state) => state.theme);

  return (
    <nav>
      <ul
        className={`${classes.wrapper} ${isShow ? classes.activ : ''}`}
        ref={menuRef}
      >
        <GrClose className={classes.close} onClick={() => setIsShow(!isShow)} />
        <li className={classes.text}>
          <NavLink
            to={'/'}
            className={({ isActive, isPending }) =>
              `${isPending ? 'pending ' : ''} ${
                isActive ? classes.active : ''
              } ${theme === 'dark' ? classes.dark : classes.link}`
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
              }  ${theme === 'dark' ? classes.dark : classes.link}`
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
              }  ${theme === 'dark' ? classes.dark : classes.link}`
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
              }  ${theme === 'dark' ? classes.dark : classes.link}`
            }
          >
            Recipes
          </NavLink>
        </li>
      </ul>
      <SlMenu
        className={`${classes.menu} ${
          theme === 'dark' ? classes.menuDark : ''
        }`}
        onClick={() => setIsShow(!isShow)}
      />
    </nav>
  );
};
export default Navigation;
