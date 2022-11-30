const fs = require('node:fs');
let data = fs.readFileSync('./data.json');
data = JSON.parse(data);
const chalk = require('chalk');
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

reAsk();
function reAsk() {
    readline.question(`1 = Give/Remove A Fuck.\n2 = Add A Fuck.\n3 = See how many fucks you've given...\n4 = Cancel process.\n`, response => {
        if(response == 1) {
            remove();
        } else if(response == 2) {
            add();
        } else if(response == 3) {
            viewUsed();
        } else if(response == 4) {
            readline.close();
        } else {
            console.log(chalk.blue('Invalid response #...'));
            refresh();
        };
    });
};

function add() {
    data.left = data.left + 1;
    console.log(chalk.green('You have successfully added 1 fuck to your fuck bank!'), chalk.yellow(`You now have ${data.left.toLocaleString()} Fucks!`));
    fs.writeFileSync('./data.json', JSON.stringify(data));
    refresh();
    return 1;
};

function remove() {
    if(data.left < 1) { 
        console.log(chalk.bgRed('You have no fucks left to give :['));
        return refresh();
    };
    console.log(chalk.red(`You have given a fuck... You only have ${data.left.toLocaleString()} Fucks left.`))
    data.left = data.left - 1;
    data.totalUsed = data.totalUsed + 1;
    fs.writeFileSync('./data.json', JSON.stringify(data));
    refresh();
    return 1;
};

function viewUsed() {
    console.log(chalk.yellow(`You have used a total of ${data.totalUsed.toLocaleString()} Fucks...`))
    refresh();
    return 1;
};

function refresh() {
    data = fs.readFileSync('./data.json');
    data = JSON.parse(data);
    reAsk();
    return 1;
};