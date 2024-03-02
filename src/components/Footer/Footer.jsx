import TitleH2 from '../../UI/TitleH2/TitleH2';
import classes from '../../styles/Footer.module.css';
import FooterContactBlock from '../FooterContactBlock/FooterContactBlock';
import arrow from '../../assets/images/footerArrowsvg.svg';
import email from '../../assets/images/icons/email.svg';
import Form from '../../layouts/Form/Form';
import { useSelector } from 'react-redux';

const Footer = () => {
  const { theme } = useSelector((state) => state.theme);
  return (
    <div
      className={`${classes.wrapper} ${
        theme === 'dark' ? classes.wrapperDark : ''
      }`}
    >
      <div className="container">
        <div className={classes.wrap}>
          <TitleH2
            text="Contact Me"
            color={`${theme === 'dark' ? 'color' : ''}`}
          />
          <div className={classes.contacts}>
            <div className={classes.address}>
              <FooterContactBlock
                title="Address"
                text="Karlsruhe, Germany"
                img={arrow}
              />
              <FooterContactBlock
                title="Email"
                text="serega1016@ukr.net"
                img={email}
              />
            </div>
            <div className={classes.formBlock}>
              <Form />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
