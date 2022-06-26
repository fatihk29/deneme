import {Api} from './api';

export class App {
  static searchUsers(payload) {
    return Api.get('episode', payload);
  }

  static getEpisodeDetail(payload) {
    return Api.get(`episode/${payload}`, payload);
  }

  static getAllCharacterDetail() {
    return Api.get('character');
  }
}
