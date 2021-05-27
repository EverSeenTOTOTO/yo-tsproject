module.exports = {
  'nodejs': {
    "name": "tsdemo",
    "main": "dist/index.js",
    "types": "dist/index.d.ts",
    "dependencies": {
      "dotenv": "^8.2.0",
      "module-alias": "^2.2.2",
      "reflect-metadata": "^0.1.13"
    },
    "devDependencies": {
      "@babel/core": "^7.12.9",
      "@babel/preset-env": "^7.12.7",
      "@babel/preset-typescript": "^7.12.7",
      "@types/jest": "^26.0.16",
      "@types/node": "^14.14.10",
      "@typescript-eslint/eslint-plugin": "^4.9.0",
      "@typescript-eslint/parser": "^4.9.0",
      "babel-jest": "^26.6.3",
      "babel-plugin-module-resolver": "^4.1.0",
      "eslint": "^7.15.0",
      "eslint-config-airbnb-typescript": "^12.0.0",
      "eslint-plugin-import": "^2.22.1",
      "eslint-plugin-jest": "^24.1.3",
      "jest": "^26.6.3",
      "nodemon": "^2.0.7",
      "ts-jest": "^26.4.4",
      "typescript": "^4.1.2"
    },
    "_moduleAliases": {
      "@": "dist"
    }
  },
  'web': {
    "name": "tsdemo",
    "main": "dist/index.js",
    "types": "dist/index.d.ts",
    "dependencies": {
      "reflect-metadata": "^0.1.13"
    },
    "devDependencies": {
      "@babel/core": "^7.12.9",
      "@babel/preset-env": "^7.12.7",
      "@babel/preset-typescript": "^7.12.7",
      "@types/node": "^14.14.10",
      "@typescript-eslint/eslint-plugin": "^4.9.0",
      "@typescript-eslint/parser": "^4.9.0",
      "babel-loader": "^8.2.2",
      "dotenv-webpack": "^7.0.2",
      "esbuild-loader": "^2.13.1",
      "eslint": "^7.15.0",
      "eslint-config-airbnb-typescript": "^12.0.0",
      "eslint-plugin-import": "^2.22.1",
      "eslint-plugin-jest": "^24.1.3",
      "typescript": "^4.1.2",
      "webpack": "^5.37.1",
      "webpack-cli": "^4.7.0",
      "webpack-merge": "^5.7.3"
    }
  }
}