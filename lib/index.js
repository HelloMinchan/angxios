import axios from "axios";

const NAMESPACE = "angxios";
const NON_BODY_HTTP_METHOD = ["get", "delete", "options"];

axios.interceptors.request.use((config) => {
  const angxiosConfig = config[NAMESPACE] || {};

  if (Object.keys(angxiosConfig).length === 0) {
    config[NAMESPACE] = angxiosConfig;
    angxiosConfig.retryCount = Angxios.retryCount;
  } else {
    --angxiosConfig.retryCount;
  }

  return config;
});

axios.interceptors.response.use(
  (config) => {
    return config;
  },
  (error) => {
    const config = error.config;

    if (config[NAMESPACE].retryCount > 0) {
      if (NON_BODY_HTTP_METHOD.includes(config.method)) {
        return axios[`${config.method}`](config.url, config);
      } else {
        return axios[`${config.method}`](config.url, config.data, config);
      }
    }

    return Promise.reject(error);
  }
);

const Angxios = new (class {
  retryCount = 0;
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

  /**
   * @name setRetryCount
   * @description set request retry count
   * @param {number} retryCount
   */
  setRetryCount(retryCount) {
    this.retryCount = retryCount;
  }

  // request(config) {}
  // head(url, config) {}

  /**
   * @name get
   * @description axios get Function
   * @param {string} url
   * @param {?object} config
   */
  get(url, config) {
    return axios.get(url, config ? config : null);
  }

  /**
   * @name delete
   * @description axios delete Function
   * @param {string} url
   * @param {?object} config
   */
  delete(url, config) {
    return axios.delete(url, config ? config : null);
  }

  /**
   * @name options
   * @description axios options Function
   * @param {string} url
   * @param {?object} config
   */
  options(url, config) {
    return axios.options(url, config ? config : null);
  }

  /**
   * @name post
   * @description axios post Function
   * @param {string} url
   * @param {?object} body
   * @param {?object} config
   */
  post(url, body, config) {
    return axios.post(url, body ? body : null, config ? config : null);
  }

  /**
   * @name put
   * @description axios put Function
   * @param {string} url
   * @param {?object} body
   * @param {?object} config
   */
  put(url, body, config) {
    return axios.put(url, body ? body : null, config ? config : null);
  }

  /**
   * @name patch
   * @description axios patch Function
   * @param {string} url
   * @param {?object} body
   * @param {?object} config
   */
  patch(url, body, config) {
    return axios.patch(url, body ? body : null, config ? config : null);
  }
})();

export default Angxios;
