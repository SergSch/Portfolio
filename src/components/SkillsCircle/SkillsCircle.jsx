import classes from '../../styles/SkillsCircle.module.css';
import circle from '../../assets/images/circle.png';

const SkillsCircle = ({ text, prcnt }) => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.wrap}>
        <img src={circle} alt="circle" className={classes.img} />
        <p className={classes.prcnt}>{prcnt}%</p>
      </div>
      <h6>{text}</h6>
    </div>
  );
};
export default SkillsCircle;
