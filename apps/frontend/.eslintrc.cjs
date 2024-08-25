/* eslint-env node */
require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
  root: true,
  extends: [
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    "plugin:prettier/recommended",
    "@vue/eslint-config-typescript",
  ],
  parserOptions: {
    ecmaVersion: "latest",
  },
  plugins: ["prettier"],
  rules: {
    //"vue/multi-word-component-names": "off", // required for nuxt
    "prettier/prettier": [
      "error",
      {
        endOfLine: "auto",
        singleAttributePerLine: true,
      },
    ],
    curly: "error",
    camelcase: "error",
    eqeqeq: "error",
    "no-undef": "off",
    "no-unused-vars": "warn",
    "no-useless-escape": "off",
    "object-curly-newline": [
      "error",
      {
        ObjectExpression: "always",
        ObjectPattern: {
          multiline: true,
        },
      },
    ],
  },
};
