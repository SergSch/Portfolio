import { useSelector } from 'react-redux';
import classes from '../../styles/HobbysCard.module.css';

const HobbysCard = ({ title, img }) => {
  const { theme } = useSelector((state) => state.theme);

  return (
    <div
      className={`${classes.wrapper} ${
        theme === 'dark' ? classes.wrapperDark : ''
      }`}
    >
      <img src={img} alt={title} className={classes.img} />
      <h4
        className={`${classes.title} ${theme === 'dark' ? classes.dark : ''}`}
      >
        {title}
      </h4>
    </div>
  );
};
export default HobbysCard;
