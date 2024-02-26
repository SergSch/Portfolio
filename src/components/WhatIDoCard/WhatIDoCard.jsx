import classes from '../../styles/WhatIDoCard.module.css';

const WhatIDoCard = ({ img, title }) => {
  return (
    <div className={classes.wrapper}>
      <img src={img} alt="img" />
      <h3>{title}</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
        nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
        volutpat.
      </p>
    </div>
  );
};
export default WhatIDoCard;
