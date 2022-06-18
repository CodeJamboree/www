/* eslint-env node */

const {
  env: { NODE_ENV },
} = process;

const env = NODE_ENV === "production" ? "prod" : "dev";

module.exports = require(`./configuration/webpack.${env}.js`);
