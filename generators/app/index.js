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
        message: 'Use yarn (default: true)?',
        default: true,
      },
      {
        type: 'input',
        name: 'target',
        message: 'Using nodejs (default: nodejs, available values: web)?',
        default: 'nodejs'
      }
    ]);
  }

  writing() {
    const target = this.answers.target;
    this.fs.copyTpl(
      this.templatePath(`./${target}`),
      this.destinationPath(`./${target}`),
    );
    this.copyHiddenFiles(target);
  }

  copyHiddenFiles(target) {
    [
      '.env',
      '.eslintignore',
      '.vscode',
    ].forEach(each => {
      this.fs.write(
        this.templatePath(`./${target}/${each}`),
        this.destinationPath(`./${target}/${each}`),
      )
    })

    this.fs.write(
      this.destinationPath(`./${target}/.gitignore`),
      "node_modules",
      "dist"
    );
  }

  install() {
    this.installDependencies({
      bower: false,
      npm: !this.answers.yarn,
      yarn: this.answers.yarn,
    });
  }
};
