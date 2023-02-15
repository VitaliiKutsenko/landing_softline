import { $el } from '../../services';
import logo from '../../../public/pics/logo.svg';
import './header.scss';
import { NavigateList } from './components/navigateList';

export const Header = props => {
  const header = $el('div', { className: 'header' });
  const img = $el('img', { src: logo });

  header.append(img, NavigateList());

  props.append(header);
};
