export default [
  {
    files: ["*.js"],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: "module",
    },
    env: {
      node: true,
      es2021: true,
    },
    rules: {
      semi: "error"
    }
  },
];
