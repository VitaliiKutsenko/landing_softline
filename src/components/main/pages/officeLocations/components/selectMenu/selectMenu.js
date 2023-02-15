import './selectMenu.scss';
import { $el } from '../../../../../../services';
import { location } from '../../locationSchema';
import { replaceClass } from '../selectLocation/selectLocation';
import arrow from '../../../../../../../public/pics/arrow.svg';

export const SelectMenu = elem => {
  const container = $el('div', { className: 'selectMenuWrapper' });
  const citiesModal = $el('div', { className: 'modal_wrapper' });
  const regionLists = location.map(item => {
    const selectWrapper = $el('ul', {
      className: 'cities_list',
      textContent: item.region,
    });

    if (item.cities.length > 1) {
      const citiesList = item.cities.map(({ city }) => {
        return $el('li', {
          className: 'cities_list__item',
          textContent: city,
        });
      });

      selectWrapper.append(...citiesList);
    }

    return selectWrapper;
  });

  citiesModal.append(...regionLists);
  container.append(citiesModal);
  elem.append(container);
};
