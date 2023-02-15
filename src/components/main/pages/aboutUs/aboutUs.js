import { $el } from '../../../../services';
import './aboutUs.scss';

const textAbout = `Softline – ведущий поставщик IT-решений и сервисов.*
  Мы предлагаем комплексные IT-решения, облака, программное
   и аппаратное обеспечение, решения по цифровой трансформации
    и кибербезопасности, а также широкий спектр IT-услуг.`;

export const AboutUs = elem => {
  const [upgradeText, ...args] = textAbout.split(` `);

  const container = $el('section', { className: 'aboutUs' });
  const aboutText = $el('article', {
    className: 'aboutUs_info',
    innerText: args.join(` `),
  });

  aboutText.insertAdjacentHTML('afterbegin', `<span>${upgradeText}</span> `);

  container.append(aboutText);

  elem.append(container);
};
