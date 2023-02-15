import maps from '../../../../../../../public/pics/map.svg';
import { $el, calcPosition } from '../../../../../../services';
import './officeMap.scss';
import { location as locations } from '../../locationSchema';

export const OfficeMap = elem => {
  const mapWrapper = $el('div', { className: 'mapWrapper' });
  const map = $el('img', { src: maps });
  const pointWrapper = $el('ul', { className: 'locationsPoints' });
  const point = locations.map(location => {
    return location.cities.map(item => {
      const elem = $el('li', { className: 'locationsPoints__item' });
      const div = $el('div', { textContent: item.city });

      if ('reverse' in item) {
        div.style.top = '-16px';
      }

      elem.append(div);
      const [left, top] = calcPosition(item.coords.left, item.coords.top);

      elem.dataset.location = location.region;
      elem.style.top = top;
      elem.style.left = left;

      return elem;
    });
  });

  pointWrapper.append(...point.flat());

  mapWrapper.append(map, pointWrapper);
  elem.append(mapWrapper);
};
