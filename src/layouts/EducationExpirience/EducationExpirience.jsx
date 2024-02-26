import TitleH2 from '../../UI/TitleH2/TitleH2';
import EducationExperienceCard from '../../components/EducationExperienceCard/EducationExperienceCard';
import classes from '../../styles/EducationExpirience.module.css';

const EducationExpirience = () => {
  return (
    <div className={classes.wrapper}>
      <div className="container">
        <div className={classes.wrap}>
          <div className={classes.education}>
            <TitleH2 text="Education" />
            <div className={classes.educationBlock}>
              <EducationExperienceCard
                title="International Tech School Tel-Ran"
                place="Berlin, Germany"
                years="April 2023 - April 2024"
              />
              <EducationExperienceCard
                title="Master’s degree at the Ukrainian State University of Railway Transport in Mechanik and Energy"
                place="Charkiw, Ukraine "
                years="2008 - 2010"
              />
              <EducationExperienceCard
                title="Bachelor’s and Master’s degrees in Economics at Kharkiv National Technical University of Agriculture"
                place="Charkiw, Ukraine "
                years="2002 - 2008"
              />
            </div>
          </div>
          <div className={classes.experience}>
            <TitleH2 text="Work Experience" />
            <div className={classes.expirienceBlock}>
              <EducationExperienceCard
                title="Moved to Germany orientation phase and diverse
                lanquage courses
                "
                place=""
                years="October 2017 - April 2023"
              />
              <EducationExperienceCard
                title="Skilled Mechanical Technician
                Dambach Lager Systeme"
                place="Bischweier, Germany"
                years="May 2018 - August 2022"
              />
              <EducationExperienceCard
                title="Senior Master. Ukrainian State Center for Operation of Specialized Railcars (Ukrspetswagon)"
                place="Charkiw, Ukraine"
                years="Februar 2010 - March 2017"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default EducationExpirience;
