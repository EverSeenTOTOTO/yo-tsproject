import { babel } from '@rollup/plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import typescript from '@rollup/plugin-typescript';
import alias from '@rollup/plugin-alias';
import { terser } from 'rollup-plugin-terser';
import path from 'path';

const opts = {
  plugins: [
    json(),
    alias({
      entries: [
        { find: '@', replacement: 'src' },
        { find: '@test', replacement: 'src/__tests__' },
      ],
    }),
    resolve({
      extensions: ['.mjs', '.js', '.ts', '.json', '.node'],
    }),
    commonjs(),
    babel({
      babelHelpers: 'runtime',
    }),
    terser({
      mangle: true,
      compress: true,
    }),
    typescript({
      tsconfig: 'tsconfig.rollup.json',
    }),
  ],
};

export default [{
  input: path.resolve(__dirname, 'src/index.ts'),
  output: [
    {
      file: path.resolve(__dirname, 'dist/index.js'),
      format: 'cjs',
      sourcemap: true,
    },
  ],
  ...opts,
}];
