import TitleH2 from '../../UI/TitleH2/TitleH2';
import classes from '../../styles/WhatIDo.module.css';
import ui from '../../assets/images/whatIdoIcons/ui.svg';
import tag from '../../assets/images/whatIdoIcons/tag.svg';
import app from '../../assets/images/whatIdoIcons/appDev.svg';
import WhatIDoCard from '../../components/WhatIDoCard/WhatIDoCard';

const WhatIDo = () => {
  return (
    <div className="container">
      <div className={classes.wrapper}>
        <TitleH2 text="What I do" />
        <div className={classes.wrap}>
          <WhatIDoCard img={ui} title="UI Design" />
          <WhatIDoCard img={tag} title="Web Development" />
          <WhatIDoCard img={app} title="Database" />
        </div>
      </div>
    </div>
  );
};
export default WhatIDo;
