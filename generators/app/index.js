const Generator = require('yeoman-generator');

const pkgJson = require('./pkgJson');

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
    const { name, target } = this.answers;
    if(this.existsDestination(name)) {
      this.log.error(`${name} folder is not empty`);
      process.exit(-1)
    }

    try {
      this.spawnCommandSync("mkdir", [ name ]);
    }catch(e) {
      this.log.error(e.message);
      console.error(e);
      process.exit(-1);
    }

    const target = this.answers.target;
    if(['nodejs', 'web'].indexOf(target) === -1) {
      this.log.error('invalid target: ', target);
      process.exit(-1)
    }

    const pkg = pkgJson[target];
    pkg.name = name;

    this.fs.extendJSON(this.destinationPath('package.json'), pkg);

    this.fs.copyTpl(
      this.templatePath(`./${target}`),
      this.destinationPath(`./`),
    );

    [
      '.env',
      '.eslintignore',
      '.eslintrc.js',
      '.vscode',
    ].forEach(each => {
      this.fs.copyTpl(
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
