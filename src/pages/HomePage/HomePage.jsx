import AboutBlock from '../../layouts/AboutBlock/AboutBlock';
import EducationExpirience from '../../layouts/EducationExpirience/EducationExpirience';
import HeaderBlock from '../../layouts/HeaderBlock/HeaderBlock';
import Hobbys from '../../layouts/Hobbys/Hobbys';
import Skills from '../../layouts/Skills/Skills';
import WhatIDo from '../../layouts/WhatIDo/WhatIDo';

const HomePage = () => {
  return (
    <div>
      <HeaderBlock />
      <AboutBlock />
      <WhatIDo />
      <Skills />
      <EducationExpirience />
      <Hobbys />
    </div>
  );
};
export default HomePage;
