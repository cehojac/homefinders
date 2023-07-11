import Swiper from 'swiper/bundle';
import "swiper/swiper-bundle.min.css";

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

