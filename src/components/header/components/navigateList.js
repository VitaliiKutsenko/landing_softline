import { $el } from '../../../services';
import './navigateList.scss';

export const NavigateList = () => {
  const arr = [
    'Облачные решения',
    'Кибербезопасность',
    'Импортозамещение',
    'Цифровая трансформация',
  ];

  const ul = $el('ul', { className: 'list' });
  const parseLi = arr.map(item => {
    return $el('li', { innerText: item });
  });

  ul.append(...parseLi);

  return ul;
};
