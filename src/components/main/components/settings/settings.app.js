import {
  SettingsApi, UsersApi,
} from '../../../../services/services.methods';
import {
  MAIN_API_URL, DEFAULT_SETTINGS,
} from '../../../../services/common/services.common.constants';
import ApiService from '../../../../services/common/services.common.api_service';

const user = new UsersApi();
const settings = new SettingsApi();
const userDefault = { // когда будет сделан логин получить инфу из локал сторадж
  email: 'rslang68@ya.ru',
  password: 'Rslang61?',
};

const settingsPage = {
  buttons: null,
  settings: null,
  saveButton: null,

  async init() {
    this.buttons = document.querySelectorAll('.switch-btn');
    this.buttons.forEach((element) => {
      element.addEventListener('click', () => {
        element.classList.toggle('switch-on');
      });
    });
    await this.getRemoteSettings();
    await this.loadSettingsToFront();
    this.saveButton = document.querySelector('.save__settings');
    this.saveButton.addEventListener('click', this.buttonUpdateSettings);
  },

  async getRemoteSettings() {
    const auth = await user.authenticateUser({
      email: userDefault.email,
      password: userDefault.password,
    });
    settings._apiService = new ApiService(MAIN_API_URL, auth.token);
    const set = await settings.getSettings({ userId: auth.userId });
    this.settings = set;
    if (this.settings === null) {
      const res = await settings.updateSettings({
        userId: auth.userId,
        wordsPerDay: DEFAULT_SETTINGS.wordsPerDay,
        optional: DEFAULT_SETTINGS.optional,
      });
      this.settings = res;
    }
  },

  loadSettingsToFront() {
    document.querySelector('.input-words__day').value = settingsPage.settings.wordsPerDay;
    Object.keys(settingsPage.settings.optional).forEach((key) => {
      if (settingsPage.settings.optional[key] === 'true') {
        document.querySelector(`#${key}`).classList.toggle('switch-on');
      }
    });
  },

  async buttonUpdateSettings() {
    const wordsPerDayFront = document.querySelector('.input-words__day').value;
    const optionalFront = {};
    settingsPage.buttons.forEach((button) => {
      if (button.classList.contains('switch-on')) {
        optionalFront[button.getAttribute('id')] = 'true';
      } else optionalFront[button.getAttribute('id')] = 'false';
    });
    const auth = await user.authenticateUser({
      email: userDefault.email,
      password: userDefault.password,
    });
    settings._apiService = new ApiService(MAIN_API_URL, auth.token);
    const res = await settings.updateSettings({
      userId: auth.userId,
      wordsPerDay: wordsPerDayFront,
      optional: optionalFront,
    });
    this.settings = res;
  },
};

export default settingsPage;
