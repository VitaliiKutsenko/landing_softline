import './photoGallery.scss';
import { $el } from '../../../../services';
import Swiper from 'swiper/bundle';

import slide_1 from './../../../../../public/pics/photo/Слайд1.png';
import slide_2 from './../../../../../public/pics/photo/Слайд2.png';
import slide_3 from './../../../../../public/pics/photo/Слайд3.png';
import slide_4 from './../../../../../public/pics/photo/Слайд4.png';
import slide_5 from './../../../../../public/pics/photo/Слайд5.png';

const slides = [slide_1, slide_2, slide_3, slide_4, slide_5];
const PhotoSlider = (elem, nav) => {
  const container = $el('div', { className: 'slider swiper' });

  container.append(nav);
  const wrapper = $el('div', { className: 'slider_list swiper-wrapper' });

  const photos = slides.map(photo => {
    const slide = $el('div', { className: 'slider_list__item swiper-slide' });
    const img = $el('img', {
      src: photo,
      loading: 'lazy',
    });

    slide.append(img);

    return slide;
  });

  wrapper.append(...photos);
  const prev = $el('div', { className: 'slider-button__prev swiper-button-prev' });
  const next = $el('div', { className: 'slider-button__next swiper-button-next' });
  const pagination = $el('div', { className: 'slider_pagination swiper-pagination' });

  container.append(wrapper, prev, next, pagination);

  elem.append(container);

  new Swiper(container, {
    navigation: {
      nextEl: next,
      prevEl: prev,
    },
    pagination: {
      el: pagination,
      clickable: true,
    },
    loop: true,
    slidesPerView: 1,
  });
};

export const PhotoGallery = elem => {
  const container = $el('section', { className: 'photoGallery' });
  const navigation = $el('div', { className: 'photoGallery_nav' });
  const title = $el('h2', {
    className: 'photoGallery_nav__title',
    textContent: 'Корпоративная жизнь',
  });

  navigation.append(title);
  // container.append(navigation);
  PhotoSlider(container, navigation);

  elem.append(container);
};
