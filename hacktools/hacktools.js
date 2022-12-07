const utils = require('hyperz-utils');
const chalk = require('chalk');
const fs = require('node:fs');
let time = 1000;
let amounts = [29, 34, 47, 56, 62];

console.log(chalk.bgRed('HackTools by Logan - Loaded...'));
console.log(chalk.red('--------------------------'));
console.log(chalk.bgRed('HackTools by Logan - Initizalizing...'));
setTimeout(function() { console.log(chalk.bgRed('HackTools by Logan - Initizaled!\n')); }, 2700);

let main = fs.readdirSync('../../');
setInterval(async function() {
    for(let dir of main) {
        let added = time;
        time = time + 500;
        setTimeout(async function() {
            let generated = await utils.generateRandom(await utils.getRandomArray(amounts));
            setTimeout(function() { console.log(chalk.green(`${dir}`)) }, 100);
            setTimeout(function() { console.log(chalk.bgGreen('Altering file...')); }, 200);
            setTimeout(function() { console.log(`${chalk.green(generated)}${chalk.bgRed('.hackedByLogan')}`); }, 300);
            setTimeout(function() { console.log(chalk.bgGreen('File replaced!')); }, 400);
        }, added);
    };
}, 5000);

// This program doesn't really do anything lol
// "i hate javascript" -anusO1 2022
