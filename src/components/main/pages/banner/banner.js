import { $el } from '../../../../services';
import banner from '../../../../../public/pics/banner.svg';
import './banner.scss';

export const Banner = elem => {
  const container = $el('div', { className: 'banner' });
  const Banner = () => $el('img', { src: banner });
  const BannerContent = () => {
    const contentWrapper = $el('article', { className: 'contentWrapper' });
    const h2 = $el('section', {
      innerText: 'Поставщик услуг цифровой трансформации\n  и кибербезопасности',
    });
    const link = $el('a', {
      href: 'https://softline.ru',
      innerText: 'На сайт',
      target: 'blank',
      className: 'banner_button',
    });

    contentWrapper.append(h2, link);

    return contentWrapper;
  };

  container.append(Banner(), BannerContent());
  elem.append(container);
};
