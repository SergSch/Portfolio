import classes from '../../styles/Hobbys.module.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import TitleH2 from '../../UI/TitleH2/TitleH2';
// import { hobbys } from './../../utils/data';
import HobbysCard from '../../components/HobbysCard/HobbysCard';
import bike from '../../assets/images/hobbys/bike.jpg';
import volley from '../../assets/images/hobbys/volley.jpg';
import ski from '../../assets/images/hobbys/ski.jpg';
import football from '../../assets/images/hobbys/football.jpg';

const Hobbys = () => {
  const hobbys = [
    {
      id: 0,
      title: 'Cycling',
      img: bike,
    },
    {
      id: 1,
      title: 'Volleyball',
      img: volley,
    },
    {
      id: 2,
      title: 'Ski',
      img: ski,
    },
    {
      id: 3,
      title: 'Football',
      img: football,
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
    ],
  };

  return (
    <div className="container">
      <div className={classes.wrapper}>
        <TitleH2 text="My Hobbys" />
        <div>
          <Slider {...settings}>
            {hobbys.map((elem) => (
              <HobbysCard key={elem.id} img={elem.img} title={elem.title} />
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};
export default Hobbys;
