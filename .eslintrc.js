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
    // "prettier/@typescript-eslint",
    "plugin:prettier/recommended",
  ],
  rules: {
    "brace-style": ["error", "stroustrup"],
    "class-methods-use-this": [1],
    "class-name": [1],
    "comma-spacing": ["error", { before: false, after: true }],
    curly: [0],
    eqeqeq: [2, "smart"],
    "import/prefer-default-export": "off",
    indent: ["error", 2, { SwitchCase: 1 }],
    "keyword-spacing": ["error", { after: true }],
    "lines-between-class-members": [0],
    "max-classes-per-file": [1],
    "no-console": ["error", { allow: ["warn", "error"] }],
    "no-duplicate-variable": [2],
    "no-extra-boolean-cast": "off",
    "no-unused-expression": [1],
    "no-restricted-globals": [2, "event"],
    "no-unused-variable": [1],
    "react/prop-types": 0,
    semi: [2, "always"],
    "space-before-blocks": "error",
    "space-before-function-paren": [
      "error",
      {
        anonymous: "always",
        named: "never",
        asyncArrow: "always",
      },
    ],
    "space-infix-ops": ["error", { int32Hint: false }],
    "@typescript-eslint/no-explicit-any": [0],
    "@typescript-eslint/no-unused-vars": [0],
    "valid-jsdoc": "off",
  },
};
