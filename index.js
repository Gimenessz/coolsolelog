import chalk from 'chalk';

import cows from 'cows'; 

export default function coolsolelog(message) {
    console.log(chalk.blueBright(cows()[0]));
    console.log(chalk.greenBright(message));
}