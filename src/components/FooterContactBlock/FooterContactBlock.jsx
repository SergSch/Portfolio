import classes from '../../styles/FooterContactBlock.module.css';

const FooterContactBlock = ({ title, img, text }) => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.imgBlock}>
        <img src={img} alt="picture" />
      </div>
      <div className={classes.contact}>
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
    </div>
  );
};
export default FooterContactBlock;
