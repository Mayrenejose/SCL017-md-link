module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
  },
  extends: [
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 12,
  },
  rules: {
    "indent" : ["error", 2],   //2 espacios de indentacion
    "linebreak-style" : ["error","unix"],   //finales de linea de unix
    "quotes" : ["error","double"],   //comillas dobles para string
    "semi" : ["error","always"]   //punto y coma obligatorio
  },
};
