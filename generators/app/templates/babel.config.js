module.exports = {
  presets: [
    ['@babel/preset-env', { targets: { node: 'current' } }],
    '@babel/preset-typescript',
  ],
  plugins: [
    ['module-resolver', {
      alias: {
        '@': `${process.cwd()}/src/`,
      },
      extensions: ['.js', '.ts', '.json'],
    },
    ],
  ],
};
