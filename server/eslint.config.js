export default [
  {
    files: ["*.js"],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: "module",
      globals: {
        // Define globals from 'node' and 'es2021' env here:
        // You can add more if needed
        process: "readonly",
        console: "readonly",
        module: "readonly",
        require: "readonly",
        __dirname: "readonly",
        // etc.
      }
    },
    rules: {
      semi: "error"
    }
  },
];
