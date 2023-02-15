import { $el } from '../../services';

import { Benefits } from './pages/benefits/benefits';
import { Banner } from './pages/banner/banner';
import { BusinessDirections } from './pages/BusinessDirections/businessDirections';
import { AboutUs } from './pages/aboutUs/aboutUs';
import { OfficeLocations } from './pages/officeLocations/locations';
import { EmployeeInfo } from './pages/employeeInfo/employeeInfo';
import { Mission } from './pages/mission/mission';
import './main.scss';
import { PhotoGallery } from './pages/photoGallery/photoGallery';

export const Main = props => {
  const main = $el('main');

  Banner(main);
  AboutUs(main);
  EmployeeInfo(main);
  OfficeLocations(main);
  Mission(main);
  BusinessDirections(main);
  Benefits(main);
  PhotoGallery(main);
  props.append(main);
};
