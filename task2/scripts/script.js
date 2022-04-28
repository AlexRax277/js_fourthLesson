

const readline = require('readline');
const rl = readline.createInterface({input: process.stdin,
                                    output: process.stdout});
let number = Math.floor(Math.random() * 10);
let num = 0;
console.log(number)

let foo = () => {
    rl.question('Приветствую! Угадайте число... \n', 
    (userInput) => {
        if (!isNaN(userInput) && userInput.trim().length > 0) {
            if (parseInt(userInput) === number){
            num += 1;
            console.log(`Успех! Вы угадали. Общее количество попыток: ${num}.`);
            rl.close();
            } else {
                if (parseInt(userInput) < number) {
                    num += 1;
                    foo();
                    rl.setPrompt('Больше...\n');
                    rl.prompt();
                } else if (parseInt(userInput) > number) {
                    num += 1;
                    foo();
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
            foo();
            rl.setPrompt(`${userInput} - это не подойдёт, введите число!\n`);
            rl.prompt();   
        }
         
    });
    // rl.on('close', () => {
    //     console.log(`Успех! Вы угадали. Общее количество попыток: ${num}.`);
    // }); 
}

foo();
 


