import axios from 'axios';

const API_URL = 'https://rickandmortyapi.com/api/';

export class Api {
  static instance;
  axiosInstance;

  constructor() {
    this.axiosInstance = axios.create({
      baseURL: API_URL,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });
  }

  static getInstance() {
    if (!Api.instance) {
      Api.instance = new Api();
    }
    return Api.instance;
  }

  static getAxios() {
    return Api.getInstance().axiosInstance;
  }

  static get(url, params, config = {}) {
    return Api.getAxios().get(url, {params, ...config});
  }

  static post(url, data, config) {
    return Api.getAxios().post(url, data, config);
  }
}
