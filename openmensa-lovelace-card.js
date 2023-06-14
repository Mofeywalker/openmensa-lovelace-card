
class OpenMensaCard extends HTMLElement {
  constructor() {
    super();
    this.userLang = navigator.language || navigator.userLanguage;
  }
  set hass(hass) {
    if (!this.content) {
      const card = document.createElement('ha-card');
      card.header = this.config.header || 'OpenMensa';
      this.content = document.createElement('div');
      this.content.style.padding = '0 16px 16px';
      card.appendChild(this.content);
      this.appendChild(card);
    }
    this.content.innerHTML = ``;

    const entityId = this.config.entity;
    const state = hass.states[entityId].state;
    if (state === "online") {
      const mealCategories = hass.states[entityId].attributes.categories;
      mealCategories.forEach(element => {
        let catDiv = document.createElement('div');
        catDiv.style.paddingBottom = '16px';
        let headline = document.createElement('b');
        headline.innerHTML = `${element.name}`;
        catDiv.appendChild(headline);

        element.meals.forEach(meal => {
          let mealElement = document.createElement('span');
          mealElement.innerHTML = `</br>${meal.name}`;
          catDiv.appendChild(mealElement);
        });

        this.content.appendChild(catDiv);
      });
    } else {
      let noMealsElement = document.createElement('div');
      if (this.userLang === 'de') {
        noMealsElement.innerText = `Keine Daten verfügbar`;
      } else {
        noMealsElement.innerText = `No data available`;
      }
      this.content.appendChild(noMealsElement);
    }
  }

  setConfig(config) {
    if (!config.entity) {
      throw new Error('You need to define an entity');
    }
    this.config = config;
  }

  getCardSize() {
    return 1;
  }
}

customElements.define('openmensa-card', OpenMensaCard);