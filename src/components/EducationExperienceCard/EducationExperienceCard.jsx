import classes from '../../styles/EducationExperienceCard.module.css';

const EducationExperienceCard = ({ title, years, place }) => {
  return (
    <div className={classes.wrapper}>
      <h4>{title}</h4>
      <h4>{place}</h4>
      <h5>{years}</h5>
    </div>
  );
};
export default EducationExperienceCard;
