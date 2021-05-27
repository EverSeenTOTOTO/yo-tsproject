const DotenvWebpackPlugin = require('dotenv-webpack');
const path = require('path');

const paths = {
  src: path.resolve(__dirname, '..', 'src'),
  entry: path.resolve(__dirname, '..', 'src/index.ts'),
  dist: path.resolve(__dirname, '..', 'dist'),
};

module.exports = {
  entry: paths.entry,
  output: {
    clean: true,
    filename: 'index.js',
    path: paths.dist,
    library: {
      type: 'umd',
    },
  },
  target: 'web',
  devtool: 'source-map',
  resolve: {
    alias: {
      '@': paths.src,
    },
    extensions: [
      '.mjs',
      '.js',
      '.ts',
    ],
  },
  plugins: [
    new DotenvWebpackPlugin(),
  ],
};
