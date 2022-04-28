const readline = require('readline');
const rl = readline.createInterface({input: process.stdin,
                                    output: process.stdout});
let number = Math.floor(Math.random() * 10);
let num = 0;
console.log(number);

let foo = (question) => {
    return new Promise((resolve, reject) => {
        rl.question(question, (quest) => {
            resolve(quest);
        })
    });
}
let func = () => {
    let poll = foo('Приветствую! Угадайте число... \n');
    poll.then(userInput => {
        if (!isNaN(userInput) && userInput.trim().length > 0) {
            if (parseInt(userInput) === number){
                num += 1;
                console.log(`Успех! Вы угадали. Общее количество попыток: ${num}.`);
                rl.close();
            } else {
                if (parseInt(userInput) < number) {
                    num += 1;
                    func();
                    rl.setPrompt('Больше...\n');
                    rl.prompt();
                } else if (parseInt(userInput) > number) {
                    num += 1;
                    func();
                    rl.setPrompt('Меньше...\n');
                    rl.prompt();
                } else {
                    num += 1;
                    console.log(`Успех! Вы угадали. Общее количество попыток: ${num}.`);
                    rl.close();
                }
            }
        } else {
            num += 1;
            func();
            rl.setPrompt(`${userInput} - это не подойдёт, введите число!\n`);
            rl.prompt();   
        }
    });
}

func();
