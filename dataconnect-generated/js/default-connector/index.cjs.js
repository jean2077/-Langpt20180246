const { getDataConnect, validateArgs } = require('firebase/data-connect');

const connectorConfig = {
  connector: 'default',
  service: 'gptlanguage',
  location: 'asia-northeast3'
};
exports.connectorConfig = connectorConfig;

