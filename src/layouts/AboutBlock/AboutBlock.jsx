import Button from '../../UI/Button/Button';
import TitleH2 from '../../UI/TitleH2/TitleH2';
import classes from '../../styles/AboutBlock.module.css';
import coder from '../../assets/images/coder.png';
import { useSelector } from 'react-redux';

const AboutBlock = () => {
  const { theme } = useSelector((state) => state.theme);

  return (
    <div className={`${theme === 'dark' ? 'dark' : ''}`}>
      <div className="container">
        <div
          className={`${classes.wrapper} ${
            theme === 'dark' ? classes.wrapperDark : ''
          }`}
        >
          <div className={classes.imgBlock}>
            <img src={coder} alt="coder" />
          </div>
          <div className={classes.about}>
            <TitleH2
              text="About Me"
              color={`${theme === 'dark' ? 'color' : ''}`}
            />
            <p className={theme === 'dark' ? classes.dark : ''}>
              Hello, I'm Serg, a budding web developer based in Karlsruhe. While
              I may not have a vast professional background, my passion for web
              development fuels my journey to create engaging and dynamic online
              experiences. Also I am good at
            </p>
            <div className={classes.skills}>
              <p className={theme === 'dark' ? classes.dark : ''}>html</p>
              <p className={theme === 'dark' ? classes.dark : ''}>css</p>
              <p className={theme === 'dark' ? classes.dark : ''}>javascript</p>
              <p className={theme === 'dark' ? classes.dark : ''}>react</p>
              <p className={theme === 'dark' ? classes.dark : ''}>rtk</p>
              <p className={theme === 'dark' ? classes.dark : ''}>sql</p>
              <p className={theme === 'dark' ? classes.dark : ''}>mongodb</p>
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
    </div>
  );
};
export default AboutBlock;
