import { $el } from '../../../../services';
import left from './../../../../../public/pics/Left pattern.svg';
import right from './../../../../../public/pics/Right pattern.svg';
import './mission.scss';

const BannerContent = elem => {
  const section = $el('section', { className: 'mission_content' });
  const missionHeader = $el('h2', {
    className: 'mission_content__header',
    textContent: 'Миссия Softline',
  });
  const missionMain = $el('section', {
    className: 'mission_content__main',
    innerText: `Мы помогаем организациям трансформироваться, работать эффективно и безопасно
     в условиях цифровой экономики.`,
  });

  section.append(missionHeader, missionMain);
  elem.append(section);
};

const BannerIMG = elem => {
  const leftAdditionalImg = $el('img', { src: left });
  const rightAdditionalImg = $el('img', { src: right });

  elem.append(leftAdditionalImg, rightAdditionalImg);
};

export const Mission = elem => {
  const container = $el('section', { className: 'mission' });

  BannerContent(container);
  BannerIMG(container);
  elem.append(container);
};
