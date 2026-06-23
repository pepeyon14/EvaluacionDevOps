module.exports = [
  {
    ignores: ["node_modules/**", "coverage/**"],
  },
  {
    files: ["src/**/*.js", "tests/**/*.js"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "commonjs",
      globals: {
        require: "readonly",
        module: "readonly",
        process: "readonly",
        console: "readonly",
        __dirname: "readonly",
        describe: "readonly",
        test: "readonly",
        expect: "readonly",
      },
    },
    rules: {
      "no-console": "off",
      "no-unused-vars": "warn",
      semi: ["error", "always"],
      quotes: ["error", "single"],
    },
  },
];
