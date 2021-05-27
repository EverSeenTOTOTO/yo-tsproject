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
    if(['nodejs', 'web'].indexOf(target) === -1) {
      this.log.error('invalid target: ', target);
      process.exit(-1)
    }
    this.fs.copyTpl(
      this.templatePath(`./${target}`),
      this.destinationPath(`./`),
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
        this.destinationPath(`./${each}`),
      )
    })

    this.fs.write(
      this.destinationPath(`./.gitignore`),
      "node_modules",
      "dist",
      "*.log"
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
