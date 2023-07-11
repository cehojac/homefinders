import Swiper from 'swiper/bundle';
import "swiper/swiper-bundle.min.css";

// const propertyDetail = new Swiper('.propertyDetail', {
//     autoplay: {
//         delay: 3000,
//     },
    
// });

const testimonial = new Swiper('.testimonial', {
    pagination: {
        el: ".swiper-pagination",
        clickable: true
    },
    autoplay: {
        delay: 3000
    },
})