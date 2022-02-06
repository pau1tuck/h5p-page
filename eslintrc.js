module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: "module",
    ecmaFeatures: {},
  },
  settings: {},
  extends: [
    "airbnb-typescript-prettier",
    "prettier/@typescript-eslint",
    "plugin:prettier/recommended",
  ],
  rules: {
    "no-console": [0],
    "import/prefer-default-export": "off",
    "max-classes-per-file": [3],
    "class-methods-use-this": [1],
    "@typescript-eslint/no-unused-vars": [0],
    "@typescript-eslint/no-explicit-any": [0],
  },
};
