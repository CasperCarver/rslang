import Selector from '../selector/selector';

export default class Menu {
  constructor(onLevelChangeHandler, onRoundChangeHandler) {
    this.elements = {
      menu: null,
      selectors: {
        level: null,
        round: null,
      },
    };

    this.onChangHandlers = {
      level: onLevelChangeHandler,
      round: onRoundChangeHandler,
    };

    this.init();
  }

  renderSelector(valuesCount, containerClass, name) {
    const container = this.elements.menu.querySelector(`.${containerClass}`);

    const values = new Array(valuesCount).fill(0).map((item, index) => index);
    const contents = values.map((item) => item + 1);
    this.elements.selectors[name] = new Selector(values, contents, [{ event: 'change', handler: this.onChangHandlers[name] }], [`navigation__${name}`, name, 'selector'], name);
    container.append(this.elements.selectors[name].render());
  }

  renderLevelSelector(levelsCount = 6) {
    this.renderSelector(levelsCount, 'navigation__box_left', 'level');
  }

  renderRoundSelector(roundsCount = 60) {
    this.renderSelector(roundsCount, 'navigation__box_right', 'round');
  }

  init() {
    this.elements.menu = document.querySelector('.navigation');

    this.renderLevelSelector();
  }
}