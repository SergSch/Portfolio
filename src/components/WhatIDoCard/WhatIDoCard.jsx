import { useSelector } from 'react-redux';
import classes from '../../styles/WhatIDoCard.module.css';

const WhatIDoCard = ({ img, title }) => {
  const { theme } = useSelector((state) => state.theme);

  return (
    <div
      className={`${classes.wrapper} ${
        theme === 'dark' ? classes.wrapperDark : ''
      }`}
    >
      <img src={img} alt="img" />
      <h3 className={theme === 'dark' ? classes.dark : ''}>{title}</h3>
      <p className={theme === 'dark' ? classes.dark : ''}>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
        nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
        volutpat.
      </p>
    </div>
  );
};
export default WhatIDoCard;
