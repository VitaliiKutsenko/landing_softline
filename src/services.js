export const $el = (element, options = {}) => {
  const el = document.createElement(element);

  for (let [keys, values] of Object.entries(options)) {
    if (keys in el) {
      el[keys] = values;
    }
  }

  return el;
};

export const calcPosition = (left, top) => {
  const heightContainer = 604;
  const widthContainer = 1190;
  const width = window.screen.width < 590 ? 300 : 100;

  const calcLeft = `${(left / widthContainer) * width}%`;
  const calcTop = `${(top / heightContainer) * 100}%`;

  return [calcLeft, calcTop];
};
