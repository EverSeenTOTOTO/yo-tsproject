const Generator = require('yeoman-generator');

module.exports = class extends Generator {
  async prompting() {
    this.answers = await this.prompt([
      {
        type: 'input',
        name: 'name',
        message: 'Project name:',
        default: 'tsdemo',
      },
      {
        type: 'confirm',
        name: 'yarn',
        message: 'Use yarn?',
        default: false,
      },
    ]);
  }

  writing() {
    const pkgJson = {
      name: this.answers.name,
      main: 'dist/index.js',
      types: 'dist/index.d.ts',
      dependencies: {
        'reflect-metadata': '^0.1.13',
      },
      devDependencies: {
        '@babel/core': '^7.12.9',
        '@babel/preset-env': '^7.12.7',
        '@babel/preset-typescript': '^7.12.7',
        '@types/jest': '^26.0.16',
        '@types/node': '^14.14.10',
        '@typescript-eslint/eslint-plugin': '^4.9.0',
        '@typescript-eslint/parser': '^4.9.0',
        'babel-jest': '^26.6.3',
        eslint: '^7.15.0',
        'eslint-config-airbnb-typescript': '^12.0.0',
        'eslint-plugin-import': '^2.22.1',
        'eslint-plugin-jest': '^24.1.3',
        jest: '^26.6.3',
        "ts-jest": "^26.4.4",
        typescript: '^4.1.2',
      },
      scripts: {
        build: 'tsc',
        start: 'npm run build && node dist/index.js',
        lint: 'eslint --fix .',
        test: 'jest',
      },
    };

    // Extend or create package.json file in destination path
    this.fs.extendJSON(this.destinationPath('package.json'), pkgJson);
    this.fs.copyTpl(
      this.templatePath('./'),
      this.destinationPath('./'),
    );
    // copy hidden files
    this.fs.copy(
      this.templatePath('./.eslintrc.js'),
      this.destinationPath('./.eslintrc.js'),
    );
    this.fs.copy(
      this.templatePath('./.eslintignore'),
      this.destinationPath('./.eslintignore'),
    );
    this.fs.copy(
      this.templatePath('./.vscode/'),
      this.destinationPath('./.vscode/'),
    );
    this.fs.write(
        this.destinationPath('./.gitignore'),
        "node_modules"
    );
  }

  install() {
    this.installDependencies({
      npm: !this.answers.yarn,
      bower: false,
      yarn: this.answers.yarn,
    });
  }
};
