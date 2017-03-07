var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'exp'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://127.0.0.1:27017'
  },

  test: {
    root: rootPath,
    app: {
      name: 'exp'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://127.0.0.1:27017'
  },

  production: {
    root: rootPath,
    app: {
      name: 'exp'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://127.0.0.1:27017'
  }
};

module.exports = config[env];
