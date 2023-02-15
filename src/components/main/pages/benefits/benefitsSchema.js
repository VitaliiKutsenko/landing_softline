import dms from './../../../../../public/pics/compensationPackages/Group 26422.svg';
import bDay from './../../../../../public/pics/compensationPackages/Group 26422-1.svg';
import mobileNetwork from './../../../../../public/pics/compensationPackages/Group 26422-2.svg';
import sportsDiscount from './../../../../../public/pics/compensationPackages/Group 26422-3.svg';
import lti from './../../../../../public/pics/compensationPackages/Group 26423.svg';
import officeEquipment from './../../../../../public/pics/additionalMotivationPrograms/Group 26422.svg';
import houseCredit from './../../../../../public/pics/additionalMotivationPrograms/Group 26422-2.svg';

export const benefitsSchema = {
  compensationPackages: [
    {
      title: 'Дмс',
      src: dms,
    },
    {
      title: `Выходной
      в день рождения`,
      src: bDay,
    },
    {
      title: `Корпоративная 
      мобильная связь`,
      src: mobileNetwork,
    },
    {
      title: `Корпоративные скидки 
      на спорт`,
      src: sportsDiscount,
    },
    {
      title: 'LTI',
      src: lti,
    },
  ],
  additionalMotivationProgram: [
    {
      title: 'Оргтехники',
      src: officeEquipment,
    },
    {
      title: 'ДМС',
      src: dms,
    },
    {
      title: 'Ипотеки',
      src: houseCredit,
    },
  ],
};
