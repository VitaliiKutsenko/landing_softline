import { $el } from '../../../../../../services';
import './selectLocation.scss';
import { location } from '../../locationSchema';
import arrow from './../../../../../../../public/pics/arrow.svg';

export const replaceClass = (item, addClass, removeClass) => {
  item.classList.add(addClass);
  item.classList.remove(removeClass);
};

export const SelectLocation = elem => {
  const container = $el('div', { className: 'selectWrapper' });
  const Button = () => {
    const button = $el('button', {
      className: 'select_button',
      textContent: 'Офисы Softline',
    });

    button.addEventListener('click', e => {
      e.target.classList.toggle('active');
      e.target.closest('.company_info').lastElementChild.classList.toggle('show');
    });

    button.append($el('img', { src: arrow }));

    return button;
  };

  const addItem = [{ region: 'Все' }, ...location];

  const regionLists = addItem.map(item => {
    return $el('li', {
      textContent: item.region,
      className: 'select_list__item',
    });
  });

  regionLists.forEach(region => {
    region.addEventListener('click', e => {
      const label = e.target.textContent;

      const mapWrapper = document.querySelectorAll('.locationsPoints__item');

      regionLists.forEach(items => {
        if (items.textContent !== label) {
          items.classList.remove('open');
        }
      });

      mapWrapper.forEach(item => {
        switch (label) {
          case item.dataset.location:
            replaceClass(item, 'visible', 'hidden');
            e.target.classList.add('open');
            break;

          case 'Все':
            replaceClass(item, 'visible', 'hidden');
            e.target.classList.add('open');
            break;

          default:
            if (!item.classList.contains('hidden')) {
              replaceClass(item, 'hidden', 'visible');
            }
        }
      });
    });
  });

  const selectWrapper = $el('ul', { className: 'select_list' });

  selectWrapper.append(...regionLists);

  container.append(Button(), selectWrapper);
  elem.append(container);
};
