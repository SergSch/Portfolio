import classes from '../../styles/Button.module.css';

const Button = ({ text }) => {
  return <div className={classes.btn}>{text}</div>;
};
export default Button;
