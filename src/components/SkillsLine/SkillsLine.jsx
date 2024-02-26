import classes from '../../styles/SkillsLine.module.css';

const SkillsLine = ({ text, prcnt }) => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.titleBlock}>
        <h6>{text}</h6>
        <h6>{prcnt}%</h6>
      </div>
      <div className={classes.line}>
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
