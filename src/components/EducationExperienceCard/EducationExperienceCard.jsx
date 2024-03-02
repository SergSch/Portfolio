import { useSelector } from 'react-redux';
import classes from '../../styles/EducationExperienceCard.module.css';

const EducationExperienceCard = ({ title, years, place }) => {
  const { theme } = useSelector((state) => state.theme);
  return (
    <div
      className={`${classes.wrapper} ${
        theme === 'dark' ? classes.wrapperDark : ''
      }`}
    >
      <h4 className={theme === 'dark' ? classes.dark : ''}>{title}</h4>
      <h4 className={theme === 'dark' ? classes.dark : ''}>{place}</h4>
      <h5 className={theme === 'dark' ? classes.dark : ''}>{years}</h5>
    </div>
  );
};
export default EducationExperienceCard;
