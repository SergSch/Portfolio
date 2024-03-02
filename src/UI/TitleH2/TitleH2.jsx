import classes from '../../styles/TitleH2.module.css';

const TitleH2 = ({ text, color }) => {
  const style = color ? { color: 'var(--lightDark)' } : {};

  return (
    <div className={classes.title} style={style}>
      {text}
    </div>
  );
};

export default TitleH2;
