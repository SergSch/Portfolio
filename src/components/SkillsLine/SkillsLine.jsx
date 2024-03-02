import { useSelector } from 'react-redux';
import classes from '../../styles/SkillsLine.module.css';

const SkillsLine = ({ text, prcnt }) => {
  const { theme } = useSelector((state) => state.theme);

  return (
    <div className={classes.wrapper}>
      <div className={classes.titleBlock}>
        <h6 className={theme === 'dark' ? classes.dark : ''}>{text}</h6>
        <h6 className={theme === 'dark' ? classes.dark : ''}>{prcnt}%</h6>
      </div>
      <div className={`${theme === 'dark' ? classes.darkLine : classes.line}`}>
        <div
          style={{
            background: `var(--green)`,
            width: `${prcnt}%`,
            height: '5px',
            borderRadius: '10px',
          }}
        ></div>
      </div>
    </div>
  );
};
export default SkillsLine;
