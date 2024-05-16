import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/css';

export const useInsightSlider = () => {
  new Swiper('.insights__swiper', {
    modules: [Navigation],
    loop: true,
    slidesPerView: 1,
    spaceBetween: 32,
    navigation: {
      nextEl: '.insights__swiper-button-next',
      prevEl: '.insights__swiper-button-prev',
    },
    breakpoints: {
      993: {
        slidesPerView: 2,
        spaceBetween: 32,
      },
      769: {
        slidesPerView: 1.5,
      },
      577: {
        slidesPerView: 1.3,
        spaceBetween: 16,
      },
    },
  });
};

export const useTestimonialsSlider = () => {
  new Swiper('.testimonials__swiper', {
    modules: [Navigation],
    loop: false,
    slidesPerView: 'auto',
    navigation: {
      nextEl: '.testimonials__swiper-button-next',
      prevEl: '.testimonials__swiper-button-prev',
    },
  });
};
