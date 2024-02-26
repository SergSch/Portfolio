import Button from '../../UI/Button/Button';
import TitleH2 from '../../UI/TitleH2/TitleH2';
import classes from '../../styles/AboutBlock.module.css';
import coder from '../../assets/images/coder.png';

const AboutBlock = () => {
  return (
    <div className="container">
      <div className={classes.wrapper}>
        <div className={classes.imgBlock}>
          <img src={coder} alt="coder" />
        </div>
        <div className={classes.about}>
          <TitleH2 text="About Me" />
          <p>
            Hello, I'm Serg, a budding web developer based in Karlsruhe. While I
            may not have a vast professional background, my passion for web
            development fuels my journey to create engaging and dynamic online
            experiences. Also I am good at
          </p>
          <div className={classes.skills}>
            <p>html</p>
            <p>css</p>
            <p>javascript</p>
            <p>react</p>
            <p>rtk</p>
            <p>sql</p>
            <p>mongodb</p>
          </div>
          <a
            href="https://drive.google.com/file/d/1hJJjC62j1IdnuvYrexje1_TZ_rr9bzSF/view?usp=sharing"
            target="_blank"
          >
            <Button text="Downlaod CV " />
          </a>
        </div>
      </div>
    </div>
  );
};
export default AboutBlock;
