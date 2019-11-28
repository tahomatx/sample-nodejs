const path = require('path');
const fs = require('fs');

module.exports = {
  "parserOptions": {
    "ecmaVersion": 2018,
    "sourceType": "module"
  },
  "extends": [
    "eslint:recommended",
    "plugin:node/recommended"
  ],
  "rules": {
    "strict": "error",
    "semi": "warn",
    "no-unused-vars": [
      "warn"
    ],
    "no-undef": "error",
    "no-irregular-whitespace": [
      "error",
      {
        "skipRegExps": true
      }
    ],
    "no-console": "off",
    "node/no-missing-require": [
      "error",
      {
        "allowModules": [],
        "resolvePaths": [
          path.resolve(__dirname)
        ],
        "tryExtensions": [
          ".js",
          ".json",
          ".node"
        ]
      },
    ],
  },
  "plugins": [
    "node",
  ],
  "env": {
    "es6": true,
    "node": true,
    "jest": true
  }
}
