import { $el } from '../../../../services';
import { OfficeMap } from './components/officeMap/officeMap';
import { SelectLocation } from './components/selectLocation/selectLocation';
import { SelectMenu } from './components/selectMenu/selectMenu';
import './locations.scss';

export const OfficeLocations = elem => {
  const container = $el('section', { className: 'company_info' });

  SelectLocation(container);
  OfficeMap(container);
  SelectMenu(container);
  elem.append(container);
};
