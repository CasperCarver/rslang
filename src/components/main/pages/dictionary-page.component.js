import Dictionary from '../components/dictionary/dictionary.app';

const dictionary = new Dictionary();

export const dictionaryPageComponent = {
  render: () => `
      <section class="section__dictionary">
        <div class="wrapper">
            <h2 class="dictionary__title">Knowlege is power</h2>
            <div class="cards__inner">
                <div class="cards__item">
                    <img src="./assets/main/img/learnes-words.png" class="cards__img" alt="learned-word">
                    <p class="cards__name">learned words</p>
                    <button class="cards__btn dictionary__learned-btn">open</button>
                </div>
                <div class="cards__item">
                    <img src="./assets/main/img/difficult-word.png" class="cards__img" alt="difficult-word">
                    <p class="cards__name">difficult words</p>
                    <button class="cards__btn dictionary__difficult-btn">open</button>
                </div>
                <div class="cards__item">
                    <img src="./assets/main/img/del-words.png" class="cards__img" alt="deleted-word">
                    <p class="cards__name">deleted words</p>
                    <button class="cards__btn dictionary__deleted-btn">open</button>
                </div>
            </div>
            <div class="dictionary__table"></div>
        </div>
    <section>
    `,
  init: () => dictionary.init(),
};
