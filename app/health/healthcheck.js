const checkDefaultEnv = require('../util/envChange');
//Set default Healthcheck variable if not already set
checkDefaultEnv('PACKAGES_ENVIRONMENT','local')
checkDefaultEnv('PACKAGES_PROJECT','alectronic-chripper')
checkDefaultEnv('PACKAGES_NAME','alectronic-chripper')
//checkDefaultEnv('PACKAGES_VERSION','1.0')
const healthcheck = require('@hmcts/nodejs-healthcheck');

const localHealth = () => {
  return true;
}

module.exports = {
  healthcheck : healthcheck,
  localHealth: localHealth
}
