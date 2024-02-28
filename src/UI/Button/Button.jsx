import classes from '../../styles/Button.module.css';

const Button = ({ text, handleClick }) => {
  return (
    <div onClick={handleClick} className={classes.btn}>
      {text}
    </div>
  );
};
export default Button;
