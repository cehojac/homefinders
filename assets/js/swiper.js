// import Swiper bundle with all modules installed
import Swiper from 'swiper/bundle';

// import styles bundle
import "swiper/swiper-bundle.min.css";
// import "swiper/swiper.min.css";

// import "./swiper.min.css"

// import Swiper from 'swiper';

// import Swiper and modules styles
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';

const initializeSwipers = () => {

  const sliders = document.querySelectorAll(".swiper-container");

  for (const slide of sliders) {
    const nextEl = slide.querySelector(".swiper-button-next");
    const prevEl = slide.querySelector(".swiper-button-prev");
    const options = JSON.parse(slide.dataset.swiper);

    console.log(slide.dataset.swiper);

    const breakpoints = {};
    for (const breakpoint in options.breakpoints) {
      breakpoints[breakpoint] = {
        slidesPerView: options.breakpoints[breakpoint].slidesPerView,
      };
    }

    const carrusel = new Swiper(slide, {
      loop: true,
      slidesPerView: options.slidesPerView,
      spaceBetween: options.spaceBetween,
      navigation: {
        nextEl,
        prevEl,
      },
      breakpoints: breakpoints,
    });
  }
  
};

export default initializeSwipers;

