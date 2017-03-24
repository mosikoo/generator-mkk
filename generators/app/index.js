const yeoman = require('yeoman-generator');
const chalk = require('chalk');
const fs = require('fs');
const yosay = require('yosay');

class Generator extends yeoman {
  constructor(args, opts) {
    super(args, opts);
  }

  _private_method() {
    console.log('private hey');
  }

  // init
  initializing() {
    this.log(yosay(
      `Welcome to ${chalk.cyan('mkk generator')}, it builds for ${chalk.bgCyan('application')} with ${chalk.red('react or node')}and so on`
    ));
    this.log(chalk.red('I am going to build your app!'));
  }

  //input
  prompting() {
    const prompts = [
      {
        type: 'input',
        name: 'name',
        message: 'Your project name',
        default: this.appname,
      },
      {
        type: 'input',
        name: 'version',
        message: 'version',
        default: '1.0.0',
      },
      {
        type: 'input',
        name: 'author',
        message: 'author',
      },
      {
        type: 'input',
        name: 'main',
        message: 'entry file',
        default: 'index.js',
      },
      {
        type: 'input',
        name: 'description',
        message: 'description',
      },
      {
        type: 'input',
        name: 'liscense',
        message: 'liscense',
        default: 'MIT',
      },
    ]
    return this.prompt(prompts).then((props) => {
      this.props = props;
    });
  }

  //保存配置信息和文件
  configuring() {

  }

  default() {

  }

  // 生成目录结构
  writing() {
    const compilePath = this.templatePath();
    const files = fs.readdirSync(compilePath);
    this.fs.copyTpl(
      this.templatePath(),
      this.destinationPath(),
      this.props
    );
this.log(this.templatePath('./.*'));
    this.fs.copy(
      this.templatePath('./.*'),
      this.destinationRoot()
    );
  }

  conflicts() {

  }

  install() {
    // this.installDependencies({
    //   npm: true,
    //   bower: false,
    //   callback: function () {
    //     console.log('Everything is ready!');
    //   }
    // });
  }

  end() {
    this.on('end', () => {
      this.log.ok('you can start now!');
      process.exit();
    });
  }
}

module.exports = Generator;
