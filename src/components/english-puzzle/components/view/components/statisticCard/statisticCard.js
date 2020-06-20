import { CLASS_NAMES } from '../../../data/helper';

export default class StatisticCard {
  constructor(container, wordData) {
    this.container = container;
    this.wordData = wordData;
  }

  render() {
    const card = document.createElement('li');
    card.className = CLASS_NAMES.CARD;
    card.insertAdjacentHTML('afterbegin', this.renderCardContent(this.wordData));
    this.container.append(card);
  }

  renderCardContent({ textExample, audioExample }) {
    return `
      <a class="card__link link" href="#" data-audio="${audioExample}">
        <p class="card__content">${textExample}</p>
      </a>
    `;
  }
}
