import wepy from 'wepy';
import 'wepy-async-function';

import { getStore } from 'wepy-redux';
const store = getStore();

const ajax = {
    server_name: 'http://192.168.1.177:8081',
    async _xhr(method, url, data) {
      let res = await wepy.request({
        url: this.server_name + url,
        data,
        header: {
          Authorization:wepy.getStorageSync("token")
          // Authorization:store.getState().counter.token
        },
        method
      });
      return res.data;
    },
    get() {
      return this._xhr('GET', ...arguments);
    },
    post() {
      return this._xhr('POST', ...arguments);
    },
    put() {
      return this._xhr('PUT', ...arguments);
    },
    delete() {
      return this._xhr('DELETE', ...arguments);
    }
  };

  export default  ajax;
