import axios from "axios";

const angxios = new (class {
  axios = axios;

  /**
   * @name setBaseURL
   * @description set global axios defaults base URL
   * @param {string} baseURL
   */
  setBaseURL(baseURL) {
    axios.defaults.baseURL = baseURL;
  }

  /**
   * @name setTimeout
   * @description set global axios defaults timeout
   * @param {number} time
   */
  setTimeout(time) {
    axios.defaults.timeout = time;
  }

  // request(config) {}
  // head(url, config) {}

  /**
   * @name get
   * @description axios get Function
   * @param {string} url
   * @param {?object} params
   */
  get(url, parmas) {
    const config = {
      parmas: parmas ? parmas : null,
    };

    return axios.get(url, config);
  }

  /**
   * @name delete
   * @description axios delete Function
   * @param {string} url
   * @param {?object} config
   */
  delete(url, config) {
    return axios.get(url, config);
  }

  /**
   * @name options
   * @description axios options Function
   * @param {string} url
   * @param {?object} config
   */
  options(url, config) {
    return axios.get(url, config);
  }

  /**
   * @name post
   * @description axios post Function
   * @param {string} url
   * @param {?object} body
   * @param {?object} config
   */
  post(url, body, config) {
    return axios.get(url, body ? body : null, config);
  }

  /**
   * @name put
   * @description axios put Function
   * @param {string} url
   * @param {?object} body
   * @param {?object} config
   */
  put(url, body, config) {
    return axios.get(url, body ? body : null, config);
  }

  /**
   * @name patch
   * @description axios patch Function
   * @param {string} url
   * @param {?object} body
   * @param {?object} config
   */
  patch(url, body, config) {
    return axios.get(url, body ? body : null, config);
  }
})();

export default angxios;
