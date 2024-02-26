import TitleH2 from '../../UI/TitleH2/TitleH2';
import SkillsCircle from '../../components/SkillsCircle/SkillsCircle';
import SkillsLine from '../../components/SkillsLine/SkillsLine';
import classes from '../../styles/Skills.module.css';

const Skills = () => {
  return (
    <div className="container">
      <div className={classes.wrapper}>
        <div className={classes.technical}>
          <TitleH2 text="Technical Skills" />
          <div className={classes.skillsLines}>
            <SkillsLine text="HTML" prcnt="86" />
            <SkillsLine text="CSS" prcnt="80" />
            <SkillsLine text="Javascript" prcnt="75" />
            <SkillsLine text="React" prcnt="70" />
            <SkillsLine text="SQL" prcnt="60" />
            <SkillsLine text="MongoDB" prcnt="55" />
          </div>
        </div>
        <div className={classes.professional}>
          <TitleH2 text="Professional Skills" />
          <div className={classes.skillsCircles}>
            <SkillsCircle prcnt={95} text="Communication" />
            <SkillsCircle prcnt={80} text="Team Work" />
            <SkillsCircle prcnt={80} text="Project Management" />
            <SkillsCircle prcnt={60} text="Creativity" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Skills;
