import { $el } from '../../../../services';
import './employeeInfo.scss';

const arr = [
  {
    title: 'на IT-рынке',
    quantity: '> 30 лет',
  },
  {
    title: 'сотрудников в России',
    quantity: `4600`,
  },
  {
    title: 'городов России',
    quantity: '25',
  },
  {
    title: 'разработчиков',
    quantity: '2000 +',
  },
  {
    title: `сотрудников ежегодно
     проходят оценку и обучение`,
    quantity: '3000 +',
  },
];

export const EmployeeInfo = elem => {
  const container = $el('ul', { className: 'employeeInfo' });
  const listContainer = ({ title, quantity }) => {
    const list = $el('li', { className: 'employeeInfoList' });
    const headerList = $el('h2', { innerText: quantity });
    const footerList = $el('span', { innerText: title });

    list.append(headerList, footerList);

    return list;
  };

  const card = arr.map(listContainer);

  container.append(...card);
  elem.append(container);
};
