import classes from '../../styles/HeaderBlock.module.css';
import email from '../../assets/images/icons/email.svg';
import phone from '../../assets/images/icons/phone.svg';
import location from '../../assets/images/icons/location.svg';
import github from '../../assets/images/icons/github.svg';
import ball from '../../assets/images/icons/ball.svg';
import { FaTelegramPlane } from 'react-icons/fa';
import photo from '../../assets/images/photo.jpg';
import { FaLinkedin } from 'react-icons/fa6';
import { useSelector } from 'react-redux';

const HeaderBlock = () => {
  const { theme } = useSelector((state) => state.theme);
  return (
    <div
      className={`${classes.wrapper} ${
        theme === 'dark' ? classes.wrapperDark : ''
      }`}
    >
      <div className="container">
        <div className={classes.wrap}>
          <div className={classes.about}>
            <div className={classes.hello}>Hello I'm</div>
            <h1>Serg Shyshov</h1>
            <h3
              className={`${classes.frontend} ${
                theme === 'dark' ? classes.dark : ''
              }`}
            >
              Frontend Developer
            </h3>
            <div
              className={`${classes.contacts} ${
                theme === 'dark' ? classes.dark : ''
              }`}
            >
              <div>
                <img
                  src={email}
                  alt="email"
                  className={`${theme === 'dark' ? classes.darkSvg : ''}`}
                />
                <a
                  className={`${theme === 'dark' ? classes.dark : ''}`}
                  href="mailto:serega1016@ukr.net"
                >
                  serega1016@ukr.net
                </a>
              </div>
              <div>
                <img
                  src={phone}
                  alt="phone"
                  className={`${theme === 'dark' ? classes.darkSvg : ''}`}
                />
                <a
                  className={`${theme === 'dark' ? classes.dark : ''}`}
                  href="tel:+4915906673777"
                >
                  +49 159 066 73 777
                </a>
              </div>
              <div>
                <img
                  src={location}
                  alt="location"
                  className={`${theme === 'dark' ? classes.darkSvg : ''}`}
                />
                <a
                  href="https://www.google.com/maps?q=Karlsruhe,Germany"
                  target="_blank"
                  rel="noreferrer"
                  className={`${theme === 'dark' ? classes.dark : ''}`}
                >
                  Karlsruhe, Germany
                </a>
              </div>
            </div>
            <div className={classes.social}>
              <a href="https://t.me/Serg_17ats" target="_blank">
                <FaTelegramPlane
                  className={`${theme === 'dark' ? classes.darkSvg : ''}`}
                />
              </a>
              <a
                href="https://www.linkedin.com/in/serg-schyschow-654209287"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin
                  style={{ color: 'black' }}
                  className={`${theme === 'dark' ? classes.darkSvg : ''}`}
                />
              </a>
              <a
                href="https://github.com/SergSch"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={github}
                  alt="github"
                  className={`${theme === 'dark' ? classes.darkSvg : ''}`}
                />
              </a>
              <a href="">
                <img
                  src={ball}
                  alt="ball"
                  className={`${theme === 'dark' ? classes.darkSvg : ''}`}
                />
              </a>
            </div>
          </div>
          <div
            className={`${classes.photo} ${
              theme === 'dark' ? classes.photoDark : ''
            }`}
          >
            <img src={photo} alt="frontEnd" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default HeaderBlock;
