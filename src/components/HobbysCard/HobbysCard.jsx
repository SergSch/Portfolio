import classes from '../../styles/HobbysCard.module.css';

const HobbysCard = ({ title, img }) => {
  return (
    <div className={classes.wrapper}>
      <img src={img} alt={title} className={classes.img} />
      <h4 className={classes.title}>{title}</h4>
    </div>
  );
};
export default HobbysCard;
