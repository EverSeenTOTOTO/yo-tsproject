module.exports = {
  presets: [
    ['@babel/preset-env', { targets: { node: 'current' } }],
    '@babel/preset-typescript',
  ],
  plugins: [
    ['module-resolver', {
      alias: {
        '@': `${__dirname}/src/`,
      },
      extensions: ['.js', '.ts', '.json'],
    },
    ],
  ],
};
