const questions = require('./questions.json');
const fs = require('node:fs');
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});
let currentQ = 0;
let answersRes = [];

console.clear()

readline.question(`1 = New Response\n2 = View Response\n`, response => {
    if(response == 2) {
        console.log('--------------------------');
        readline.question(`Please enter a response number to view (1-${fs.readdirSync('./responses')?.length})\n`, response => {
            if(!fs.existsSync(`./responses/response_${response}.json`)) {
                console.log("That response doesn't exist...");
                return readline.close();
            };
            let file = fs.readFileSync(`./responses/response_${response}.json`);
            let fetched = JSON.parse(file);
            console.log(`--------------------------\n----- RESPONSE ${response} -----\n`);
            for(let item of fetched) {
                console.log(`Q: ${item.question}`);
                console.log('--')
                console.log(`A: ${item.answer}`);
                console.log('----------------');
            };
            console.log('--------------------------');
            return readline.close();
        });
    } else {
        console.log('--------------------------');
        next();
    };
});

async function next() {
    if(currentQ >= questions.length) {
        let name = `./responses/response_${fs.readdirSync('./responses')?.length + 1}.json`;
        fs.writeFileSync(name, JSON.stringify(answersRes));
        console.log('------------------------\nQUIZ COMPLETED!')
        return readline.close();
    };
    readline.question(`${questions[currentQ]}\n`, response => {
        answersRes.push({
            question: questions[currentQ],
            answer: response
        });
        currentQ++;
        next();
    });
};