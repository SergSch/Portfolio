import classes from '../../styles/SkillsCircle.module.css';
import circle from '../../assets/images/circle.png';
import { useSelector } from 'react-redux';

const SkillsCircle = ({ text, prcnt }) => {
  const { theme } = useSelector((state) => state.theme);
  return (
    <div className={classes.wrapper}>
      <div className={classes.wrap}>
        <img src={circle} alt="circle" className={classes.img} />
        <p
          className={`${classes.prcnt} ${theme === 'dark' ? classes.dark : ''}`}
        >
          {prcnt}%
        </p>
      </div>
      <h6 className={theme === 'dark' ? classes.dark : ''}>{text}</h6>
    </div>
  );
};
export default SkillsCircle;
