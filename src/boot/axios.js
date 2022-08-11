import { boot } from "quasar/wrappers";
import axios from "axios";
import { Loading } from "quasar";

// Be careful when using SSR for cross-request state pollution
// due to creating a Singleton instance here;
// If any client changes this (global) instance, it might be a
// good idea to move this instance creation inside of the
// "export default () => {}" function below (which runs individually
// for each client)
const api = axios.create({ baseURL: process.env.API });

export default boot(({ app }) => {
  // for use inside Vue files (Options API) through this.$axios and this.$api

  app.config.globalProperties.$axios = axios;
  // ^ ^ ^ this will allow you to use this.$axios (for Vue Options API form)
  //       so you won't necessarily have to import axios in each vue file

  app.config.globalProperties.$api = api;
  // ^ ^ ^ this will allow you to use this.$api (for Vue Options API form)
  //       so you can easily perform requests against your app's API
  // Add a request interceptor
  api.interceptors.request.use(
    function (config) {
      // Do something before request is sent
      Loading.show();
      return config;
    },
    function (error) {
      // Do something with request error
      Loading.hide();
      return Promise.reject(error);
    }
  );

  // Add a response interceptor
  api.interceptors.response.use(
    function (response) {
      // Any status code that lie within the range of 2xx cause this function to trigger
      // Do something with response data
      Loading.hide();
      return response;
    },
    function (error) {
      // Any status codes that falls outside the range of 2xx cause this function to trigger
      // Do something with response error
      Loading.hide();
      return { ...error }.response.data;
    }
  );
});

export { api };
