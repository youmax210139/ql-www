import { boot } from "quasar/wrappers";

const env = {
  APP_NAME: process.env.APP_NAME,
  APP_EMAIL: process.env.APP_EMAIL,
};

export default boot(({ app }) => {
  app.config.globalProperties.$env = env;
});

export { env };
