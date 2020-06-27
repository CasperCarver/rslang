import { CLASS_NAMES } from '../../../../common/speakit.constants';
import { createCard, createCardWithTranslation } from '../../../../common/speakit.utils';

export default class PageCard {
  constructor(container, cardData, translationData = null) {
    this.container = container;
    this.cardData = cardData;
    this.translationData = translationData;
  }

  render() {
    const card = document.createElement('li');
    card.className = CLASS_NAMES.CARD;
    card.innerHTML = this.translationData
      ? createCardWithTranslation(this.cardData, this.translationData)
      : createCard(this.cardData);
    this.container.append(card);
  }
}
