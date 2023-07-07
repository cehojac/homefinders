// import Swiper bundle with all modules installed
import Swiper from 'swiper/bundle';

// import styles bundle
import 'swiper/css/bundle';

const propertyDetail = new Swiper('.propertyDetail', {
    // Optional parameters
    // direction: 'vertical',
    loop: true,
    
    autoplay: {
        delay: 3000,
    },
    
});