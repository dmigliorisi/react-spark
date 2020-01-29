import {Command} from '@oclif/command'
import chalk from 'chalk'
import cli from 'cli-ux'
import * as fs from 'fs'
import * as ncp from 'ncp'
import * as path from 'path'

class ReactSpark extends Command {
  static args = [
    {name: 'appName'},
  ];

  private SOURCE_TS = path.join(__dirname, '..', '/templates/ts');

  private SOURCE_TS_REDUX = path.join(__dirname, '..', '/templates/ts-redux');

  private SOURCE_REDUX = path.join(__dirname, '..', '/templates/redux');

  private SOURCE_BASIC = path.join(__dirname, '..', '/templates/basic');

  /**
   * Converts app name to valid directory name
   *
   * @param appname
   */
  cleanAppName(appname: string) {
    return appname.trim().toLowerCase().replace(/[^a-zA-Z0-9]/g, '')
  }

  async run() {
    const {args} = this.parse(ReactSpark);

    const createNewApp = async (appName: string) => {
      this.log(`Creating new app ${appName}`);
      // const includeRedux = await cli.prompt('Include Redux? (Y/n)');
      const includeRedux = false;
      const includeTypescript = await cli.prompt('Use Typescript? (Y/n)');

      if (includeRedux && includeTypescript)
        this.copyFiles(appName, this.SOURCE_TS_REDUX);
      else if (includeRedux)
        this.copyFiles(appName, this.SOURCE_REDUX);
      else if (includeTypescript)
        this.copyFiles(appName, this.SOURCE_TS);
      else
        this.copyFiles(appName, this.SOURCE_BASIC);
    };

    if (args.appName) {
      createNewApp(args.appName)
    } else {
      this.error('Missing argument appName')
    }
  }

  private printSuccessMessage = (folderName: string) => {
    this.log(chalk.green(`
        == CONGRATS == 
        Your app is ready for you to start pumping code into it!
        
        Now you can:
        1- cd ./${folderName}
        2- $ yarn
        3- $ yarn dev 
    `))
  };

  /**
   * Create the destination folder using the application name given,
   * and copy the files into it
   *
   * @param appname
   */
  private copyFiles = (appname: string, source: string) => {
    const folderName = this.cleanAppName(appname);
    fs.mkdir(folderName, (err) => {
      if (err) {
        return this.log("There was a problem creating your blog's folder: " + chalk.red(err.toString()))
      }
      this.log(`Folder - ${chalk.bold(folderName)} -  ${chalk.green('successfully created!')}`);
      ncp(source, folderName, (err: any) => {
        if (err) {
          return this.log(`There was a problem while copying your files: ${chalk.red(err)}`)
        }
        this.printSuccessMessage(folderName)
      })
    })
  };

}

export = ReactSpark
