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
    "no-unused-expression": true,
    "no-duplicate-variable": true,
    "no-unused-variable": true,
    curly: false,
    "class-name": true,
    semicolon: ["always"],
    "triple-equals": true,
    "valid-jsdoc": "off",
    semi: [2, "always"],
    indent: ["error", 2, { SwitchCase: 1 }],
    "brace-style": ["error", "stroustrup"],
    "keyword-spacing": [
      "error",
      {
        after: true,
      },
    ],
    "comma-spacing": [
      "error",
      {
        before: false,
        after: true,
      },
    ],
    "space-before-blocks": "error",
    "space-before-function-paren": [
      "error",
      {
        anonymous: "always",
        named: "never",
        asyncArrow: "always",
      },
    ],
    "no-extra-boolean-cast": "off",
    "no-restricted-globals": [2, "event"],
    "react/prop-types": 0,
  },
};
