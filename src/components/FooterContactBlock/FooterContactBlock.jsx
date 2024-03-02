import { useSelector } from 'react-redux';
import classes from '../../styles/FooterContactBlock.module.css';

const FooterContactBlock = ({ title, img, text }) => {
  const { theme } = useSelector((state) => state.theme);
  return (
    <div
      className={`${classes.wrapper} ${
        theme === 'dark' ? classes.wrapperDark : ''
      }`}
    >
      <div
        className={`${classes.imgBlock} ${
          theme === 'dark' ? classes.imgBlockDark : ''
        }`}
      >
        <img
          src={img}
          alt="picture"
          className={theme === 'dark' ? classes.darkSvg : ''}
        />
      </div>
      <div className={classes.contact}>
        <h3 className={theme === 'dark' ? classes.dark : ''}>{title}</h3>
        <p className={theme === 'dark' ? classes.dark : ''}>{text}</p>
      </div>
    </div>
  );
};
export default FooterContactBlock;
