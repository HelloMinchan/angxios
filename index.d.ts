interface IAngxios {
  /**
   * @name setBaseURL
   * @description set global axios defaults base URL
   * @param {string} baseURL
   */
  setBaseURL(baseURL: string): void;
  /**
   * @name setTimeout
   * @description set global axios defaults timeout
   * @param {number} time
   */
  setTimeout(time: number): void;
  /**
   * @name setRetryCount
   * @description set request retry count
   * @param {number} retryCount
   */
  setRetryCount(retryCount: number): void;

  /**
   * @name get
   * @description axios get Function
   * @param {string} url
   * @param {?object} config
   */
  get(url: string, config?: any): Promise<any>;
  /**
   * @name delete
   * @description axios delete Function
   * @param {string} url
   * @param {?object} config
   */
  delete(url: string, config?: any): Promise<any>;
  /**
   * @name options
   * @description axios options Function
   * @param {string} url
   * @param {?object} config
   */
  options(url: string, config?: any): Promise<any>;
  /**
   * @name post
   * @description axios post Function
   * @param {string} url
   * @param {?object} data
   * @param {?object} config
   */
  post(url: string, data?: any, config?: any): Promise<any>;
  /**
   * @name put
   * @description axios put Function
   * @param {string} url
   * @param {?object} data
   * @param {?object} config
   */
  put(url: string, data?: any, config?: any): Promise<any>;
  /**
   * @name patch
   * @description axios patch Function
   * @param {string} url
   * @param {?object} data
   * @param {?object} config
   */
  patch(url: string, data?: any, config?: any): Promise<any>;
}

declare const angxios: IAngxios;

export default angxios;
