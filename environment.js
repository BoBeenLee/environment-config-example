import config from './config.json';

const ENV_MAP = {
    development: {
        API_URL: "development"
    },
    staging: {
        API_URL: "staging"
    },
    production: {
        API_URL: "production"
    }
};

export default ENV_MAP[config.REACT_NATIVE_ENV] || ENV_MAP.development;
