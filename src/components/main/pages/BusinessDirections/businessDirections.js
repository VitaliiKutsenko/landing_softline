import { $el } from '../../../../services';
import './businessDirections.scss';
import { businessDirectionsSchema } from './businessDirectionsSchema';

const Title = elem => {
  const title = $el('section', {
    className: 'businessDirections_title',
    textContent: 'Направления бизнеса',
  });

  elem.append(title);
};

const Section = (elem, item) => {
  const section = $el('section', { className: 'businessLayout_section' });

  const header = $el('h3', {
    className: 'businessLayout_section__header',
    innerText: item.title,
  });

  const main = $el('section', {
    className: 'businessLayout_section__main',
    innerText: item.info,
  });

  section.append(header, main);
  elem.append(section);
};

const BusinessLayout = elem => {
  const container = $el('ul', { className: 'businessLayout_container' });

  const businessList = businessDirectionsSchema.map(item => {
    const list = $el('li', { className: 'businessLayout_list' });
    const img = $el('img', {
      className: 'businessLayout_list_img',
      src: item.src,
    });

    list.append(img);

    Section(list, item);

    return list;
  });

  container.append(...businessList);
  elem.append(container);
};

export const BusinessDirections = elem => {
  const container = $el('section', { className: 'businessDirections' });

  Title(container);
  BusinessLayout(container);
  elem.append(container);
};
