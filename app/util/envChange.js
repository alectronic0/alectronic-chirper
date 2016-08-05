//function to set default env vars.
const checkDefaultEnv = (envName, defaultValue) => {
  if(process.env[envName]==undefined){process.env[envName] = defaultValue}
}

module.exports = checkDefaultEnv;
