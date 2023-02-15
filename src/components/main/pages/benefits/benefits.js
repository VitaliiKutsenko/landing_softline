import { $el } from '../../../../services';
import { benefitsSchema } from './benefitsSchema';
import './benefits.scss';

export const Benefits = elem => {
  const container = $el('section', { className: 'benefits' });
  const separate = $el('div', { className: 'separator' });
  const compensationTitle = $el('h2', {
    className: 'compensation_title',
    textContent: 'Компенсационный пакет',
  });
  const motivationWrapper = $el('div', { className: 'motivation_wrapper' });
  const motivationTitle = $el('h2', {
    className: 'motivation_wrapper__title',
    textContent: 'Программа дополнительной мотивации',
  });
  const motivationInfo = $el('p', {
    className: 'motivation_wrapper__info',
    textContent: 'доплата 12% от суммы',
  });

  motivationWrapper.append(motivationTitle, motivationInfo);

  CompensationPrograms(container, benefitsSchema.compensationPackages, compensationTitle);
  container.append(separate);
  CompensationPrograms(container, benefitsSchema.additionalMotivationProgram, motivationWrapper);

  elem.append(container);
};

export const CompensationPrograms = (elem, schema, title) => {
  const wrapper = $el('section', { className: 'compensation' });

  const list = $el('ul', { className: 'compensation_list' });

  const compensationList = schema.map(pack => {
    const item = $el('li', { className: 'compensation_item' });
    const img = $el('img', {
      className: 'compensation_item__img',
      src: pack.src,
    });
    const text = $el('p', {
      className: 'compensation_item__text',
      innerText: pack.title,
    });

    item.append(img, text);

    return item;
  });

  list.append(...compensationList);
  wrapper.append(title, list);
  elem.append(wrapper);
};
